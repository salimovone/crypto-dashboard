import React, { useEffect, useRef } from "react";
import { useState } from "react";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = "0" + minutes;
  if (seconds <= 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

export default ({ second }) => {
  const [countDown, setCountDown] = useState(second);
  const timeId = useRef();
  useEffect(() => {
    timeId.current = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timeId.current);
  }, []);

  useEffect(() => {
    if (countDown <= 0) {
      clearInterval(timeId.current);
      alert("Time is end");
    }
  }, []);

  return (
    <div className="transaction_card p-5">
      <h1 className="text-left font-bold text-base">Count Down</h1>
      <p className="text-left">Time Count From 3</p>
      <div className="flex justify-start">{formatTime(countDown)}</div>
    </div>
  );
};
