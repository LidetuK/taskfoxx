import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PaymentModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  amount?: number;
  serviceFee?: number;
  taskTitle?: string;
  providerName?: string;
  onPaymentComplete?: () => void;
}

const PaymentModal = ({
  open = true,
  onOpenChange = () => {},
  amount = 250,
  serviceFee = 25,
  taskTitle = "Home Cleaning Service",
  providerName = "Kofi Mensah",
  onPaymentComplete = () => {},
}: PaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<string>("mtn");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const totalAmount = amount + serviceFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!phoneNumber) {
      setError("Please enter your phone number");
      return;
    }

    if (phoneNumber.length < 10) {
      setError("Please enter a valid phone number");
      return;
    }

    // Simulate payment processing
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);

      // After showing success for 2 seconds, close and reset
      setTimeout(() => {
        onPaymentComplete();
        onOpenChange(false);

        // Reset state for next time
        setTimeout(() => {
          setIsComplete(false);
          setPhoneNumber("");
        }, 300);
      }, 2000);
    }, 3000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            {isComplete ? "Payment Successful!" : "Complete Payment"}
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            {isComplete
              ? "Your payment has been processed successfully"
              : `Pay for ${taskTitle} with mobile money`}
          </DialogDescription>
        </DialogHeader>

        {isComplete ? (
          <div className="flex flex-col items-center justify-center py-6 space-y-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <div className="text-center">
              <p className="font-medium">
                Payment of GHS {totalAmount.toFixed(2)} completed
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {providerName} has been notified and will begin your task soon
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Service Fee:</span>
                      <span className="font-medium">
                        GHS {serviceFee.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Task Payment:</span>
                      <span className="font-medium">
                        GHS {amount.toFixed(2)}
                      </span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between">
                      <span className="font-medium">Total:</span>
                      <span className="font-bold">
                        GHS {totalAmount.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Label>Select Payment Method</Label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <RadioGroupItem
                      value="mtn"
                      id="mtn"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="mtn"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <div className="mb-2 rounded-md bg-yellow-400 p-1 w-10 h-10 flex items-center justify-center">
                        <span className="font-bold text-black text-xs">
                          MTN
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        MTN Mobile Money
                      </span>
                    </Label>
                  </div>

                  <div>
                    <RadioGroupItem
                      value="vodafone"
                      id="vodafone"
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor="vodafone"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <div className="mb-2 rounded-md bg-red-600 p-1 w-10 h-10 flex items-center justify-center">
                        <span className="font-bold text-white text-xs">
                          VODA
                        </span>
                      </div>
                      <span className="text-sm font-medium">Vodafone Cash</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Mobile Money Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full"
                />
                {error && (
                  <div className="flex items-center text-red-500 text-sm mt-1">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{error}</span>
                  </div>
                )}
                <p className="text-xs text-muted-foreground">
                  You will receive a prompt on your phone to confirm this
                  payment
                </p>
              </div>
            </div>

            <DialogFooter className="mt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isProcessing}
                className="w-full sm:w-auto"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-full sm:w-auto bg-[#FF6B35] hover:bg-[#e55a29]"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Pay GHS ${totalAmount.toFixed(2)}`
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
