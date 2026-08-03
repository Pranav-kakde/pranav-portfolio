import { ArrowRight, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, roles } from "@/lib/portfolio-data";
import { useTypewriter } from "@/hooks/use-reveal";

const bars = [0.4, 0.75, 0.55, 0.95, 0.65, 0.85, 0.45, 0.7, 0.9, 0.5, 0.8, 0.6];

const links = [
  { href: contact.phoneHref, label: `Call ${contact.phone}`, Icon: Phone },
  { href: contact.emailHref, label: `Email ${contact.email}`, Icon: Mail },
  { href: contact.linkedin, label: "LinkedIn profile", Icon: Linkedin },
  { href: contact.github, label: "GitHub profile", Icon: Github },
];

export function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background motif */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="dot-grid absolute inset-0 opacity-[0.18]" />
        <div className="absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 flex h-40 items-end justify-center gap-2 opacity-30 sm:gap-3">
          {bars.map((h, i) => (
            <span
              key={i}
              className="w-3 origin-bottom rounded-t-sm bg-primary/50 sm:w-5"
              style={{
                height: `${h * 100}%`,
                animation: `bar-pulse ${3 + (i % 4) * 0.6}s ease-in-out ${i * 0.18}s infinite`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Open to Data Analyst roles
        </p>

        <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
          Pranav Kakde
        </h1>

        <p
          className="mt-4 font-display text-xl font-semibold sm:text-3xl"
          aria-label={roles.join(", ")}
        >
          <span className="text-gradient">{typed}</span>
          <span className="animate-caret ml-1 inline-block h-6 w-[3px] translate-y-0.5 bg-gold sm:h-8" />
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Turning raw data into decisions — dashboards, insights, and automation that actually get
          used.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button asChild variant="hero" size="lg">
            <a href="#projects">
              View Projects <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="heroOutline" size="lg">
            <a href={contact.resume}>
              <Download /> Download Resume
            </a>
          </Button>
        </div>

        <ul className="mt-10 flex flex-wrap items-center gap-3">
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <Button asChild variant="chip" size="iconLg" aria-label={label} title={label}>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <Icon />
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
