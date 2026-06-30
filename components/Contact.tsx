import { SOCIALS } from "@/constants/constants"
import { Field, FieldGroup, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Send, Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./BrandIcons"

const SOCIAL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: Mail,
  linkedin: LinkedinIcon,
  github: GithubIcon,
}

const Contact = () => {
  return (
    <div className="bg-bg-secondary flex flex-col md:flex-row w-full px-4 sm:px-10 md:px-20 py-10 gap-8" id="contact">
      <div className="w-full flex flex-col space-y-4">
        <h1 className="text-accent-main text-xl">Let&apos;s connect!</h1>
        <h2 className="font-medium text-3xl md:text-4xl">Got a project in mind?</h2>
        <h3 className="font-medium text-2xl md:text-3xl">Let&apos;s Talk!</h3>
        <p>Whether you&apos;re looking for a full-stack developer, a technical lead, or just want to say hi. My inbox is open.</p>
        <div className="mt-2 space-y-4">
          {SOCIALS.map((social, index) => {
            const Icon = SOCIAL_ICONS[social.icon]
            const href = social.icon === "mail" ? `mailto:${social.value}` : social.value
            return (
              <a
                key={index}
                href={href}
                target={social.icon === "mail" ? undefined : "_blank"}
                rel={social.icon === "mail" ? undefined : "noopener noreferrer"}
                className="flex flex-row items-center gap-3 hover:text-accent-main transition-colors"
              >
                {Icon && <Icon className="w-5 h-5" />}
                {social.value}
              </a>
            )
          })}
        </div>
      </div>
      <div className="w-full rounded-lg bg-bg-main p-6 md:p-8">
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