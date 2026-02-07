import React from "react";
import { ArrowUp } from "@deemlol/next-icons";

const Landing = () => {
  return (
    <div className="w-full h-screen pt-1 bg-zinc-900">
      <div className="textstructure mt-40 px-20 ">
        {["We Create", "Eye Opening", "Presentation"].map((elem, idx) => {
          return (
            <div className="masker" key={idx}>
              <div className="w-fit flex items-end overflow-hidden">  
               { idx===1  &&( <div className="mr-[1vw] w-[7vw] rounded-md h-[5vw] relative -top-[0.5vw] bg-red-500"></div>)}
              <h1 className="uppercase leading-[6vw] tracking-tighter font-medium text-[7.5vw]">
                {elem}
              </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-400 mt-20 flex justify-between items-center py-5 px-20">
        {["for prince the king ", "the create and funny"].map((elem, idx) => {
          return (
            <p
              key={idx}
              className="text-md font-light tracking-tight leading-none"
            >
              {elem}
            </p>
          );
        })}
        <div className="start flex items-center gap-5 uppercase">
          <div className="px-5 py-2 border-[2px] font-light text-md capitalize border-zinc-400 rounded-full ">
            Start the Project
          </div>
          <div className="w-8 h-8 flex items-center justify-center border-[2px] border-zinc-400 rounded-full">
            <span className="rotate-[45deg]">
              <ArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
