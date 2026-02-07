'use client'
import React, { useState, useEffect } from "react";

const TimeBody = () => {
  const [time, setTime] = useState({
    hour: new Date().getHours().toLocaleString(),
    minute: new Date().getMinutes().toLocaleString(),
    second: new Date().getSeconds().toLocaleString(),
  });
  
  let month1 = [
    "01", "02", "03", "04", "05", "06",
    "07", "08", "09", "10", "11", "12",
  ];
  const [date, setDate] = useState({
    day: new Date().getDate().toLocaleString(),
    month: month1[new Date().getMonth()],
    year: new Date().getFullYear(),
  });


  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime({
        hour: now.getHours().toLocaleString(),
        minute: now.getMinutes().toLocaleString(),
        second: now.getSeconds().toLocaleString(),
      });
      setDate({
        day: now.getDate().toLocaleString(),
        month: month1[now.getMonth()],
        year: now.getFullYear(),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ... existing code ...
  return (
    <div className="mt-9 h-[60vh] w-[80vw] bg-pink-200 rounded-lg ml-[10vw]">
      <p className="text-center">
        <span className="text-red-700 text-4xl font-bold">Today is </span>
        <span className="text-black text-4xl font-semibold ">
          {date.day} / {date.month} / {date.year}
        </span>
      </p>

      <p className="text-center mt-5">
        <span className="text-red-700 text-4xl font-bold">Time: </span>
        <span className="text-black text-4xl font-semibold">
          {time.hour}:{time.minute}:{time.second}
        </span>
      </p>
    </div>
  );
};

export default TimeBody;
