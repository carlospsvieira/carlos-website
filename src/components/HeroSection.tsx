import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative py-28 md:py-36">
    <div className="container">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8 shadow-soft">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for new projects
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-[1.15] mb-6">
          React Developer Helping Startups Fix Bugs and Ship Features{" "}
          <span className="text-primary">Faster</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
          4+ years experience building and maintaining production React applications.
          I help startups move quickly without compromising code quality.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="hero" asChild>
            <a href="#contact">
              Book a quick call
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#services">View services</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
