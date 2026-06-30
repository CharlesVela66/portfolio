export type ProjectType = {
    title: string;
    description: string;
    year: string;
    stack: string[];
    link: string;
    image: string;
}

export type SocialType = {
    value: string;
    icon: string;
}

export type ContactState = {
    success?: boolean;
    error?: string;
    fieldErrors?: {
        name?: string[];
        email?: string[];
        message?: string[]
    }
}