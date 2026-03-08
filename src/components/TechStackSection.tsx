const techs = [
  { name: "React", description: "Component-based UIs" },
  { name: "TypeScript", description: "Type-safe development" },
  { name: "REST APIs", description: "Backend integrations" },
  { name: "Ionic React", description: "Cross-platform apps" },
];

const TechStackSection = () => (
  <section id="tech-stack" className="py-24 bg-card">
    <div className="container">
      <div className="text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Tech Stack</p>
        <h2 className="text-3xl font-bold mb-4">Tools I Work With</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {techs.map((t) => (
          <div key={t.name} className="text-center rounded-xl border border-border bg-background p-6 shadow-soft">
            <p className="font-mono text-sm font-semibold text-foreground mb-1">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
