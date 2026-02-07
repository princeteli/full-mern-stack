import Image from "next/image";
import React from "react";

const SkillCard = (props) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-2xl shadow-md text-center gap-3 max-w-xs mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Responsive Image */}
      <Image
        width={800}
        height={600}
        loading="lazy"
        className="w-10 h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full object-cover"
        src={props.image}
        alt={props.title}
      />
      
      {/* Title */}
      <h3 className="text-lg sm:text-xl font-semibold text-white">{props.title}</h3>
      
      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg text-gray-400 dark:text-gray-300 hover:text-white break-words">
        {props.description}
      </p>
    </div>
  );
};

export default SkillCard;
