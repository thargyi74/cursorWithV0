"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Rocket, Users } from "lucide-react";

interface UserOnboardingProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserOnboarding({
  isOpen,
  onClose,
}: UserOnboardingProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  if (!isOpen) return null;

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <CardHeader>
              <CardTitle>Welcome to Our Platform!</CardTitle>
              <CardDescription>
                Let's get you started on your journey to success.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We're excited to have you on board. Our platform offers powerful
                tools to help you grow your business and achieve your goals.
                Let's begin by setting up your account.
              </p>
            </CardContent>
          </>
        );
      case 2:
        return (
          <>
            <CardHeader>
              <CardTitle>Tell Us About Yourself</CardTitle>
              <CardDescription>
                We'd love to know more about you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </CardContent>
          </>
        );
      case 3:
        return (
          <>
            <CardHeader>
              <CardTitle>Discover Our Key Features</CardTitle>
              <CardDescription>
                Here's what makes our platform stand out.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Advanced Analytics Dashboard</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Seamless Integration with Popular Tools</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>24/7 Customer Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Customizable Workflows</span>
                </li>
              </ul>
            </CardContent>
          </>
        );
      case 4:
        return (
          <>
            <CardHeader>
              <CardTitle>You're All Set!</CardTitle>
              <CardDescription>
                Ready to start your journey with us?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Congratulations, {formData.name}! Your account is now set up and
                ready to go. We can't wait to see what you'll achieve with our
                platform.
              </p>
              <Button className="w-full" size="lg">
                Get Started Now
              </Button>
            </CardContent>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-lg">
        <div className="p-4">
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`w-1/4 h-2 rounded-full ${
                  i <= step ? "bg-primary" : "bg-gray-200"
                } transition-all duration-300`}
              />
            ))}
          </div>
          {renderStep()}
        </div>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={step === 1}
          >
            Previous
          </Button>
          <Button onClick={step === 4 ? onClose : handleNext}>
            {step === 3 ? "Finish" : step === 4 ? "Close" : "Next"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
