'use server'

import { ContactState } from "@/types/types";
import { validateEmailForm } from "@/validations/emailValidations";
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(
    prevState: ContactState,
    formData: FormData
): Promise<ContactState> {
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();

    // Validation
    const fieldErrors: ContactState['fieldErrors'] = validateEmailForm({
        name: name,
        email: email,
        message: message,
    });

    if (fieldErrors?.name || fieldErrors?.email || fieldErrors?.message) return { fieldErrors };

    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'carlosed.velasco@gmail.com',
            subject: `New message from ${name}`,
            html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`
        })
        return { success: true }
    } catch {
        return { error: 'Failed to send email. Please try again later.'}
    }
}