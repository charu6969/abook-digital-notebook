import { TrendingUp, Users, DollarSign, Zap } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "1.4B",
    label: "Students globally",
    description: "Our primary target market",
  },
  {
    icon: DollarSign,
    value: "$50B",
    label: "EdTech market",
    description: "And growing 15% YoY",
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "Digital adoption growth",
    description: "Since 2020",
  },
  {
    icon: Zap,
    value: "$0",
    label: "Our price",
    description: "Forever free",
  },
];

const YCPitchSection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header with gradient */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(217_91%_60%_/_0.1),transparent)]" />
            <span className="relative inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              For Investors
            </span>
            <h2 className="relative text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why ABook will win
            </h2>
            <p className="relative text-lg text-muted-foreground max-w-2xl mx-auto">
              A massive market with a clear pain point, and we're the only free, open-source solution.
            </p>
          </div>

          {/* Metrics grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-6 rounded-2xl bg-card border border-border text-center card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {metric.value}
                </div>
                <div className="font-medium text-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>

          {/* Pitch statement */}
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6">
              "1.4 billion students need affordable digital tools. Premium tablets cost $400+. 
              <span className="text-primary"> We're building the free alternative </span>
              that works on any device."
            </blockquote>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-background border border-border text-sm">
                Open Source
              </span>
              <span className="px-3 py-1 rounded-full bg-background border border-border text-sm">
                No Lock-in
              </span>
              <span className="px-3 py-1 rounded-full bg-background border border-border text-sm">
                Global Scale
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YCPitchSection;
