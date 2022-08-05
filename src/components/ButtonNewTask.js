import React from "react";
import { BsPlusSquareFill } from "react-icons/bs";
import Button from "./Button";

const ButtonNewTask = () => {
  return (
    <div className="fixed bottom-10 flex justify-center w-full z-50">
      <Button addClassName="bg-button py-5 rounded-xl shadow-lg text-lg">
        <div className="flex items-center gap-8 px-10">
          <span>New Task</span>
          <BsPlusSquareFill className="animate-bounce" />
        </div>
      </Button>
    </div>
  );
};

export default ButtonNewTask;
