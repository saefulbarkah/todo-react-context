import React, { useEffect, useState } from "react";
import Time from "./Time";

const DateCard = () => {
  const today = new Date();
  return (
    <>
      <div className="card flex justify-center items-center text-3xl gap-3">
        <div className="date bg-white flex flex-col justify-center items-center px-7 py-2 rounded-2xl -space-y-2">
          <span className="text-primary font-bold">{today.getDate()}</span>
          <span className="text-primary font-bold text-lg">
            {today.toLocaleString("en-US", { month: "short" })}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold">
            {today.toLocaleString("en-US", { weekday: "long" })}
          </span>
          <span className="text-xl lg:text-2xl">
            <Time />
          </span>
        </div>
      </div>
    </>
  );
};

export default DateCard;
