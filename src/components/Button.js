import React from "react";

const Button = ({ children, addClassName }) => {
  return (
    <>
      <button className={addClassName}>{children}</button>
    </>
  );
};

export default Button;
