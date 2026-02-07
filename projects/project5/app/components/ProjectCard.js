"use client";
import React from "react";

const ProjectCard = ({ name, descr, link, aos = "fade-up", delay = "0" }) => {
  return (
    <div
      className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 flex flex-col gap-3 transition-transform duration-500 hover:scale-105"
      data-aos={aos}          // 👈 props se controlled
      data-aos-delay={delay}  // 👈 props se controlled
    >
      <h2 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100">
        {name}
      </h2>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
        {descr}
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer" // 👈 security best practice
        href={link}
        className="mt-2 inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
      >
        Check Here
      </a>
    </div>
  );
};

export default ProjectCard;
