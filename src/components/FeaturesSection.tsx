import { 
  PenTool, 
  Layers, 
  ScanText, 
  SpellCheck, 
  FileDown, 
  WifiOff, 
  TestTube2, 
  Hand, 
  LayoutTemplate,
  Leaf,
  TreeDeciduous,
  Heart
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Save trees & reduce paper waste. One Abook replaces thousands of notebooks over its lifetime.",
    highlight: true,
  },
  {
    icon: TreeDeciduous,
    title: "Zero Deforestation",
    description: "Help protect forests. Every digital notebook prevents cutting down trees for paper production.",
    highlight: true,
  },
  {
    icon: Heart,
    title: "Stress-Free E-Ink",
    description: "No blue light, no eye strain. E-ink display feels like paper and is gentle on your eyes.",
    highlight: true,
  },
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

        {/* Eco-friendly highlight banner */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 border border-green-500/20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">🌍 Join the Paper-Free Revolution</h3>
                <p className="text-muted-foreground text-sm">
                  The average student uses <span className="font-semibold text-foreground">10,000+ sheets</span> of paper during their education. 
                  Abook helps save <span className="font-semibold text-green-600">17 trees</span> per student.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-6 rounded-2xl bg-card border card-hover ${
                feature.highlight 
                  ? 'border-green-500/30 bg-gradient-to-br from-green-500/5 to-transparent' 
                  : 'border-border'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                feature.highlight 
                  ? 'bg-green-500/15 group-hover:bg-green-500/25' 
                  : 'bg-primary/10 group-hover:bg-primary/20'
              }`}>
                <feature.icon className={`w-6 h-6 ${feature.highlight ? 'text-green-600' : 'text-primary'}`} />
              </div>
              {feature.highlight && (
                <span className="inline-block px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 text-xs font-medium mb-2">
                  Eco-Friendly
                </span>
              )}
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
