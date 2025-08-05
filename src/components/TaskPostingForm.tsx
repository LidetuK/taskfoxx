import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ChevronRight,
  ChevronLeft,
  MapPin,
  Calendar,
  DollarSign,
  FileText,
  Check,
} from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters" }),
  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters" }),
  category: z.string().min(1, { message: "Please select a category" }),
  location: z.string().min(1, { message: "Please enter a location" }),
  budget: z.string().min(1, { message: "Please enter a budget" }),
  deadline: z.string().min(1, { message: "Please select a deadline" }),
});

type FormValues = z.infer<typeof formSchema>;

interface TaskPostingFormProps {
  onSubmit?: (data: FormValues) => void;
}

const TaskPostingForm = ({ onSubmit = () => {} }: TaskPostingFormProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      location: "",
      budget: "",
      deadline: "",
    },
  });

  const handleNext = async () => {
    const fields =
      step === 1
        ? ["title", "description", "category"]
        : ["location", "budget", "deadline"];

    const isValid = await form.trigger(fields as any);
    if (isValid) {
      if (step < 3) {
        setStep(step + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const values = form.getValues();
      await onSubmit(values);
      setIsSuccess(true);
      setTimeout(() => {
        form.reset();
        setStep(1);
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    { value: "home-services", label: "Home Services" },
    { value: "digital-services", label: "Digital Services" },
    { value: "events", label: "Events" },
    { value: "transport", label: "Transport" },
    { value: "education", label: "Education" },
    { value: "health", label: "Health" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto bg-background p-4 md:p-6 rounded-xl">
      {/* Progress Indicator */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                {i < step ? <Check size={16} /> : i}
              </div>
              <span className="text-xs mt-1 text-muted-foreground">
                {i === 1 ? "Details" : i === 2 ? "Location & Budget" : "Review"}
              </span>
            </div>
          ))}
          <div className="absolute left-0 right-0 h-1 flex justify-center z-0">
            <div className="w-2/3 bg-muted rounded-full h-1">
              <div
                className="bg-primary h-1 rounded-full transition-all duration-300"
                style={{ width: `${(step - 1) * 50}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <Card className="border-none shadow-md">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl text-center text-primary">
            {step === 1
              ? "What do you need help with?"
              : step === 2
                ? "Where and when do you need it?"
                : "Review your task details"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Task Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g., Fix leaking kitchen sink"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Keep it short and clear
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Task Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe what you need done in detail..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Include all relevant details for service providers
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem
                                key={category.value}
                                value={category.value}
                              >
                                {category.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Choose the most relevant category for your task
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              placeholder="e.g., Accra, East Legon"
                              className="pl-10"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Enter the location where the task needs to be done
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Budget (GHS)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              type="number"
                              placeholder="e.g., 200"
                              className="pl-10"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Enter your budget in Ghana Cedis (GHS)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="deadline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Deadline</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input type="date" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormDescription>
                          When do you need this task completed by?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="bg-muted/30 p-4 rounded-lg space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">
                          Task Title
                        </h3>
                        <p className="text-base">
                          {form.getValues().title || "Not specified"}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">
                          Category
                        </h3>
                        <p className="text-base">
                          {categories.find(
                            (c) => c.value === form.getValues().category,
                          )?.label || "Not specified"}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">
                        Description
                      </h3>
                      <p className="text-base">
                        {form.getValues().description || "Not specified"}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">
                          Location
                        </h3>
                        <p className="text-base flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-primary" />
                          {form.getValues().location || "Not specified"}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">
                          Budget
                        </h3>
                        <p className="text-base flex items-center">
                          <DollarSign className="h-4 w-4 mr-1 text-primary" />
                          GHS {form.getValues().budget || "0"}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">
                          Deadline
                        </h3>
                        <p className="text-base flex items-center">
                          <Calendar className="h-4 w-4 mr-1 text-primary" />
                          {form.getValues().deadline || "Not specified"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="flex items-start">
                      <FileText className="h-5 w-5 mr-2 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">What happens next?</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          After posting your task, service providers will be
                          able to see it and send you offers. You'll receive
                          notifications when providers respond, and you can
                          choose the best offer.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 ? (
            <Button
              type="button"
              variant="outline"
              onClick={handleBack}
              disabled={isSubmitting}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          ) : (
            <div></div>
          )}

          <Button type="button" onClick={handleNext} disabled={isSubmitting}>
            {step < 3 ? (
              <>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </>
            ) : isSubmitting ? (
              "Posting..."
            ) : (
              "Post Task"
            )}
          </Button>
        </CardFooter>
      </Card>

      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex items-center justify-center"
        >
          <Check className="h-5 w-5 mr-2" />
          Task posted successfully! Providers will be notified.
        </motion.div>
      )}
    </div>
  );
};

export default TaskPostingForm;
