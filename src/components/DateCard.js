import React from "react";

const DateCard = () => {
  return (
    <>
      <div className="card flex justify-center items-center text-3xl gap-3">
        <div className="date bg-white flex flex-col justify-center items-center px-7 py-2 rounded-2xl -space-y-2">
          <span className="text-primary font-bold">15</span>
          <span className="text-primary font-bold text-lg">aug</span>
        </div>
        <span className="font-bold">Today</span>
      </div>
    </>
  );
};

export default DateCard;
