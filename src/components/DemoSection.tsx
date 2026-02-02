import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const screenshots = [
  {
    id: 1,
    title: "Clean Writing Interface",
    description: "Distraction-free canvas for your thoughts",
  },
  {
    id: 2,
    title: "Layer Management",
    description: "Organize complex notes with multiple layers",
  },
  {
    id: 3,
    title: "Template Library",
    description: "Start with pre-built templates or create your own",
  },
  {
    id: 4,
    title: "Export Options",
    description: "Share your work in any format",
  },
];

interface DemoSectionProps {
  onOpenDemo: () => void;
}

const DemoSection = ({ onOpenDemo }: DemoSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Demo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See ABook in action
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the smooth, intuitive interface designed for productive note-taking.
          </p>
        </div>

        {/* Demo carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main display area */}
            <div className="aspect-video bg-card rounded-2xl border border-border overflow-hidden relative group">
              {/* Placeholder for demo content */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors cursor-pointer">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {screenshots[activeIndex].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {screenshots[activeIndex].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "bg-border hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Try demo CTA */}
          <div className="text-center mt-8">
            <Button variant="hero" size="lg" onClick={onOpenDemo}>
              <Play className="w-4 h-4" />
              Launch Interactive Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
