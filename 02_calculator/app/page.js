"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const handle = (value) => {
    if (value === "=") {
      try {
        setResult(eval(expression).toString());
      } catch (err) {
        setResult(err);
      }
    } else if (value === "C") {
      setResult("");
      setExpression("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const button = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
  ];
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-10">Calculator</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg ">
        <input
          type="text"
          className="w-full mb-2 text-3xl border-b-2 border-gray-400 focus:outline-none"
          value={expression}
          readOnly
        />
        <input
          type="text"
          className="w-full text-4xl font-bold mb-4 focus:outline"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {button.map((btn) => (
            <button
              key={btn}
              onClick={() => handle(btn)}
              className="text-4xl bg-gray-300 hover:bg-gray-400 p-2 rounded-lg"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
