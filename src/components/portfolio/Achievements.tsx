import { Reveal, Section, SectionHeading } from "./Section";
import { achievements } from "@/lib/portfolio-data";

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeading eyebrow="Achievements" title="Recognition & certifications" />

      <div className="relative mt-12">
        <div
          aria-hidden
          className="absolute left-5 top-0 h-full w-px bg-border sm:left-0 sm:top-6 sm:h-px sm:w-full"
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <li className="relative pl-14 sm:pl-0 sm:pt-16">
                <span className="absolute left-0 top-1 grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface-elevated text-lg sm:left-0 sm:top-0.5">
                  {a.emoji}
                </span>
                <div className="surface-panel card-lift h-full rounded-2xl p-5">
                  <h3 className="font-display text-sm font-bold leading-snug">{a.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.org}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
