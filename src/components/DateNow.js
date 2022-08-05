import React from "react";

const DateNow = () => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const now = new Date();

  return (
    <>
      <div>{now.toLocaleDateString("en-US", options)}</div>
    </>
  );
};

export default DateNow;
