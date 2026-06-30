import { ContactState } from "@/types/types";

interface EmailValidationParams {
    name: string;
    email: string;
    message: string;
}

export function validateEmailForm ({ name, email, message }: EmailValidationParams): ContactState['fieldErrors']  {
    const fieldErrors: ContactState['fieldErrors'] = {};

    if (!name) fieldErrors.name = ['Name is required'];
    if (!email) fieldErrors.email = ['Email is required'];
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fieldErrors.email = ['Enter a valid email'];
    if (!message) fieldErrors.message = ['Message is required'];

    return fieldErrors;
}