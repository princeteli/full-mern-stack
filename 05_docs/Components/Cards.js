"use client"
import React from "react";
import { FileText, Download, XSquare } from "@deemlol/next-icons";
import { motion } from "framer-motion"; // ✅ Sahi import

const Cards = ({ data , reference}) => {
  return (
    <motion.div
      drag dragConstraints={reference}
      className="relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white p-5 overflow-hidden"
    >
      <FileText />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-8 h-8 rounded-full flex items-center justify-center">
            {data.close ? <XSquare /> : <Download />}
          </span>
        </div>
        {data.tag.isopen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cards;
