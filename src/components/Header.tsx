import { useState } from "react";
import { Globe, Volume2, Menu, X, Home, BookOpen, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/enhanced-button";
import { Card } from "@/components/ui/enhanced-card";

const languages = [
  { code: "en", name: "English", native: "English" },
  { code: "hi", name: "Hindi", native: "हिंदी" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "ta", name: "Tamil", native: "தமிழ்" },
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  { code: "kn", name: "Kannada", native: "ಕನ್ನಡ" }
];

const Header = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [showLanguages, setShowLanguages] = useState(false);
  const [isTTSEnabled, setIsTTSEnabled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const navigationItems = [
    { path: "/", label: "Dashboard", icon: Home },
    { path: "/schemes", label: "Schemes", icon: BookOpen },
    { path: "/help-centers", label: "Help Centers", icon: MapPin }
  ];

  const toggleTTS = () => {
    setIsTTSEnabled(!isTTSEnabled);
    // Here you would integrate with your TTS service
    if (!isTTSEnabled) {
      // Start TTS
      console.log("TTS enabled");
    } else {
      // Stop TTS
      console.log("TTS disabled");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🌾</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Farmer Sahayak</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Government Scheme Assistant</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Right Side Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowLanguages(!showLanguages)}
                className="flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{currentLang?.native}</span>
              </Button>
              
              {showLanguages && (
                <Card 
                  variant="elevated" 
                  padding="none"
                  className="absolute right-0 top-full mt-2 w-64 z-50 max-h-80 overflow-y-auto"
                >
                  <div className="p-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLanguage(lang.code);
                          setShowLanguages(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                          currentLanguage === lang.code
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{lang.native}</span>
                          <span className="text-sm text-muted-foreground">{lang.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </Card>
              )}
            </div>

            {/* TTS Toggle */}
            <Button
              variant={isTTSEnabled ? "success" : "outline"}
              size="sm"
              onClick={toggleTTS}
              className="flex items-center gap-2"
            >
              <Volume2 className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isTTSEnabled ? "Audio On" : "Audio Off"}
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-4">
              {/* Mobile Navigation */}
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Language Selector */}
              <div>
                <p className="text-sm font-medium mb-2">Language</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLanguage(lang.code);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`p-2 rounded-md text-sm transition-colors ${
                        currentLanguage === lang.code
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      {lang.native}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile TTS Toggle */}
              <Button
                variant={isTTSEnabled ? "success" : "outline"}
                onClick={toggleTTS}
                className="w-full justify-center"
              >
                <Volume2 className="w-4 h-4 mr-2" />
                {isTTSEnabled ? "Audio Enabled" : "Enable Audio"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;