import { useState } from "react";
import { MapPin, Clock, Phone, Navigation, Star, Filter, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const helpCenters = [
  {
    id: 1,
    name: "District Collectorate - Agricultural Office",
    address: "Main Road, District Center, Mumbai, Maharashtra",
    distance: "2.5 km",
    rating: 4.5,
    timing: "9:00 AM - 5:00 PM",
    phone: "+91 98765 43210",
    services: ["Crop Insurance", "PM-KISAN", "Loan Applications"],
    type: "Government Office",
    status: "Open"
  },
  {
    id: 2,
    name: "Common Service Center (CSC)",
    address: "Village Square, Pune Road, Maharashtra",
    distance: "1.2 km",
    rating: 4.2,
    timing: "8:00 AM - 8:00 PM",
    phone: "+91 87654 32109",
    services: ["Digital Applications", "Document Verification", "Form Filling"],
    type: "CSC Center",
    status: "Open"
  },
  {
    id: 3,
    name: "Jan Aushadhi Kendra & Scheme Center",
    address: "Market Area, Near Bank, Maharashtra",
    distance: "3.8 km",
    rating: 4.0,
    timing: "10:00 AM - 6:00 PM",
    phone: "+91 76543 21098",
    services: ["Health Schemes", "Medicine Support", "Senior Citizen Services"],
    type: "Multi-Service",
    status: "Closed"
  },
  {
    id: 4,
    name: "Krishi Vigyan Kendra",
    address: "Agricultural University Campus, Maharashtra",
    distance: "5.2 km",
    rating: 4.7,
    timing: "9:30 AM - 4:30 PM",
    phone: "+91 65432 10987",
    services: ["Technical Training", "Crop Advisory", "Soil Testing"],
    type: "Training Center",
    status: "Open"
  }
];

const HelpCenters = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [showDetails, setShowDetails] = useState(null);

  const centerTypes = ["Government Office", "CSC Center", "Multi-Service", "Training Center"];

  const filteredCenters = helpCenters.filter(center => {
    const matchesLocation = center.address.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesType = selectedType === "all" || center.type === selectedType;
    return matchesLocation && matchesType;
  });

  const CenterDetails = ({ center, onClose }) => (
    <Card variant="elevated" className="mt-4 p-4 bg-muted/50">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold">Contact & Directions</h4>
          <Button variant="ghost" size="sm" onClick={onClose}>✕</Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center text-sm">
              <Phone className="w-4 h-4 mr-2 text-primary" />
              <span>{center.phone}</span>
            </div>
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-2 text-primary" />
              <span>{center.timing}</span>
            </div>
            <div className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              <span className="text-muted-foreground">{center.address}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm font-medium">Available Services:</p>
            <div className="flex flex-wrap gap-1">
              {center.services.map((service, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="trust" size="sm" className="flex-1">
            <Navigation className="w-4 h-4 mr-2" />
            Get Directions
          </Button>
          <Button variant="success" size="sm" className="flex-1">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-gradient-earth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nearby Help Centers
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find government offices and service centers near you for offline assistance and application support
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by location..."
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedType === "all" ? "earth" : "outline"}
                size="sm"
                onClick={() => setSelectedType("all")}
              >
                All Centers
              </Button>
              {centerTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "earth" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Centers Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredCenters.map((center) => (
              <Card key={center.id} variant="interactive" className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      variant={center.status === "Open" ? "default" : "secondary"}
                      className={center.status === "Open" ? "bg-success" : ""}
                    >
                      {center.status}
                    </Badge>
                    <div className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      {center.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{center.name}</CardTitle>
                  <CardDescription>{center.type}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="truncate">{center.address}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Navigation className="w-4 h-4 mr-2" />
                      <span>{center.distance} away</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{center.timing}</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Services:</p>
                    <div className="flex flex-wrap gap-1">
                      {center.services.slice(0, 2).map((service, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                      {center.services.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{center.services.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="earth"
                      size="sm"
                      className="flex-1"
                      onClick={() => setShowDetails(
                        showDetails === center.id ? null : center.id
                      )}
                    >
                      View Details
                    </Button>
                    <Button variant="trust" size="sm" className="flex-1">
                      <Navigation className="w-4 h-4 mr-2" />
                      Directions
                    </Button>
                  </div>
                  
                  {showDetails === center.id && (
                    <CenterDetails
                      center={center}
                      onClose={() => setShowDetails(null)}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCenters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No help centers found in your area.</p>
              <Button variant="outline" onClick={() => { setSearchLocation(""); setSelectedType("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HelpCenters;