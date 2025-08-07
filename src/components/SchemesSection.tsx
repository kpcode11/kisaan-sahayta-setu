import { useState } from "react";
import { Search, Filter, CreditCard, Shield, GraduationCap, Heart, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const schemeCategories = [
  {
    id: "agriculture",
    name: "Agriculture & Loans",
    icon: "🌾",
    color: "text-success",
    schemes: [
      {
        id: 1,
        name: "PM-KISAN Samman Nidhi",
        description: "Direct income support of ₹6000 per year to farmer families",
        eligibility: "Small & marginal farmers",
        amount: "₹6000/year",
        type: "Central Scheme"
      },
      {
        id: 2,
        name: "Crop Insurance Scheme",
        description: "Protection against crop loss due to natural calamities",
        eligibility: "All farmers",
        amount: "Up to ₹2 lakh",
        type: "Insurance"
      }
    ]
  },
  {
    id: "social",
    name: "Social Welfare",
    icon: "🏠",
    color: "text-trust-blue",
    schemes: [
      {
        id: 3,
        name: "PM Awas Yojana",
        description: "Housing assistance for rural families",
        eligibility: "Below poverty line",
        amount: "₹1.2 lakh",
        type: "Central Scheme"
      }
    ]
  },
  {
    id: "women",
    name: "Women Empowerment",
    icon: "👩",
    color: "text-pink-500",
    schemes: [
      {
        id: 4,
        name: "Mahila Samman Savings",
        description: "Special savings scheme for women",
        eligibility: "Women aged 18+",
        amount: "Up to ₹2 lakh",
        type: "Savings"
      }
    ]
  },
  {
    id: "education",
    name: "Education & Skill",
    icon: "📚",
    color: "text-orange-500",
    schemes: [
      {
        id: 5,
        name: "Skill Development Program",
        description: "Free skill training for rural youth",
        eligibility: "Age 18-35",
        amount: "Free training",
        type: "Skill Development"
      }
    ]
  }
];

const SchemesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showEligibilityChecker, setShowEligibilityChecker] = useState(null);

  const allSchemes = schemeCategories.flatMap(category => 
    category.schemes.map(scheme => ({ ...scheme, category: category.name, categoryId: category.id }))
  );

  const filteredSchemes = allSchemes.filter(scheme => {
    const matchesCategory = activeCategory === "all" || scheme.categoryId === activeCategory;
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const EligibilityChecker = ({ scheme, onClose }) => (
    <Card variant="elevated" className="mt-4 p-4 bg-muted/50">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">Eligibility Check: {scheme.name}</h4>
          <Button variant="ghost" size="sm" onClick={onClose}>✕</Button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
            <span>Do you own agricultural land?</span>
            <div className="space-x-2">
              <Button variant="success" size="sm">Yes</Button>
              <Button variant="outline" size="sm">No</Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
            <span>Is your annual income below ₹2 lakh?</span>
            <div className="space-x-2">
              <Button variant="success" size="sm">Yes</Button>
              <Button variant="outline" size="sm">No</Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-background rounded-lg">
            <span>Do you have required documents?</span>
            <div className="space-x-2">
              <Button variant="success" size="sm">Yes</Button>
              <Button variant="outline" size="sm">No</Button>
            </div>
          </div>
        </div>
        
        <Button variant="hero" className="w-full">
          Check Full Eligibility
        </Button>
      </div>
    </Card>
  );

  return (
    <section id="schemes-section" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Government Schemes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and apply for various government schemes designed to support farmers and rural communities
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search schemes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant={activeCategory === "all" ? "earth" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("all")}
            >
              All Schemes
            </Button>
            {schemeCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "earth" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="flex items-center gap-2"
              >
                <span>{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchemes.map((scheme) => (
            <Card key={scheme.id} variant="interactive" className="h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{scheme.type}</Badge>
                  <span className="text-lg font-bold text-primary">{scheme.amount}</span>
                </div>
                <CardTitle className="text-lg">{scheme.name}</CardTitle>
                <CardDescription>{scheme.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 mr-2" />
                  Eligibility: {scheme.eligibility}
                </div>
                
                <div className="space-y-2">
                  <Button
                    variant="earth"
                    size="sm"
                    className="w-full"
                    onClick={() => setShowEligibilityChecker(
                      showEligibilityChecker === scheme.id ? null : scheme.id
                    )}
                  >
                    Check Eligibility
                  </Button>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                
                {showEligibilityChecker === scheme.id && (
                  <EligibilityChecker
                    scheme={scheme}
                    onClose={() => setShowEligibilityChecker(null)}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No schemes found matching your criteria.</p>
            <Button variant="outline" onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SchemesSection;