import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import ServiceCategoryGrid from "@/components/ServiceCategoryGrid";
import ProviderCard from "@/components/ProviderCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home,
  Code,
  Music,
  Truck,
  Book,
  Briefcase,
  Paintbrush,
  Utensils,
  Heart,
  Star,
  Clock,
  MapPin,
} from "lucide-react";

const Services = () => {
  const { category } = useParams();

  const categoryData: Record<string, any> = {
    home: {
      title: "Home Services",
      description: "Professional home maintenance and repair services",
      icon: Home,
      color: "#FF6B35",
      services: [
        "Plumbing",
        "Electrical Work",
        "Cleaning",
        "Painting",
        "Carpentry",
        "HVAC",
        "Landscaping",
        "Pest Control",
      ],
    },
    digital: {
      title: "Digital Services",
      description: "Technology and digital solutions for your business",
      icon: Code,
      color: "#1E3A8A",
      services: [
        "Web Development",
        "Mobile Apps",
        "Graphic Design",
        "Digital Marketing",
        "SEO",
        "Content Writing",
        "Social Media",
        "E-commerce",
      ],
    },
    events: {
      title: "Events",
      description: "Make your special occasions memorable",
      icon: Music,
      color: "#F59E0B",
      services: [
        "Event Planning",
        "Catering",
        "Photography",
        "Videography",
        "DJ Services",
        "Decoration",
        "Sound System",
        "Entertainment",
      ],
    },
    transport: {
      title: "Transport",
      description: "Reliable transportation and delivery services",
      icon: Truck,
      color: "#10B981",
      services: [
        "Moving Services",
        "Delivery",
        "Taxi Services",
        "Courier",
        "Logistics",
        "Car Rental",
        "Airport Transfer",
        "Freight",
      ],
    },
    education: {
      title: "Education",
      description: "Learn new skills and improve your knowledge",
      icon: Book,
      color: "#6366F1",
      services: [
        "Tutoring",
        "Language Lessons",
        "Music Lessons",
        "Skill Training",
        "Academic Support",
        "Test Prep",
        "Online Courses",
        "Workshops",
      ],
    },
    business: {
      title: "Business",
      description: "Professional business services and consulting",
      icon: Briefcase,
      color: "#8B5CF6",
      services: [
        "Accounting",
        "Legal Services",
        "Business Consulting",
        "Tax Preparation",
        "HR Services",
        "Marketing",
        "Financial Planning",
        "Business Registration",
      ],
    },
    creative: {
      title: "Creative",
      description: "Artistic and creative services for all projects",
      icon: Paintbrush,
      color: "#EC4899",
      services: [
        "Art & Illustration",
        "Music Production",
        "Writing & Editing",
        "Video Editing",
        "Animation",
        "Voice Over",
        "Logo Design",
        "Branding",
      ],
    },
    food: {
      title: "Food & Catering",
      description: "Delicious food services for any occasion",
      icon: Utensils,
      color: "#F97316",
      services: [
        "Personal Chef",
        "Catering",
        "Meal Prep",
        "Baking",
        "Food Delivery",
        "Bartending",
        "Restaurant Consulting",
        "Nutrition Consulting",
      ],
    },
    health: {
      title: "Health & Wellness",
      description: "Health and wellness services for a better lifestyle",
      icon: Heart,
      color: "#EF4444",
      services: [
        "Personal Training",
        "Massage Therapy",
        "Yoga Instruction",
        "Nutrition Coaching",
        "Mental Health",
        "Physical Therapy",
        "Wellness Coaching",
        "Home Care",
      ],
    },
  };

  const currentCategory = category ? categoryData[category] : null;
  const Icon = currentCategory?.icon || Home;

  const featuredProviders = [
    {
      id: "1",
      name: "Kwame Mensah",
      profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=kwame",
      rating: 4.8,
      isVerified: true,
      services: currentCategory
        ? [currentCategory.services[0], currentCategory.services[1]]
        : ["Service 1", "Service 2"],
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
      services: currentCategory
        ? [currentCategory.services[2], currentCategory.services[3]]
        : ["Service 3", "Service 4"],
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
      services: currentCategory
        ? [currentCategory.services[4], currentCategory.services[5]]
        : ["Service 5", "Service 6"],
      pricing: "From GHS 60/hr",
      availability: "Available Now",
      location: "Takoradi, Ghana",
      completedTasks: 156,
      responseTime: "< 30 minutes",
    },
  ];

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
              All Services
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Browse through all our service categories
            </p>
          </div>
          <ServiceCategoryGrid />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1E3A8A] to-[#2E4A9A] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
              style={{ backgroundColor: `${currentCategory.color}20` }}
            >
              <Icon
                className="h-8 w-8"
                style={{ color: currentCategory.color }}
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {currentCategory.title}
              </h1>
              <p className="text-xl">{currentCategory.description}</p>
            </div>
          </div>
          <div className="text-center">
            <Button className="bg-[#FF6B35] hover:bg-[#e55a29] text-white mr-4">
              Post a Task
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Browse Providers
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Service Types */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-6">
            Popular {currentCategory.title} Types
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentCategory.services.map((service: string, index: number) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-4 text-center">
                  <h3 className="font-medium text-gray-900">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Providers */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A]">
              Top {currentCategory.title} Providers
            </h2>
            <Button
              variant="outline"
              className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
            >
              View All
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProviders.map((provider) => (
              <ProviderCard key={provider.id} {...provider} />
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-center text-[#1E3A8A] mb-8">
              Why Choose TaskFOXX for {currentCategory.title}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">
                  500+
                </div>
                <div className="text-gray-600">Verified Providers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">
                  4.8★
                </div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF6B35] mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Customer Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1E3A8A] mb-8">
            How to Get {currentCategory.title} Done
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FF6B35] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  1
                </div>
                <CardTitle>Describe Your Task</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tell us what {currentCategory.title.toLowerCase()} you need,
                  when you need it, and your budget.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FF6B35] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  2
                </div>
                <CardTitle>Choose Your Provider</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Review offers from qualified{" "}
                  {currentCategory.title.toLowerCase()} professionals and select
                  the best one.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FF6B35] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  3
                </div>
                <CardTitle>Get It Done</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your provider completes the task and you pay securely through
                  our platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
