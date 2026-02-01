const techStack = [
  {
    name: "Python",
    description: "Core application logic",
    icon: (
      <svg viewBox="0 0 128 128" className="w-12 h-12">
        <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
          <stop offset="0" stopColor="#5A9FD4"/>
          <stop offset="1" stopColor="#306998"/>
        </linearGradient>
        <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
          <stop offset="0" stopColor="#FFD43B"/>
          <stop offset="1" stopColor="#FFE873"/>
        </linearGradient>
        <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
        <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
      </svg>
    ),
  },
  {
    name: "Pygame",
    description: "Graphics rendering & UI",
    icon: (
      <div className="w-12 h-12 rounded-lg bg-[#00B900] flex items-center justify-center">
        <span className="text-2xl font-bold text-white">Pg</span>
      </div>
    ),
  },
  {
    name: "Tesseract",
    description: "OCR text recognition",
    icon: (
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4285F4] to-[#1A73E8] flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V8h14v12z"/>
        </svg>
      </div>
    ),
  },
  {
    name: "NumPy",
    description: "Mathematical operations",
    icon: (
      <div className="w-12 h-12 rounded-lg bg-[#4DABCF] flex items-center justify-center">
        <span className="text-lg font-bold text-white">np</span>
      </div>
    ),
  },
  {
    name: "Pillow",
    description: "Image processing",
    icon: (
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center">
        <span className="text-2xl">🖼️</span>
      </div>
    ),
  },
  {
    name: "SQLite",
    description: "Local data storage",
    icon: (
      <div className="w-12 h-12 rounded-lg bg-[#003B57] flex items-center justify-center">
        <span className="text-sm font-bold text-white">SQL</span>
      </div>
    ),
  },
];

const TechStackSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built with proven technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            A robust foundation using battle-tested open source tools.
          </p>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group p-6 rounded-2xl bg-card border border-border card-hover text-center"
            >
              <div className="flex justify-center mb-4 grayscale group-hover:grayscale-0 transition-all">
                {tech.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {tech.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
