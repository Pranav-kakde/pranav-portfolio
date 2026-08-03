import { GraduationCap } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Section";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Academic background" />

      <Reveal delay={80} className="mt-10">
        <div className="surface-panel rounded-2xl p-7 sm:p-9">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-5 sm:flex sm:justify-between">
            <div className="flex min-w-0 gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold">
                <GraduationCap />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-bold leading-snug sm:text-xl">
                  Bachelor of Science (B.Sc.) in Computer Science
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  MIT College, BAMU University — Chhatrapati Sambhajinagar (Aurangabad)
                </p>
                <p className="mt-1 text-sm text-muted-foreground">2022 – 2025</p>
              </div>
            </div>
            <div className="shrink-0 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-center">
              <p className="font-display text-xl font-bold text-primary">9.09</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-widest text-muted-foreground">
                CGPA / 10
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
