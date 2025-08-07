import { ArrowRight, Users, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Card } from "@/components/ui/enhanced-card";
import heroImage from "@/assets/hero-farmers.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, label: "Schemes Available", value: "500+" },
    { icon: Shield, label: "Verified Centers", value: "1000+" },
    { icon: MapPin, label: "States Covered", value: "28" }
  ];

  return (
    <section className="relative bg-gradient-earth min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-success/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                🌾 Empowering Rural India
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                सरकारी योजनाओं का{" "}
                <span className="text-transparent bg-gradient-hero bg-clip-text">
                  सहारा
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Access government schemes designed for farmers. Get loans, insurance, 
                and benefits with our simple, multilingual platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
                onClick={() => {
                  document.getElementById('schemes-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Explore Schemes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => {
                  document.getElementById('help-centers-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Find Help Centers
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <Card variant="glow" padding="none" className="overflow-hidden">
              <img
                src={heroImage}
                alt="Indian farmers working in agricultural fields"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm opacity-90">Empowering farmers across India</p>
                <p className="text-lg font-semibold">Together we grow 🌱</p>
              </div>
            </Card>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 p-4 bg-success rounded-lg shadow-elevated animate-bounce-gentle">
              <span className="text-white font-bold">✓ Verified</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 p-4 bg-trust-blue rounded-lg shadow-elevated animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
              <span className="text-white font-bold">🏛️ Government</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;