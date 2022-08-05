import React from "react";

const Brand = ({ children, addClassName }) => {
  return (
    <>
      <span className={addClassName}>{children}</span>
    </>
  );
};

export default Brand;
