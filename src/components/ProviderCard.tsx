import React from "react";
import { Star, CheckCircle, Clock, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProviderCardProps {
  id?: string;
  name?: string;
  profileImage?: string;
  rating?: number;
  isVerified?: boolean;
  services?: string[];
  pricing?: string;
  availability?: string;
  location?: string;
  completedTasks?: number;
  responseTime?: string;
}

const ProviderCard = ({
  id = "1",
  name = "Kwame Mensah",
  profileImage = "https://api.dicebear.com/7.x/avataaars/svg?seed=kwame",
  rating = 4.8,
  isVerified = true,
  services = ["Plumbing", "Electrical", "Home Repairs"],
  pricing = "From GHS 50/hr",
  availability = "Available Now",
  location = "Accra, Ghana",
  completedTasks = 124,
  responseTime = "< 1 hour",
}: ProviderCardProps) => {
  return (
    <Card className="w-full max-w-[350px] overflow-hidden border-2 border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-16 w-16 border-2 border-orange-100">
            <AvatarImage src={profileImage} alt={name} />
            <AvatarFallback className="bg-orange-50 text-orange-500">
              {name
                ?.split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <h3 className="font-semibold text-lg">{name}</h3>
                {isVerified && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <CheckCircle className="h-4 w-4 text-blue-600 ml-1" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Verified Provider</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium ml-1">{rating}</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-1">{location}</p>

            <div className="mt-2 flex flex-wrap gap-1">
              {services.map((service, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-orange-50 text-orange-700 border-orange-200"
                >
                  {service}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">{responseTime} response</span>
            </div>
            <div className="font-medium text-blue-800">{pricing}</div>
          </div>

          <div className="mt-2 text-sm text-gray-500">
            <span className="font-medium text-gray-700">{completedTasks}</span>{" "}
            tasks completed
          </div>

          <div className="mt-2 px-2 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full inline-block">
            {availability}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 p-4 pt-0">
        <Button className="flex-1 bg-[#1E3A8A] hover:bg-blue-800">
          Hire Now
        </Button>
        <Button
          variant="outline"
          className="border-[#FF6B35] text-[#FF6B35] hover:bg-orange-50"
        >
          <MessageCircle className="h-4 w-4 mr-1" />
          Contact
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProviderCard;
