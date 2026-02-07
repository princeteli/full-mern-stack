"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [main, setMain] = useState([]);
  const Submit = (e) => {
    e.preventDefault();
    setMain([...main, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteH = (i) => {
    let copytask = [...main];
    copytask.splice(i, 1);
    setMain(copytask);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (main.length > 0) {
    renderTask = main.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mn-5">
          <div className="flex items-center justify-between  w-2/3">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <p className="text-lg font-medium ">{t.desc}</p>
          </div>
          <button
            onClick={() => {
              deleteH(i);
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold"
          >
            Delete Task
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Prince Todo List
      </h1>
      <form onSubmit={Submit}>
        <input
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          type="text"
          placeholder="Enter your title here"
          className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2 "
        />
        <input
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
          type="text"
          placeholder="Enter Description here"
          className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2 "
        />
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded m-5 ">
          Add My To-Do
        </button>
      </form>
      <hr></hr>
      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
