import "server-only";

import {
    DeleteObjectCommand,
    PutObjectCommand,
    S3Client,
} from "@aws-sdk/client-s3";
import { neon } from "@neondatabase/serverless";
import { createHmac, randomUUID } from "node:crypto";

const HOURLY_REQUEST_LIMIT = 3;
const DAILY_EMAIL_LIMIT = 5;
const CONSENT_VERSION = "career-privacy-v1";

type StoreJobApplicationInput = {
    area: string;
    city: string;
    email: string;
    ipAddress: string | null;
    linkedin: string | null;
    message: string | null;
    name: string;
    phone: string;
    resume: Buffer;
    resumeFilename: string;
};

export class JobApplicationRateLimitError extends Error {
    constructor() {
        super("Limite de candidaturas atingido.");
        this.name = "JobApplicationRateLimitError";
    }
}

function requiredEnvironment(name: string) {
    const value = process.env[name]?.trim();
    if (!value) throw new Error(`${name} não configurada.`);
    return value;
}

function createDatabaseClient() {
    return neon(requiredEnvironment("DATABASE_URL"));
}

function createR2Client() {
    return new S3Client({
        region: "auto",
        endpoint: `https://${requiredEnvironment("R2_ACCOUNT_ID")}.r2.cloudflarestorage.com`,
        credentials: {
            accessKeyId: requiredEnvironment("R2_ACCESS_KEY_ID"),
            secretAccessKey: requiredEnvironment("R2_SECRET_ACCESS_KEY"),
        },
    });
}

function hashRequester(ipAddress: string | null) {
    if (!ipAddress) return null;
    const salt = requiredEnvironment("APPLICATION_RATE_LIMIT_SALT");
    return createHmac("sha256", salt).update(ipAddress).digest("hex");
}

function safeFilename(filename: string) {
    const normalized = filename
        .replace(/[\r\n]/g, " ")
        .replace(/[^a-zA-Z0-9._ -]/g, "-")
        .replace(/\s+/g, " ")
        .trim()
        .slice(-180);
    return normalized || "curriculo.pdf";
}

export async function storeJobApplication(input: StoreJobApplicationInput) {
    const sql = createDatabaseClient();
    const requesterHash = hashRequester(input.ipAddress);

    if (requesterHash) {
        const rows = await sql`
            SELECT COUNT(*)::int AS "count"
            FROM "job_application"
            WHERE "requesterHash" = ${requesterHash}
              AND "createdAt" >= NOW() - INTERVAL '1 hour'
        `;
        if (Number(rows[0]?.count ?? 0) >= HOURLY_REQUEST_LIMIT) {
            throw new JobApplicationRateLimitError();
        }
    }

    const emailRows = await sql`
        SELECT COUNT(*)::int AS "count"
        FROM "job_application"
        WHERE LOWER("email") = ${input.email.toLowerCase()}
          AND "createdAt" >= NOW() - INTERVAL '1 day'
    `;
    if (Number(emailRows[0]?.count ?? 0) >= DAILY_EMAIL_LIMIT) {
        throw new JobApplicationRateLimitError();
    }

    const id = randomUUID();
    const now = new Date();
    const year = now.getUTCFullYear();
    const month = String(now.getUTCMonth() + 1).padStart(2, "0");
    const resumeKey = `job-applications/${year}/${month}/${id}/resume.pdf`;
    const resumeFilename = safeFilename(input.resumeFilename);
    const bucket = requiredEnvironment("R2_BUCKET_NAME");
    const r2 = createR2Client();

    await r2.send(
        new PutObjectCommand({
            Bucket: bucket,
            Key: resumeKey,
            Body: input.resume,
            ContentType: "application/pdf",
            ContentLength: input.resume.byteLength,
            ContentDisposition: `attachment; filename="curriculo.pdf"; filename*=UTF-8''${encodeURIComponent(resumeFilename)}`,
            CacheControl: "private, no-store",
            Metadata: { applicationId: id },
        }),
    );

    try {
        await sql`
            INSERT INTO "job_application" (
                "id", "name", "email", "phone", "city", "area",
                "linkedin", "message", "resumeKey", "resumeFilename",
                "resumeContentType", "resumeSize", "requesterHash",
                "consentVersion", "consentedAt", "status", "createdAt", "updatedAt"
            ) VALUES (
                ${id}::uuid, ${input.name}, ${input.email}, ${input.phone},
                ${input.city}, ${input.area}, ${input.linkedin}, ${input.message},
                ${resumeKey}, ${resumeFilename}, 'application/pdf',
                ${input.resume.byteLength}, ${requesterHash}, ${CONSENT_VERSION},
                ${now}, 'NEW'::"JobApplicationStatus", ${now}, ${now}
            )
        `;
    } catch (error) {
        try {
            await r2.send(
                new DeleteObjectCommand({ Bucket: bucket, Key: resumeKey }),
            );
        } catch (cleanupError) {
            console.error("Falha ao remover currículo órfão do R2:", cleanupError);
        }
        throw error;
    }

    return { id };
}
