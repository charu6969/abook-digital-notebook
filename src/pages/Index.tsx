import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import DemoSection from "@/components/DemoSection";
import TechStackSection from "@/components/TechStackSection";
import RoadmapSection from "@/components/RoadmapSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import FoundersSection from "@/components/FoundersSection";
import YCPitchSection from "@/components/YCPitchSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import InteractiveDemo from "@/components/InteractiveDemo";

const Index = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection onOpenDemo={openDemo} />
        <ProblemSection />
        <FeaturesSection />
        <ComparisonSection />
        <DemoSection onOpenDemo={openDemo} />
        <TechStackSection />
        <RoadmapSection />
        <OpenSourceSection />
        <FoundersSection />
        <YCPitchSection />
        <CTASection />
      </main>
      <Footer />
      <InteractiveDemo isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
};

export default Index;
