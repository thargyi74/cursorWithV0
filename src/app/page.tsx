"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import UserOnboarding from "@/components/UserOnboarding";
import LoginPage from "@/components/LoginPage";

export default function Home() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setIsFirstVisit(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleCloseOnboarding = () => {
    setIsFirstVisit(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-blue-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className=" w-full max-w-md">
          <p>Hello</p>
          <LoginPage />
        </div>
        <UserOnboarding isOpen={isFirstVisit} onClose={handleCloseOnboarding} />
      </div>
    </main>
  );
}
