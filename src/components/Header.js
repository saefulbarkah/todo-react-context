import React from "react";
import Brand from "./Brand";

const Header = () => {
  return (
    <header className="sticky top-0 py-5 bg-white rounded-b-2xl shadow-md z-50 backdrop-blur-lg">
      <div className="logo flex justify-center items-center">
        <Brand addClassName="font-bold text-primary text-3xl">Todo App</Brand>
      </div>
    </header>
  );
};

export default Header;
