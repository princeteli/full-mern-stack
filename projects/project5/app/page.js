"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Image from "next/image";

const Page = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 800,
        once: true, // animation only once for better UX
        disable: window.innerWidth < 768, // disable AOS on mobile
      });
    }
  }, []);

  return (
    <main className="overflow-x-hidden relative">
      {/* Gradient image */}
      <Image
        loading="lazy"
        width={800}
        height={600}
        className="absolute top-0 right-0 opacity-60 -z-10 max-w-[70%] sm:max-w-[60%] lg:max-w-none"
        src="/gradient.png"
        alt="gradient"
      />

      {/* Blue effect */}
      <div
        className="h-0 w-[20rem] sm:w-[30rem] lg:w-[40rem] absolute 
        top-[20%] right-[-10%] shadow-[0_0_600px_20px_#e99b63] 
        -rotate-[30deg] -z-10"
      ></div>

      <Header />
      <Hero />
    </main>
  );
};

export default Page;
