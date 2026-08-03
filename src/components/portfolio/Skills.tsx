import { BarChart3, Bot, Code2, FileSpreadsheet, Layers, Search } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Section";
import { skillGroups } from "@/lib/portfolio-data";

const iconMap = {
  search: Search,
  code: Code2,
  chart: BarChart3,
  layers: Layers,
  report: FileSpreadsheet,
  bot: Bot,
} as const;

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="The toolkit behind the dashboards"
        description="From raw extraction to modeled data, automated reporting, and AI-assisted workflows."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon];
          return (
            <Reveal key={group.title} delay={i * 70}>
              <article className="surface-panel card-lift flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <Icon />
                  </span>
                  <h3 className="min-w-0 font-display text-base font-bold">{group.title}</h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-muted-foreground">
                    <span>Proficiency</span>
                    <span className="text-primary">{group.level}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-accent">
                    <div
                      className="h-full rounded-full bg-primary transition-[width] duration-1000"
                      style={{ width: `${group.level}%` }}
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
