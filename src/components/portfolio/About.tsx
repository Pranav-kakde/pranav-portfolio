import { Reveal, Section, SectionHeading } from "./Section";

const stats = [
  { value: "10+", label: "End-to-end analytics projects" },
  { value: "5+", label: "Machine Learning Projects" },
  { value: "9.09", label: "CGPA in B.Sc. Computer Science" },
  { value: "SIH'24", label: "National hackathon finalist" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="Analytics with a stakeholder mindset" />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
        <Reveal delay={80}>
          <div className="surface-panel rounded-2xl p-7 sm:p-9">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Data Analyst skilled in <span className="text-foreground">SQL, Python, Power BI</span>{" "}
              and Excel with hands-on experience in data cleaning, exploratory data analysis (EDA),
              KPI reporting, and dashboard development.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I've built end-to-end analytics projects covering customer behavior analysis and
              business intelligence reporting — a{" "}
              <span className="text-foreground">Smart India Hackathon 2024 Finalist</span> known for
              strong problem-solving and stakeholder-focused analytical thinking.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={120 + i * 80}>
              <div className="surface-panel card-lift h-full rounded-2xl p-5">
                <p className="font-display text-2xl font-bold text-primary sm:text-3xl">{s.value}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
