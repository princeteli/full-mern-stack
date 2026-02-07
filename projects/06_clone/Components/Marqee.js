"use client"
import React from "react";
import { motion } from "motion/react"

const Marqee = () => {
  return (
    <div className="w-full rounded-tl-4xl rounded-tr-4xl py-20 bg-green-900 ">
      <div className="text border-t-2 border-b-2 overflow-hidden border-zinc-200 gap-20 flex whitespace-nowrap">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className="text-[13vw] text-white font-semibold uppercase pt-5 leading-none">
          Create By Prince
        </motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} className="text-[13vw] text-white font-semibold uppercase pt-5 leading-none">
          Create By Prince
        </motion.h1>
      
      </div>
    </div>
  );
};

export default Marqee;
