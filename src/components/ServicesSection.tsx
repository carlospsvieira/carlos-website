import { Bug, Zap, Gauge, Plug } from "lucide-react";

const services = [
  {
    icon: Bug,
    title: "React Bug Fixing",
    description: "Quick diagnosis and resolution of bugs in your React codebase, from state issues to rendering glitches.",
  },
  {
    icon: Zap,
    title: "Feature Implementation",
    description: "Ship new features fast without disrupting your existing app. Clean, tested, production-ready code.",
  },
  {
    icon: Gauge,
    title: "Performance Improvements",
    description: "Optimize slow renders, reduce bundle size, and improve Core Web Vitals for better user experience.",
  },
  {
    icon: Plug,
    title: "API Integrations",
    description: "Connect your React frontend to any REST API, third-party service, or backend system seamlessly.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="container">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Services</p>
      <h2 className="text-3xl font-bold mb-4">What I Can Help You With</h2>
      <p className="text-muted-foreground max-w-xl mb-14">
        Focused, high-quality React development services designed for startups that need to move fast.
      </p>
      <div className="grid sm:grid-cols-2 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-xl border border-border bg-card p-7 shadow-soft hover:shadow-card transition-shadow duration-300"
          >
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-accent text-accent-foreground mb-5">
              <s.icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
