import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal, Section, SectionHeading } from "./Section";
import { contact, sections } from "@/lib/portfolio-data";

const directLinks = [
  { href: contact.phoneHref, label: contact.phone, Icon: Phone },
  { href: contact.emailHref, label: contact.email, Icon: Mail },
  { href: contact.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: contact.github, label: "GitHub", Icon: Github },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Section id="contact">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk data"
          description="Have a dashboard to build, a dataset to untangle, or a role to fill? Drop a message."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <Reveal delay={80}>
            <form
              className="surface-panel rounded-2xl p-7 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Thanks! Your message has been noted.", {
                  description: `Pranav will reply at ${contact.email}.`,
                });
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What would you like to build or analyze?"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="mt-6 w-full sm:w-auto">
                <Send /> Send Message
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">
                {sent
                  ? "Message captured — for a guaranteed reply, email directly."
                  : "Prefer email? Reach out directly using the links alongside."}
              </p>
            </form>
          </Reveal>

          <Reveal delay={160}>
            <div className="surface-panel rounded-2xl p-7 sm:p-8">
              <h3 className="font-display text-base font-bold">Direct contact</h3>
              <ul className="mt-5 space-y-3">
                {directLinks.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-xl border border-border bg-surface-elevated px-4 py-3 transition-colors hover:border-primary/50"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
                        <Icon className="size-4" />
                      </span>
                      <span className="truncate text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                        {label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pranav Kakde..
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
