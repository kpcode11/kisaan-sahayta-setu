import { ArrowRight, Users, Shield, MapPin, Search, BookOpen, FileText, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import heroImage from "@/assets/hero-farmers.jpg";

const Dashboard = () => {
  const stats = [
    { icon: Users, label: "Schemes Available", value: "500+" },
    { icon: Shield, label: "Verified Centers", value: "1000+" },
    { icon: MapPin, label: "States Covered", value: "28" }
  ];

  const quickActions = [
    {
      title: "Browse Schemes",
      description: "Explore government schemes for farmers",
      icon: BookOpen,
      link: "/schemes",
      color: "earth"
    },
    {
      title: "Find Help Centers",
      description: "Locate nearby assistance centers",
      icon: MapPin,
      link: "/help-centers",
      color: "trust"
    },
    {
      title: "Check Eligibility",
      description: "Quick eligibility assessment",
      icon: FileText,
      link: "/schemes",
      color: "success"
    },
    {
      title: "Contact Support",
      description: "Get help and guidance",
      icon: Phone,
      link: "#",
      color: "warning"
    }
  ];

  const recentSchemes = [
    {
      name: "PM-KISAN Samman Nidhi",
      amount: "₹6000/year",
      status: "Active",
      type: "Central Scheme"
    },
    {
      name: "Crop Insurance Scheme", 
      amount: "Up to ₹2 lakh",
      status: "Available",
      type: "Insurance"
    },
    {
      name: "PM Awas Yojana",
      amount: "₹1.2 lakh",
      status: "Active", 
      type: "Housing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-earth min-h-[70vh] flex items-center overflow-hidden">
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
                <Link to="/schemes">
                  <Button variant="hero" size="xl" className="group">
                    Explore Schemes
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/help-centers">
                  <Button variant="outline" size="xl">
                    Find Help Centers
                  </Button>
                </Link>
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
              <Card variant="elevated" padding="none" className="overflow-hidden">
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

      {/* Quick Actions */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose what you'd like to do today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link}>
                <Card variant="interactive" className="h-full text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 rounded-lg bg-${action.color === 'earth' ? 'earth-primary' : action.color === 'trust' ? 'trust-blue' : action.color}/10`}>
                        <action.icon className={`w-8 h-8 text-${action.color === 'earth' ? 'earth-primary' : action.color === 'trust' ? 'trust-blue' : action.color}`} />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{action.title}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Schemes */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Popular Schemes
            </h2>
            <Link to="/schemes">
              <Button variant="outline">
                View All Schemes
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {recentSchemes.map((scheme, index) => (
              <Card key={index} variant="earth" className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {scheme.type}
                    </span>
                    <span className="text-lg font-bold text-primary">{scheme.amount}</span>
                  </div>
                  <CardTitle className="text-lg">{scheme.name}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Status: {scheme.status}</span>
                    <Link to="/schemes">
                      <Button variant="earth" size="sm">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;