import React from "react";

const Button = ({ children, addClassName, isClicked }) => {
  return (
    <>
      <button className={addClassName} onClick={isClicked}>
        {children}
      </button>
    </>
  );
};

export default Button;
