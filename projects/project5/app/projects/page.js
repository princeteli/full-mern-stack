"use client";
import React, { useEffect } from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Page = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 1200, once: true });
    }
  }, []);

  return (
    <main className="overflow-x-hidden relative">
      {/* Gradient Background */}
      <Image
        src="/gradient.png"
        width={800}
        height={600}
        alt="gradient"
        priority
        className="absolute top-0 right-0 opacity-60 -z-10 w-[80%] sm:w-[60%] lg:w-auto"
        data-aos="fade-left"
        data-aos-duration="800"
      />

      {/* Blue Effect */}
      <div
        className="h-0 w-[20rem] sm:w-[30rem] lg:w-[40rem] absolute top-[25%] right-[-10%] shadow-[0_0_600px_15px_#e99b63] sm:shadow-[0_0_800px_20px_#e99b63] -rotate-[30deg] -z-10"
        data-aos="zoom-in"
        data-aos-duration="2000"
      ></div>

      {/* Header */}
      <Header />

      {/* Projects Section */}
      <div className="px-4 sm:px-8 lg:px-20 py-10">
        <h1
          className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl mb-10"
          data-aos="fade-up"
        >
          My Projects
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            name="Laundry Services Booking"
            descr="Users can schedule pickups, track orders, and manage laundry services online with ease and transparency."
            link="https://delicate-custard-906d28.netlify.app/"
            aos="fade-up"
            delay="100"
          />

          <ProjectCard
            name="Portfolio Website"
            descr="A responsive portfolio website built with Next.js and Tailwind CSS. Showcases skills, projects, and contact form."
            link="https://yourportfolio.netlify.app/"
            aos="fade-up"
            delay="200"
          />

          <ProjectCard
            name="E-commerce Store"
            descr="An e-commerce project with product listing, cart, and checkout. Provides smooth shopping experience and secure transactions."
            link="https://myecommerce.netlify.app/"
            aos="fade-up"
            delay="300"
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
