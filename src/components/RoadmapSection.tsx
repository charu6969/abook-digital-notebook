import { Check, Clock, Sparkles } from "lucide-react";

const roadmapItems = [
  {
    version: "v1.0",
    status: "current",
    title: "Foundation",
    items: [
      "Core writing engine",
      "Layer management",
      "OCR integration",
      "PDF export",
      "Basic templates",
      "Gesture support",
    ],
  },
  {
    version: "v1.5",
    status: "next",
    title: "Enhanced",
    items: [
      "Cloud sync (optional)",
      "Collaborative editing",
      "Advanced shapes",
      "Audio notes",
      "Dark mode themes",
    ],
  },
  {
    version: "v2.0",
    status: "future",
    title: "Pro Features",
    items: [
      "AI handwriting analysis",
      "Smart search",
      "Plugin system",
      "Mobile apps",
      "API access",
    ],
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "current":
      return <Check className="w-5 h-5" />;
    case "next":
      return <Clock className="w-5 h-5" />;
    case "future":
      return <Sparkles className="w-5 h-5" />;
    default:
      return null;
  }
};

const getStatusStyles = (status: string) => {
  switch (status) {
    case "current":
      return "border-primary bg-primary/10 text-primary";
    case "next":
      return "border-border bg-secondary text-muted-foreground";
    case "future":
      return "border-border bg-card text-muted-foreground";
    default:
      return "";
  }
};

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Roadmap
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What's coming next
          </h2>
          <p className="text-lg text-muted-foreground">
            Our vision for the future of digital note-taking.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {roadmapItems.map((phase, index) => (
              <div
                key={phase.version}
                className={`relative p-6 rounded-2xl border-2 ${getStatusStyles(phase.status)}`}
              >
                {/* Connector line */}
                {index < roadmapItems.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}

                {/* Version badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    phase.status === "current" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}>
                    {getStatusIcon(phase.status)}
                  </div>
                  <span className="font-bold text-foreground">{phase.version}</span>
                  {phase.status === "current" && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary text-primary-foreground">
                      Current
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {phase.title}
                </h3>

                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        phase.status === "current" ? "bg-primary" : "bg-muted-foreground/50"
                      }`} />
                      <span className={phase.status === "current" ? "text-foreground" : "text-muted-foreground"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
