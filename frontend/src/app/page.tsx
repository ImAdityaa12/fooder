"use client";
import HeroSection from "@/components/hero-section";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // get cookie token
    const token = document.cookie.split("=")[1];
    if (token) {
      window.location.href = "/home";
    }
  }, []);
  return (
    <div className="w-full h-full">
      <HeroSection />
    </div>
  );
}
