import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Download, Mail, ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-foreground text-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main CTA */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start taking notes for free
          </h2>
          <p className="text-xl text-background/70 mb-10 max-w-xl mx-auto">
            Join thousands of students and professionals who've switched to ABook.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="xl" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Download className="w-5 h-5" />
              Download ABook
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="w-full sm:w-auto border-background/20 text-background hover:bg-background/10"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View Source
              </a>
            </Button>
          </div>

          {/* Email signup */}
          <div className="max-w-md mx-auto">
            <p className="text-sm text-background/60 mb-4">
              Get notified about major updates and new features
            </p>
            {isSubmitted ? (
              <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-primary/20 text-primary-foreground">
                <CheckCircle className="w-5 h-5" />
                <span>Thanks! We'll keep you updated.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-background text-foreground border-0"
                  />
                </div>
                <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 h-12">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
