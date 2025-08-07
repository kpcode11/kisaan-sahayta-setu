import { Heart, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";

const Footer = () => {
  const helplineNumbers = [
    { name: "Agriculture Helpline", number: "1800-180-1551" },
    { name: "PM-KISAN Support", number: "155261" },
    { name: "Crop Insurance", number: "1800-200-5350" }
  ];

  const quickLinks = [
    { name: "Government Portal", url: "#" },
    { name: "Scheme Guidelines", url: "#" },
    { name: "Document Checklist", url: "#" },
    { name: "FAQ", url: "#" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🌾</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Farmer Sahayak</h3>
                <p className="text-sm opacity-80">Government Scheme Assistant</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Empowering rural India by bridging the gap between farmers and government welfare schemes.
            </p>
          </div>

          {/* Helpline Numbers */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Helpline Numbers</h4>
            <div className="space-y-3">
              {helplineNumbers.map((helpline, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-sm font-medium">{helpline.name}</p>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 opacity-80" />
                    <span className="text-sm opacity-80">{helpline.number}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 opacity-80" />
                <span className="text-sm opacity-80">support@farmersahayak.gov.in</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 opacity-80" />
                <span className="text-sm opacity-80">Ministry of Agriculture, New Delhi</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button variant="outline" size="sm" className="bg-transparent border-background/20 text-background hover:bg-background/10">
                Feedback & Support
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-sm opacity-80">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400" />
              <span>for Indian Farmers</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm opacity-80">
              <span>© 2024 Government of India</span>
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;