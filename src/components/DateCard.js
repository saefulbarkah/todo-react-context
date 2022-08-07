import React from "react";
import Time from "./Time";

const DateCard = () => {
  const today = new Date();
  return (
    <>
      <div className="card flex justify-center items-center text-3xl gap-3">
        <div className="date bg-white dark:bg-slate-800  flex flex-col justify-center items-center px-7 py-2 rounded-2xl -space-y-2">
          <span className="text-primary dark:text-slate-300  font-bold">
            {today.getDate()}
          </span>
          <span className="text-primary dark:text-slate-300 font-bold text-lg">
            {today.toLocaleString("en-US", { month: "short" })}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold dark:text-slate-300">
            {today.toLocaleString("en-US", { weekday: "long" })}
          </span>
          <span className="text-xl lg:text-2xl dark:text-slate-300">
            <Time />
          </span>
        </div>
      </div>
    </>
  );
};

export default DateCard;
