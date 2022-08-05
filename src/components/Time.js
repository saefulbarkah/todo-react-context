import React, { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState();
  const today = new Date();

  const updateTime = () => {
    const timeNow = today.toLocaleTimeString("default", {
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(timeNow);
  };
  useEffect(() => {
    updateTime();
  });
  return <>{time}</>;
};

export default Time;
