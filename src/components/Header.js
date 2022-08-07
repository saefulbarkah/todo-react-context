import React from "react";
import Brand from "./Brand";
import Toggle from "./Toggle";

const Header = () => {
  return (
    <header className="sticky top-0 py-5 bg-white dark:bg-slate-800/80 dark:backdrop-blur-lg rounded-b-2xl shadow-md z-50 backdrop-blur-lg">
      <div className="logo flex justify-between items-center container mx-auto px-10">
        <Brand addClassName="font-bold text-primary dark:text-slate-300 text-3xl">
          Todo App
        </Brand>
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
