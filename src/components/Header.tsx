import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
  User,
  CreditCard,
  FileText,
  Search,
  Bell,
} from "lucide-react";

const Header = () => {
  const location = useLocation();

  const serviceCategories = [
    {
      title: "Home Services",
      href: "/services/home",
      description: "Plumbing, electrical work, cleaning, and general repairs",
      icon: Home,
    },
    {
      title: "Digital Services",
      href: "/services/digital",
      description: "Web development, graphic design, and digital marketing",
      icon: Code,
    },
    {
      title: "Events",
      href: "/services/events",
      description: "Event planning, catering, photography, and entertainment",
      icon: Music,
    },
    {
      title: "Transport",
      href: "/services/transport",
      description: "Delivery, moving services, and transportation",
      icon: Truck,
    },
    {
      title: "Education",
      href: "/services/education",
      description: "Tutoring, language lessons, and skill training",
      icon: Book,
    },
    {
      title: "Business",
      href: "/services/business",
      description: "Accounting, legal services, and business consulting",
      icon: Briefcase,
    },
    {
      title: "Creative",
      href: "/services/creative",
      description: "Art, music, writing, and creative projects",
      icon: Paintbrush,
    },
    {
      title: "Food & Catering",
      href: "/services/food",
      description: "Personal chefs, catering, and food delivery",
      icon: Utensils,
    },
    {
      title: "Health & Wellness",
      href: "/services/health",
      description: "Fitness training, massage, and wellness services",
      icon: Heart,
    },
  ];

  const forProviders = [
    {
      title: "Provider Dashboard",
      href: "/provider/dashboard",
      description: "Manage your profile and view earnings",
      icon: User,
    },
    {
      title: "Find Tasks",
      href: "/provider/tasks",
      description: "Browse and bid on available tasks",
      icon: Search,
    },
    {
      title: "My Bids",
      href: "/provider/bids",
      description: "Track your submitted proposals",
      icon: FileText,
    },
    {
      title: "Earnings",
      href: "/provider/earnings",
      description: "View your payment history and earnings",
      icon: CreditCard,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://res.cloudinary.com/dmidrozoq/image/upload/v1754418224/Screenshot_2025-08-04_215552_ucltmc-removebg-preview_zbmwxj.png" 
              alt="TaskFOXX Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[800px] grid-cols-3 gap-3 p-6">
                    {serviceCategories.map((service) => {
                      const Icon = service.icon;
                      return (
                        <NavigationMenuLink key={service.href} asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              <Icon className="h-4 w-4 text-[#FF6B35]" />
                              <div className="text-sm font-medium leading-none">
                                {service.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      );
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/post-task" className={navigationMenuTriggerStyle()}>
                  Post a Task
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>For Providers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] grid-cols-1 gap-3 p-6">
                    {forProviders.map((item) => {
                      const Icon = item.icon;
                      return (
                        <NavigationMenuLink key={item.href} asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center space-x-2">
                              <Icon className="h-4 w-4 text-[#1E3A8A]" />
                              <div className="text-sm font-medium leading-none">
                                {item.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      );
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/providers" className={navigationMenuTriggerStyle()}>
                  Find Providers
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="hidden md:flex">
              Sign In
            </Button>
            <Button className="bg-[#FF6B35] hover:bg-[#e55a29]">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
