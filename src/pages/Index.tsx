import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import DemoSection from "@/components/DemoSection";
import TechStackSection from "@/components/TechStackSection";
import RoadmapSection from "@/components/RoadmapSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import YCPitchSection from "@/components/YCPitchSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <ComparisonSection />
        <DemoSection />
        <TechStackSection />
        <RoadmapSection />
        <OpenSourceSection />
        <YCPitchSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
