import { 
  PenTool, 
  Layers, 
  ScanText, 
  SpellCheck, 
  FileDown, 
  WifiOff, 
  TestTube2, 
  Hand, 
  LayoutTemplate 
} from "lucide-react";

const features = [
  {
    icon: PenTool,
    title: "Natural Writing",
    description: "Pressure-sensitive stylus support with smooth ink rendering for a paper-like feel.",
  },
  {
    icon: Layers,
    title: "Unlimited Layers",
    description: "Organize your notes with layers. Perfect for annotations and overlays.",
  },
  {
    icon: ScanText,
    title: "OCR Recognition",
    description: "Convert handwriting to searchable text powered by Tesseract engine.",
  },
  {
    icon: SpellCheck,
    title: "Spell Check",
    description: "Built-in spelling correction for converted text in multiple languages.",
  },
  {
    icon: FileDown,
    title: "PDF Export",
    description: "Export notebooks to PDF, PNG, or SVG. Share anywhere, print anything.",
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    description: "No internet required. Your data stays on your device, always accessible.",
  },
  {
    icon: TestTube2,
    title: "Full Test Coverage",
    description: "Rigorously tested codebase with comprehensive unit and integration tests.",
  },
  {
    icon: Hand,
    title: "Gesture Controls",
    description: "Intuitive gestures for navigation, zoom, and quick actions.",
  },
  {
    icon: LayoutTemplate,
    title: "Rich Templates",
    description: "Pre-built templates for notes, journals, planners, and more.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to take notes
          </h2>
          <p className="text-lg text-muted-foreground">
            A powerful digital notebook with all the features you'd expect from premium alternatives—without the price tag.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
