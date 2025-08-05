import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Home,
  Code,
  Music,
  Truck,
  Book,
  Briefcase,
  Paintbrush,
  Utensils,
  Heart,
} from "lucide-react";

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface ServiceCategoryGridProps {
  categories?: ServiceCategory[];
  onCategoryClick?: (categoryId: string) => void;
}

const ServiceCategoryGrid = ({
  categories = defaultCategories,
  onCategoryClick = () => {},
}: ServiceCategoryGridProps) => {
  return (
    <div className="w-full bg-white py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Popular Service Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find trusted professionals for any task you need in Ghana
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer border-t-4"
              style={{ borderTopColor: category.color }}
              onClick={() => onCategoryClick(category.id)}
            >
              <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                <div
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4"
                  style={{ backgroundColor: `${category.color}20` }} // 20 is hex for 12% opacity
                >
                  <div
                    className="text-2xl md:text-3xl"
                    style={{ color: category.color }}
                  >
                    {category.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {category.description}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-auto text-primary flex items-center gap-1 hover:bg-primary/5"
                >
                  Explore <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            View All Categories
          </Button>
        </div>
      </div>
    </div>
  );
};

const defaultCategories: ServiceCategory[] = [
  {
    id: "home-services",
    title: "Home Services",
    description: "Plumbing, electrical work, cleaning, and general repairs",
    icon: <Home />,
    color: "#FF6B35",
  },
  {
    id: "digital-services",
    title: "Digital Services",
    description: "Web development, graphic design, and digital marketing",
    icon: <Code />,
    color: "#1E3A8A",
  },
  {
    id: "events",
    title: "Events",
    description: "Event planning, catering, photography, and entertainment",
    icon: <Music />,
    color: "#F59E0B",
  },
  {
    id: "transport",
    title: "Transport",
    description: "Delivery, moving services, and transportation",
    icon: <Truck />,
    color: "#10B981",
  },
  {
    id: "education",
    title: "Education",
    description: "Tutoring, language lessons, and skill training",
    icon: <Book />,
    color: "#6366F1",
  },
  {
    id: "business",
    title: "Business",
    description: "Accounting, legal services, and business consulting",
    icon: <Briefcase />,
    color: "#8B5CF6",
  },
  {
    id: "creative",
    title: "Creative",
    description: "Art, music, writing, and creative projects",
    icon: <Paintbrush />,
    color: "#EC4899",
  },
  {
    id: "food",
    title: "Food & Catering",
    description: "Personal chefs, catering, and food delivery",
    icon: <Utensils />,
    color: "#F97316",
  },
  {
    id: "health",
    title: "Health & Wellness",
    description: "Fitness training, massage, and wellness services",
    icon: <Heart />,
    color: "#EF4444",
  },
];

export default ServiceCategoryGrid;
