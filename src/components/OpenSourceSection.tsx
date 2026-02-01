import { Github, Star, GitFork, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Star, label: "Stars", value: "2.4k" },
  { icon: GitFork, label: "Forks", value: "340" },
  { icon: Users, label: "Contributors", value: "45" },
];

const OpenSourceSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Open Source
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built by the community, for everyone
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ABook is MIT licensed and completely open source. Inspect the code, 
              contribute features, or fork it for your own needs.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* GitHub card */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-foreground flex items-center justify-center">
                  <Github className="w-8 h-8 text-background" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">abook/abook</h3>
                  <p className="text-muted-foreground">
                    The $0 digital notebook for everyone
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="heroOutline" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Star className="w-4 h-4" />
                    Star
                  </a>
                </Button>
                <Button variant="hero" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <GitFork className="w-4 h-4" />
                    Fork
                  </a>
                </Button>
              </div>
            </div>

            {/* License badge */}
            <div className="mt-6 pt-6 border-t border-border flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                MIT License
              </span>
              <span>•</span>
              <span>Free for commercial use</span>
              <span>•</span>
              <span>No attribution required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
