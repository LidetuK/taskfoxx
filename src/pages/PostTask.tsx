import React from "react";
import Header from "@/components/Header";
import TaskPostingForm from "@/components/TaskPostingForm";

const PostTask = () => {
  const handleTaskSubmit = (data: any) => {
    console.log("Task submitted:", data);
    // Handle task submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
              Post a New Task
            </h1>
            <p className="text-lg text-gray-600">
              Tell us what you need done and get offers from skilled
              professionals
            </p>
          </div>
          <TaskPostingForm onSubmit={handleTaskSubmit} />
        </div>
      </div>
    </div>
  );
};

export default PostTask;
