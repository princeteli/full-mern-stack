"use client";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({ duration: 1200, once: true });
    }
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* Gradient image */}
      <Image
        width={800}
        height={600}
        className="absolute top-0 right-0 opacity-60 -z-10 max-w-[80%] sm:max-w-[60%] lg:max-w-none"
        src="/gradient.png"
        alt="gradient"
        priority
      />

      {/* Blue effect */}
      <div className="h-0 w-[25rem] sm:w-[35rem] lg:w-[40rem] absolute top-[20%] right-[-10%] shadow-[0_0_600px_15px_#e99b63] sm:shadow-[0_0_800px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

      <Header />

      {/* About */}
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="noto-serif text-center mt-7 font-bold text-3xl sm:text-4xl lg:text-6xl px-2"
      >
        About Me
      </h1>
      <hr className="my-4 w-4/5 sm:w-3/4 mx-auto" />

      {/* Education */}
      <div
        className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center justify-center mt-10 gap-4 sm:gap-6 py-4 px-4 sm:px-6 lg:px-20 mb-10"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h2
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-xl sm:text-2xl lg:text-3xl text-gray-400 noto-serif min-w-[150px] sm:min-w-[200px]"
        >
          Education
        </h2>
        <p
          className="noto-serif text-sm sm:text-base md:text-lg leading-relaxed break-words"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          Hey I&apos;m a BCA Bachelor of Computer Applications student, <br />
          currently in second year. Before this, I completed my 12th grade in
          Science stream.
        </p>
      </div>
      <hr className="my-4 w-4/5 sm:w-3/4 mx-auto" />

      {/* Skills and Knowledge */}
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center justify-center mt-10 gap-4 sm:gap-6 py-4 px-4 sm:px-6 lg:px-20 mb-10"
      >
        <h2
          data-aos="fade-down"
          data-aos-duration="1200"
          className="text-xl sm:text-2xl lg:text-3xl text-gray-400 noto-serif min-w-[150px] sm:min-w-[200px]"
        >
          Skills and Knowledge
        </h2>
        <p
          data-aos="fade-down"
          data-aos-duration="1500"
          className="noto-serif text-sm sm:text-base md:text-lg leading-relaxed break-words"
        >
          JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB <br />
          Spline, ShadCN/UI, SkiperUI, FramerMotion, Lenis
        </p>
      </div>
      <hr className="my-4 w-4/5 sm:w-3/4 mx-auto" />

      {/* Learning Journey */}
      <div
        data-aos="flip-left"
        data-aos-duration="1200"
        className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center justify-center mt-10 gap-4 sm:gap-6 py-4 px-4 sm:px-6 lg:px-20 mb-10"
      >
        <h2
          data-aos="fade-right"
          data-aos-duration="1000"
          className="text-xl sm:text-2xl lg:text-3xl text-gray-400 noto-serif min-w-[150px] sm:min-w-[200px]"
        >
          Learning Journey
        </h2>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className="noto-serif text-sm sm:text-base md:text-lg leading-relaxed break-words"
        >
          <b>MERN Stack</b> – Full stack development. <br />
          <b>DSA</b> – Improving problem-solving skills. <br />
          <b>Artificial Intelligence</b> – Building AI-powered projects. <br />
          <b>DevOps</b> – Started after completing MERN basics. <br />
        </p>
      </div>
      <hr className="my-4 w-4/5 sm:w-3/4 mx-auto" />

      {/* Goals and Ambitions */}
      <div
        data-aos="zoom-out-up"
        data-aos-duration="1200"
        className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center justify-center mt-10 gap-4 sm:gap-6 py-4 px-4 sm:px-6 lg:px-20 mb-10"
      >
        <h2
          data-aos="flip-up"
          data-aos-duration="1000"
          className="text-xl sm:text-2xl lg:text-3xl text-gray-400 noto-serif min-w-[150px] sm:min-w-[200px]"
        >
          Goals and Ambitions
        </h2>
        <p
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="noto-serif text-sm sm:text-base md:text-lg leading-relaxed break-words"
        >
          I want to become a problem-solving engineer. <br />
          My long-term goal is to do freelancing and also launch my own SaaS
          startup. <br />
          In freelancing, I plan to use my web development skills to get
          clients. <br />
          I also do Forex trading, and I have a fixed routine where I trade
          daily for a short time. <br />
          My target in trading is to earn small but consistent profits.
        </p>
      </div>
      <hr className="my-4 w-4/5 sm:w-3/4 mx-auto" />
    </main>
  );
};

export default Page;
