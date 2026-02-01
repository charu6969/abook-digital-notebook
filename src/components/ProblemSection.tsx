import { DollarSign, Zap } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Problem with Digital Notebooks
            </h2>
            <p className="text-lg text-muted-foreground">
              Why pay premium prices for basic functionality?
            </p>
          </div>

          {/* Comparison cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Expensive option */}
            <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden group">
              <div className="absolute top-0 right-0 px-4 py-2 bg-destructive/10 text-destructive text-sm font-medium rounded-bl-xl">
                Expensive
              </div>
              <div className="mb-6">
                <DollarSign className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Premium Tablets
              </h3>
              <div className="text-5xl font-bold text-foreground mb-4">
                $400<span className="text-lg font-normal text-muted-foreground">+</span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                  Proprietary hardware required
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                  Subscription fees for cloud sync
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                  Limited export options
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                  Vendor lock-in
                </li>
              </ul>
            </div>

            {/* ABook option */}
            <div className="relative p-8 rounded-2xl bg-card border-2 border-primary overflow-hidden group glow">
              <div className="absolute top-0 right-0 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-bl-xl">
                Free Forever
              </div>
              <div className="mb-6">
                <Zap className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                ABook
              </h3>
              <div className="text-5xl font-bold text-primary mb-4">
                $0
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Works on any device
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  No subscriptions, ever
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Export to PDF, PNG, SVG
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Open source & MIT licensed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
