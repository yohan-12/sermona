// components/HeroSection.tsx
"use client"
import Image from "next/image";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react"
import aiAnimation from "@/public/lottie/hero1.json"


const Hero1 = () => {
  return (
    <div className="flex flex-col md:flex-row mt-20">
      <div className="flex-1 p-6 order-2 md:order-1">
        <h1 className="text-4xl font-bold mb-4">
          Dedicated to serving your ministry&apos;s uique needs
        </h1>
        <p className="text-lg mb-6">
          Sermona is a set of software tools to buy you more time so that you
          can focus on essential tasks.
        </p>
        <div className="flex flex-wrap gap-4 justify-center
         items-center">
          <Link
            href={"/"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Start Free Today!
          </Link>

          <Link
            href={"/"}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            No Credit Card Required
          </Link>
        </div>
      </div>
      <div className="flex-1 order-1 md:order-2">
        <Lottie animationData={aiAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Hero1;
