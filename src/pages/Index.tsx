import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import DemoSection from "@/components/DemoSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background transition-colors duration-[1100ms] ease-out">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <ServicesSection />
      <ResultsSection />
      <DemoSection />
      <AboutSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
