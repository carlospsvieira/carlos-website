import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Telemedicine Dashboard",
    description: "Real-time patient management dashboard with scheduling, video calls, and analytics for a healthcare startup.",
    tags: ["React", "TypeScript", "REST API"],
  },
  {
    title: "SaaS Admin Panel",
    description: "Feature-rich admin interface with role-based access, data tables, and chart visualizations.",
    tags: ["React", "TypeScript", "Recharts"],
  },
  {
    title: "Mobile Health App",
    description: "Cross-platform mobile application for patient consultations and appointment booking.",
    tags: ["Ionic React", "TypeScript"],
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24">
    <div className="container">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Portfolio</p>
      <h2 className="text-3xl font-bold mb-12">Example Work</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="group rounded-xl border border-border bg-card p-7 shadow-soft hover:shadow-card transition-shadow duration-300">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
