import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { sections } from "@/lib/portfolio-data";
import { useActiveSection } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ids = sections.map((s) => s.id);

export function Nav() {
  const active = useActiveSection(ids);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8"
      >
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 font-display text-sm font-bold text-primary">
            PK
          </span>
          <span className="truncate font-display text-sm font-bold tracking-tight sm:text-base">
            Pranav Kakde
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm transition-colors",
                  active === s.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {s.label}
                {active === s.id ? (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>

      {open ? (
        <ul className="border-t border-border bg-background/95 px-5 pb-4 backdrop-blur-xl lg:hidden">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "block border-b border-border/60 py-3 text-sm",
                  active === s.id ? "text-primary" : "text-muted-foreground",
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
