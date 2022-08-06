import React from "react";

const Button = ({ children, addClassName, isClicked, isType }) => {
  return (
    <>
      <button className={addClassName} onClick={isClicked} type={isType}>
        {children}
      </button>
    </>
  );
};

export default Button;
