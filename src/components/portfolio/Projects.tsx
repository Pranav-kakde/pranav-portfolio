import { useState } from "react";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Section, SectionHeading } from "./Section";
import { contact, projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export function Projects() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Dashboards and automation, shipped"
        description="Each project started with a business question and ended with something a stakeholder could click."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project, i) => {
          const expanded = open === i;
          return (
            <Reveal key={project.title} delay={i * 90}>
              <article className="surface-panel card-lift flex h-full flex-col overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  width={1200}
                  height={750}
                  className="aspect-[16/10] w-full border-b border-border object-cover"
                />

                <div className="flex flex-1 flex-col p-6">
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-primary/12 px-2.5 py-1 text-[11px] font-medium text-primary"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-4 font-display text-lg font-bold leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>

                  <div
                    className={cn(
                      "grid transition-all duration-500",
                      expanded ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <ul className="space-y-2.5 overflow-hidden">
                      {project.details.map((d) => (
                        <li
                          key={d}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
                    <Button
                      variant="heroOutline"
                      size="sm"
                      aria-expanded={expanded}
                      onClick={() => setOpen(expanded ? null : i)}
                    >
                      {expanded ? "Hide Details" : "View Details"}
                      <ChevronDown
                        className={cn("transition-transform", expanded && "rotate-180")}
                      />
                    </Button>
                    <Button asChild variant="chip" size="sm">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github /> GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120} className="mt-6">
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="surface-panel card-lift grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl p-7 sm:flex sm:justify-between"
        >
          <div className="min-w-0">
            <h3 className="font-display text-lg font-bold">More projects on GitHub</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Notebooks, SQL queries, and automation workflows in progress.
            </p>
          </div>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
            <ArrowUpRight />
          </span>
        </a>
      </Reveal>
    </Section>
  );
}
