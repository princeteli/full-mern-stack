import About from "@/Components/About";
import Landing from "@/Components/Landing";
import Marqee from "@/Components/Marqee";
import Navbar from "@/Components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Landing />
      <Marqee/>
      <About/>
    </div>
  );
};

export default page;
