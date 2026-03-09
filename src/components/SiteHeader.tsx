import { Code2 } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const SiteHeader = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
    <div className="container flex items-center justify-between h-16">
      <a href="#" className="flex items-center gap-2 font-semibold text-foreground">
        <Code2 className="w-5 h-5 text-primary" />
        <span>Carlo Vieira - React Engineer</span>
      </a>
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
      >
        Get in touch →
      </a>
    </div>
  </header>
);

export default SiteHeader;
