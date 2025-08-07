import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SchemesSection from "@/components/SchemesSection";
import HelpCentersSection from "@/components/HelpCentersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SchemesSection />
      <HelpCentersSection />
      <Footer />
    </div>
  );
};

export default Index;
