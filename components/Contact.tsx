import { SOCIALS } from "@/constants/constants"
import { Field, FieldGroup, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Send } from "lucide-react"

const Contact = () => {
  return (
    <div className="bg-bg-secondary flex flex-row w-full px-20 py-10">
      <div className="w-full flex flex-col space-y-4">
        <h1 className="text-accent-main text-xl">Let&apos;s connect!</h1>
        <h2 className="font-medium text-4xl">Got a project in mind?</h2>
        <h3 className="font-medium text-3xl">Let&apos;s Talk!</h3>
        <p>Whether you&apos;re looking for a full-stack developer, a technical lead, or just want to say hi. My inbox is open.</p>
        <div className="mt-2 space-y-4">
          {SOCIALS.map((social, index) => (
            <div key={index} className="flex flex-row gap-3">
              {social.value}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full rounded-lg bg-bg-main ml-20 p-8">
        <FieldGroup className="space-y-0">
          <Field>
            <FieldLabel>Your name</FieldLabel>
            <Input 
              type="text"
              required
              placeholder="John Doe"
            />
          </Field>
          <Field>
            <FieldLabel>Email address</FieldLabel>
            <Input 
              type="email"
              required
              placeholder="you@email.com"
            />
          </Field>
          <Field>
            <FieldLabel>Message</FieldLabel>
            <Textarea 
              required
              placeholder="Hi Carlos, I&apos;d love to..."
            />
          </Field>
          <Field className="mt-2">
            <Button type="submit" className="flex flex-row gap-1 bg-text text-bg-main p-4 w-fit! self-end">
              Send message
              <Send className="w-4 h-4"/>
            </Button>
          </Field>
        </FieldGroup>
      </div>
    </div>
  )
}

export default Contact