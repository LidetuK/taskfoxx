import React, { useState } from "react";
import Header from "@/components/Header";
import PaymentModal from "@/components/PaymentModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DollarSign,
  Star,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Calendar,
  MessageCircle,
  Eye,
} from "lucide-react";

const ProviderDashboard = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const stats = [
    {
      title: "Total Earnings",
      value: "GHS 12,450",
      change: "+12%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Completed Tasks",
      value: "124",
      change: "+8",
      icon: CheckCircle,
      color: "text-blue-600",
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.2",
      icon: Star,
      color: "text-yellow-600",
    },
    {
      title: "Response Time",
      value: "< 1hr",
      change: "-15min",
      icon: Clock,
      color: "text-purple-600",
    },
  ];

  const recentTasks = [
    {
      id: "1",
      title: "Fix Kitchen Sink Leak",
      client: "Kwame Asante",
      amount: "GHS 150",
      status: "completed",
      date: "2024-01-15",
      rating: 5,
    },
    {
      id: "2",
      title: "Install Ceiling Fan",
      client: "Ama Boateng",
      amount: "GHS 200",
      status: "in-progress",
      date: "2024-01-14",
      rating: null,
    },
    {
      id: "3",
      title: "Electrical Wiring Repair",
      client: "Kofi Mensah",
      amount: "GHS 300",
      status: "pending",
      date: "2024-01-13",
      rating: null,
    },
  ];

  const availableTasks = [
    {
      id: "1",
      title: "Bathroom Tile Installation",
      description:
        "Need professional to install ceramic tiles in master bathroom",
      budget: "GHS 800-1200",
      location: "East Legon, Accra",
      deadline: "2024-01-20",
      bids: 3,
    },
    {
      id: "2",
      title: "Home Security System Setup",
      description: "Install and configure CCTV cameras and alarm system",
      budget: "GHS 1500-2000",
      location: "Airport Residential, Accra",
      deadline: "2024-01-25",
      bids: 1,
    },
    {
      id: "3",
      title: "Garden Landscaping",
      description: "Design and implement small garden landscape with plants",
      budget: "GHS 500-800",
      location: "Tema, Ghana",
      deadline: "2024-01-30",
      bids: 5,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-blue-100 text-blue-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-2">
            Provider Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Welcome back, Kwame! Here's your performance overview.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {stat.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p
                        className={`text-sm ${stat.color} flex items-center mt-1`}
                      >
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`p-3 rounded-full bg-gray-100`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tasks">My Tasks</TabsTrigger>
            <TabsTrigger value="available">Available Tasks</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentTasks.slice(0, 3).map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium">{task.title}</h4>
                          <p className="text-sm text-gray-600">{task.client}</p>
                          <Badge className={getStatusColor(task.status)}>
                            {task.status.replace("-", " ")}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{task.amount}</p>
                          {task.rating && (
                            <div className="flex items-center">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm ml-1">
                                {task.rating}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-[#FF6B35] hover:bg-[#e55a29]">
                    <Eye className="h-4 w-4 mr-2" />
                    Browse Available Tasks
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message Center
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setShowPaymentModal(true)}
                  >
                    <DollarSign className="h-4 w-4 mr-2" />
                    Request Payment
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Manage Schedule
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTasks.map((task) => (
                    <div key={task.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">
                            {task.title}
                          </h3>
                          <p className="text-gray-600 mb-2">
                            Client: {task.client}
                          </p>
                          <div className="flex items-center space-x-4">
                            <Badge className={getStatusColor(task.status)}>
                              {task.status.replace("-", " ")}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              {task.date}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-[#1E3A8A]">
                            {task.amount}
                          </p>
                          {task.rating && (
                            <div className="flex items-center justify-end mt-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm ml-1">
                                {task.rating}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                        {task.status === "in-progress" && (
                          <Button
                            size="sm"
                            className="bg-[#FF6B35] hover:bg-[#e55a29]"
                          >
                            Mark Complete
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="available" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {availableTasks.map((task) => (
                    <div key={task.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">
                            {task.title}
                          </h3>
                          <p className="text-gray-600 mb-2">
                            {task.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {task.budget}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              Due: {task.deadline}
                            </span>
                            <span>{task.bids} bids</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                          {task.location}
                        </span>
                        <div className="space-x-2">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            className="bg-[#1E3A8A] hover:bg-[#2E4A9A]"
                          >
                            Submit Bid
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Earnings Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    Earnings chart would go here
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>This Month</span>
                    <span className="font-bold">GHS 2,450</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Month</span>
                    <span className="font-bold">GHS 2,180</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pending</span>
                    <span className="font-bold text-yellow-600">GHS 350</span>
                  </div>
                  <Button
                    className="w-full bg-[#FF6B35] hover:bg-[#e55a29]"
                    onClick={() => setShowPaymentModal(true)}
                  >
                    Request Payout
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <PaymentModal
        open={showPaymentModal}
        onOpenChange={setShowPaymentModal}
        amount={2450}
        serviceFee={0}
        taskTitle="Payout Request"
        providerName="TaskFOXX"
        onPaymentComplete={() => {
          console.log("Payout requested");
        }}
      />
    </div>
  );
};

export default ProviderDashboard;
