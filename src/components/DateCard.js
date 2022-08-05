import React from "react";

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
        <span className="font-bold">
          {today.toLocaleString("en-US", { weekday: "long" })}
        </span>
      </div>
    </>
  );
};

export default DateCard;
