import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and copyright */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="text-muted-foreground text-sm">
              © {currentYear} Abook. MIT License.
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#comparison" className="hover:text-foreground transition-colors">
              Compare
            </a>
            <a href="#roadmap" className="hover:text-foreground transition-colors">
              Roadmap
            </a>
            <a href="https://github.com/charu6969/Abook.git" className="hover:text-foreground transition-colors">
              Docs
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/charu6969/Abook.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <Twitter className="w-5 h-5 text-foreground" />
            </a>
            <a 
              href="mailto:charithcharu35794@gmail.com"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <Mail className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
