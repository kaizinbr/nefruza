export interface JobApplicationState {
    success: boolean;
    message: string;
    fieldErrors?: Partial<
        Record<
            | "name"
            | "email"
            | "phone"
            | "city"
            | "area"
            | "linkedin"
            | "message"
            | "resume"
            | "privacy",
            string
        >
    >;
}
