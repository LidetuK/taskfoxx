import React, { useState } from "react";
import Header from "@/components/Header";
import ProviderCard from "@/components/ProviderCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, MapPin } from "lucide-react";

const Providers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const providers = [
    {
      id: "1",
      name: "Kwame Mensah",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=kwame",
      rating: 4.8,
      isVerified: true,
      services: ["Plumbing", "Electrical", "Home Repairs"],
      pricing: "From GHS 50/hr",
      availability: "Available Now",
      location: "Accra, Ghana",
      completedTasks: 124,
      responseTime: "< 1 hour",
    },
    {
      id: "2",
      name: "Ama Boateng",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=ama",
      rating: 4.9,
      isVerified: true,
      services: ["Graphic Design", "Web Development", "Branding"],
      pricing: "From GHS 80/hr",
      availability: "Available Tomorrow",
      location: "Kumasi, Ghana",
      completedTasks: 89,
      responseTime: "< 2 hours",
    },
    {
      id: "3",
      name: "Kofi Addo",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=kofi",
      rating: 4.7,
      isVerified: true,
      services: ["Moving", "Delivery", "Transport"],
      pricing: "From GHS 30/hr",
      availability: "Available Now",
      location: "Takoradi, Ghana",
      completedTasks: 156,
      responseTime: "< 30 minutes",
    },
    {
      id: "4",
      name: "Akosua Frimpong",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=akosua",
      rating: 4.9,
      isVerified: true,
      services: ["Event Planning", "Catering", "Photography"],
      pricing: "From GHS 100/hr",
      availability: "Available This Week",
      location: "Accra, Ghana",
      completedTasks: 67,
      responseTime: "< 3 hours",
    },
    {
      id: "5",
      name: "Yaw Asante",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=yaw",
      rating: 4.6,
      isVerified: false,
      services: ["Tutoring", "Language Lessons", "Academic Support"],
      pricing: "From GHS 40/hr",
      availability: "Available Weekends",
      location: "Cape Coast, Ghana",
      completedTasks: 43,
      responseTime: "< 4 hours",
    },
    {
      id: "6",
      name: "Efua Darko",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=efua",
      rating: 4.8,
      isVerified: true,
      services: ["Cleaning", "Laundry", "Home Organization"],
      pricing: "From GHS 25/hr",
      availability: "Available Now",
      location: "Tema, Ghana",
      completedTasks: 201,
      responseTime: "< 1 hour",
    },
  ];

  const categories = [
    "All Categories",
    "Home Services",
    "Digital Services",
    "Events",
    "Transport",
    "Education",
    "Health",
  ];

  const locations = [
    "All Locations",
    "Accra",
    "Kumasi",
    "Takoradi",
    "Cape Coast",
    "Tema",
    "Tamale",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
            Find Service Providers
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Browse through our verified professionals and find the perfect match
            for your needs
          </p>

          {/* Search and Filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search providers or services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={selectedLocation}
                onValueChange={setSelectedLocation}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location.toLowerCase()}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="bg-[#FF6B35] hover:bg-[#e55a29]">
                <Filter className="h-4 w-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {providers.length} providers in Ghana
          </p>
        </div>

        {/* Provider Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} {...provider} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
          >
            Load More Providers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Providers;
