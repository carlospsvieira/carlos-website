import { Building2, Users } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="container">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Experience</p>
      <h2 className="text-3xl font-bold mb-12">Proven Track Record</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border bg-card p-8 shadow-soft">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-accent text-accent-foreground mb-5">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Telemedicine Platform</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Built and maintained a telemedicine system serving <span className="font-semibold text-foreground">50,000+ users</span>.
            Handled complex scheduling, real-time video consultations, and HIPAA-compliant data flows.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "REST APIs", "Ionic"].map((t) => (
              <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">{t}</span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-8 shadow-soft">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-accent text-accent-foreground mb-5">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold mb-2">4+ Years of React Development</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            Worked with multiple startups and SaaS companies to ship features, fix production bugs,
            and improve frontend performance across diverse industries.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Bug Fixes", "Feature Dev", "Performance", "API Integration"].map((t) => (
              <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
