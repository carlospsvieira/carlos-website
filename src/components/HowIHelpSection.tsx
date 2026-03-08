import { CheckCircle2 } from "lucide-react";

const points = [
  "Your React app has small bugs piling up that slow down your team.",
  "You need a new feature shipped this week, not next month.",
  "Your frontend performance is hurting user retention.",
  "You don't have a dedicated frontend developer on your team.",
];

const HowIHelpSection = () => (
  <section id="how-i-help" className="py-24 bg-card">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">How I Help</p>
        <h2 className="text-3xl font-bold mb-4">Built for Startups That Move Fast</h2>
        <p className="text-muted-foreground leading-relaxed">
          Many startups have React applications that need ongoing maintenance — small bug fixes, quick
          improvements, or features that need to ship yesterday. I embed into your workflow and deliver
          production-ready code with fast turnaround.
        </p>
      </div>
      <div className="max-w-lg mx-auto space-y-4">
        {points.map((p) => (
          <div key={p} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-foreground leading-relaxed">{p}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowIHelpSection;
