import { Button } from "@/components/ui/button";
import { Github, Play, ArrowRight } from "lucide-react";
import tabletHero from "@/assets/tablet-hero.png";

interface HeroSectionProps {
  onOpenDemo: () => void;
}

const HeroSection = ({ onOpenDemo }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero pt-20">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(217_91%_60%_/_0.12),transparent)]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Open Source & Affordable
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              Digital Notebook
              <span className="block text-gradient-blue">Reimagined</span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-4">
              The <span className="font-semibold text-foreground">$250 alternative</span> to $400 e-ink tablets. 
              Write, draw, and organize with a powerful digital canvas.
            </p>

            {/* Stats */}
            <div className="animate-fade-up-delay-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">1.4B</span> students worldwide
              </div>
              <div className="w-1 h-1 rounded-full bg-border hidden md:block" />
              <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground">MIT</span> licensed
              </div>
              <div className="w-1 h-1 rounded-full bg-border hidden md:block" />
              <div className="flex items-center gap-1.5 text-green-600">
                <span>🌱</span>
                <span className="font-semibold">Eco-Friendly</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group" onClick={onOpenDemo}>
                <Play className="w-5 h-5" />
                Try Demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
                <a href="https://github.com/charu6969/Abook.git" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Right content - Tablet mockup */}
          <div className="relative animate-fade-up-delay-2">
            <div className="relative">
              {/* Glow effect behind tablet */}
              <div className="absolute inset-0 blur-3xl opacity-20 bg-primary rounded-full scale-75" />
              
              {/* Tablet image */}
              <img
                src={tabletHero}
                alt="Abook digital notebook showing handwritten notes and diagrams"
                className="relative z-10 w-full max-w-lg mx-auto animate-float drop-shadow-2xl"
              />
              
              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 glass-card px-4 py-2 animate-fade-up hidden lg:block">
                <span className="text-sm font-medium">✨ OCR Support</span>
              </div>
              <div className="absolute -right-4 bottom-1/4 glass-card px-4 py-2 animate-fade-up-delay-1 hidden lg:block">
                <span className="text-sm font-medium">📱 Works Offline</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
