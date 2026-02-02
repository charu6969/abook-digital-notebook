import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const founders = [
  {
    name: "Charith R",
    role: "Co-Founder & Software Lead",
    tagline: "ML & Backend Developer · Hackathon Winner",
    location: "Mysuru, Karnataka, India",
    description:
      "Computer Science student passionate about building intelligent systems. Expertise spans machine learning, backend development, and cloud architecture. Winner of 4+ hackathons with production-ready deployments on AWS.",
    skills: ["Python", "PyTorch", "Node.js", "AWS", "PostgreSQL"],
    stats: [
      { label: "Hackathon Wins", value: "4+" },
      { label: "Projects Built", value: "10+" },
    ],
    image: "https://charith-r-portfolio.vercel.app/assets/charith-r-photo.jpg",
    portfolio: "https://charith-r-portfolio.vercel.app/",
    github: "https://github.com/charu6969",
    linkedin: "https://www.linkedin.com/in/charith-r-07060129a",
    email: "charithcharu35794@gmail.com",
  },
  {
    name: "Dhananjay S",
    role: "Co-Founder & Hardware Lead",
    tagline: "Robotics & Embedded Systems Engineer",
    location: "Mysuru, Karnataka, India",
    description:
      "Technical founder focused on building real hardware businesses. Blends deep embedded engineering, control systems, and practical product execution. DST NIDHI PRAYAS funded with expertise in manufacturable systems.",
    skills: ["Embedded C", "PCB Design", "Robotics", "3D CAD", "Control Systems"],
    stats: [
      { label: "DST Funded", value: "Yes" },
      { label: "State Hackathon", value: "2nd" },
    ],
    image: "https://mypersonalwesite-4o8z.vercel.app/dhananjay.jpg",
    portfolio: "https://mypersonalwesite-4o8z.vercel.app/",
    github: "#",
    linkedin: "https://www.linkedin.com/in/dhananjay-s-99064030a",
    email: "dharnuju5@gmail.com",
  },
];

const FoundersSection = () => {
  return (
    <section id="founders" className="py-24 bg-secondary/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Meet the Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Founders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A perfect blend of software intelligence and hardware expertise,
            building the future of affordable digital notebooks.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/30"
            >
              {/* Profile Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 rounded-xl bg-secondary overflow-hidden flex-shrink-0">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(founder.name)}&size=80&background=3B82F6&color=fff`;
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-foreground">
                    {founder.name}
                  </h3>
                  <p className="text-primary font-medium text-sm">
                    {founder.role}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {founder.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {founder.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-5">
                {founder.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex gap-6 mb-6 py-4 border-t border-b border-border">
                {founder.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={founder.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Portfolio
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={founder.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={`mailto:${founder.email}`} aria-label="Email">
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
