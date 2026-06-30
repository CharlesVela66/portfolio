'use client'

import { useActionState, useEffect, useRef, useState } from 'react'
import { sendContactEmail } from '@/app/actions/contact'
import type { ContactState } from '@/types/types'
import { Field, FieldGroup, FieldLabel, FieldError } from './ui/field'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Check, Send } from 'lucide-react'

const initialState: ContactState = {}

const toFieldErrors = (msgs?: string[]) =>
  msgs?.map((message) => ({ message }))

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState)
  const [sent, setSent] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!state.success) return
    formRef.current?.reset()
    const show = setTimeout(() => setSent(true), 0)
    const hide = setTimeout(() => setSent(false), 3000)
    return () => {
      clearTimeout(show)
      clearTimeout(hide)
    }
  }, [state.success])

  return (
    <form ref={formRef} action={formAction}>
      <FieldGroup className="space-y-0">
        <Field>
          <FieldLabel>Your name</FieldLabel>
          <Input name="name" type="text" required placeholder="John Doe" autoComplete='name'/>
          <FieldError errors={toFieldErrors(state.fieldErrors?.name)} />
        </Field>
        <Field>
          <FieldLabel>Email address</FieldLabel>
          <Input name="email" type="email" required placeholder="you@email.com" autoComplete='email'/>
          <FieldError errors={toFieldErrors(state.fieldErrors?.email)} />
        </Field>
        <Field>
          <FieldLabel>Message</FieldLabel>
          <Textarea name="message" required placeholder="Hi Carlos, I'd love to..." autoComplete='off'/>
          <FieldError errors={toFieldErrors(state.fieldErrors?.message)} />
        </Field>
        {state.error && <p className="text-sm text-destructive">{state.error}</p>}
        <Field className="mt-2">
          <Button
            type="submit"
            disabled={isPending || sent}
            className="flex flex-row gap-1 bg-text text-bg-main p-4 w-fit! self-end cursor-pointer disabled:opacity-60"
          >
            {sent ? (
              <><Check className="w-4 h-4" /> Sent!</>
            ) : isPending ? (
              'Sending...'
            ) : (
              <>Send message <Send className="w-4 h-4" /></>
            )}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}

export default ContactForm
