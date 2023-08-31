import React, { useEffect, useState } from "react";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = "0" + minutes;
  if (seconds <= 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
};

export default () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => setCount((count) => count + 1), 1000);
  }, []);
  return (
    <div className="transaction_card p-5">
      <h1 className="text-left font-bold text-base">Count Up</h1>
      <p className="text-left">Time Counting From 0</p>
      <div className="flex justify-start">{formatTime(count)}</div>
    </div>
  );
};
