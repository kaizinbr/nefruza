export type NewsletterSignupState = {
    status: "idle" | "success" | "error";
    message: string;
};

export type NewsletterConfirmationState = {
    status:
        | "idle"
        | "success"
        | "already-confirmed"
        | "invalid"
        | "expired"
        | "error";
    message: string;
};

export const initialNewsletterSignupState: NewsletterSignupState = {
    status: "idle",
    message: "",
};

export const initialNewsletterConfirmationState: NewsletterConfirmationState = {
    status: "idle",
    message: "",
};
