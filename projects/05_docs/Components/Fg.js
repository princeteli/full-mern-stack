"use client"
import React, { useRef } from "react";
import Cards from "./Cards";


const Fg = () => {
const ref = useRef(null)

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing prince.",
      filesize: ".91mb",
      close: true,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consecteturhh  this is my king lan d hdjnv dd ",
      filesize: ".91mb",
      close: true,
      tag: { isopen: true, tagTitle: " Uploading", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet conseddd chor hai tu madar chod ctetur adipisicing prince.",
      filesize: ".91mb",
      close: true,
      tag: { isopen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
      {data.map((item, index) => (
        <Cards data={item} key={index} reference={ref}/>
      ))}
    </div>
  );
};

export default Fg;
