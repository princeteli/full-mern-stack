"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../components/Header";
import SkillCard from "../components/SkillCard";
import Image from "next/image";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // run only once
      offset: 100, // trigger point
    });
  }, []);

  const skills = [
    {
      title: "HTML",
      description:
        "HyperText Markup Language is the core language used to build the structure of websites. With HTML, we can create headings, paragraphs, lists, links, images, and forms. It acts as the skeleton of any web page, defining how content is organized.",
      image: "/html.jpeg",
    },
    {
      title: "CSS",
      description:
        "Cascading Style Sheets are used to style websites and make them visually appealing. CSS controls colors, fonts, layouts, grids, and animations. With responsive CSS, websites can adapt perfectly to mobile, tablet, and desktop screens.",
      image: "/download.png",
    },
    {
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework that helps you design websites quickly. You can use ready-made classes for colors, spacing, fonts, layout, and responsiveness without writing custom CSS.",
      image: "/taliwind.png",
    },
    {
      title: "JavaScript",
      description:
        "A programming language that adds logic and interactivity to websites. Using JavaScript, developers can create interactive buttons, form validations, dynamic content updates, sliders, and real-time functionality.",
      image: "/js3.png",
    },
    {
      title: "React.js",
      description:
        "A modern JavaScript library used to create dynamic and single-page applications (SPAs). React allows developers to build reusable components and ensures fast, smooth performance using the Virtual DOM.",
      image: "/react2.png",
    },
    {
      title: "Next.js",
      description:
        "A full-stack React framework that enables server-side rendering, static site generation, and full-stack development. Next.js makes web apps SEO-friendly, high-performing, and efficient for both frontend and backend integration.",
      image: "/next.webp",
    },
    {
      title: "Node.js",
      description:
        "A runtime environment that allows JavaScript to run on the server side. Node.js is used to build APIs, handle backend logic, and manage server-side processes efficiently.",
      image: "/node.png",
    },
    {
      title: "Express.js",
      description:
        "A minimal and flexible Node.js framework that simplifies the creation of REST APIs and server routes. It allows developers to handle backend requests, middleware, and endpoints with ease.",
      image: "/express.png",
    },
    {
      title: "MongoDB",
      description:
        "A NoSQL database that stores data in flexible document structures. MongoDB is perfect for large-scale applications, providing fast, scalable, and efficient database management.",
      image: "/mongodb.png",
    },
    {
      title: "Spline",
      description:
        "A tool used for designing and integrating 3D models into websites. Spline helps make websites more interactive and visually engaging with modern 3D content.",
      image: "/spline.jpeg",
    },
    {
      title: "ShadCN/UI",
      description:
        "A collection of pre-built modern UI components that provide a professional look and consistent design. Using these components, developers can create polished and responsive web apps faster.",
      image: "/shadcnui.jpeg",
    },
    {
      title: "Skiper UI",
      description:
        "A UI kit containing ready-to-use elements like buttons, cards, forms, and navigation components. It simplifies the design and development process while maintaining a clean and cohesive interface.",
      image: "/skiperui.webp",
    },
    {
      title: "Framer Motion",
      description:
        "A React library for creating animations and smooth transitions. With Framer Motion, developers can add interactive and fluid motion effects to websites and web apps, enhancing user experience.",
      image: "/motin.png",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
    AOS.refresh();
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Image
        src="/gradient.png"
        alt="gradient"
        fill
        className="object-cover opacity-60 -z-10"
      />

      {/* blue effect */}
      <div className="h-0 w-[25rem] sm:w-[35rem] lg:w-[40rem] absolute top-[20%] right-[-10%] shadow-[0_0_600px_15px_#e99b63] sm:shadow-[0_0_800px_20px_#e99b63] -rotate-[30deg] -z-10"></div>

      <Header />

      {/* skills */}
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-center mt-5 noto-serif underline decoration-green-500 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 "
      >
        My Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((item, i) => (
          <div key={i} data-aos="fade-up" data-aos-delay="300">
            <SkillCard
              title={item.title}
              description={item.description}
              image={item.image}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
