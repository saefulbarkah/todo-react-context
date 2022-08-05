import React from "react";
import { FaTrash, FaCheck, FaClock } from "react-icons/fa";
const ListTodo = ({ title, time }) => {
  return (
    <>
      <div className="card bg-red w-8/12 mx-auto rounded-xl py-24 shadow-lg relative">
        <div className="card-header absolute m-auto left-0 right-0 -top-3 flex justify-center items-center">
          <span className="text-sm bg-primary py-3 px-3 rounded-lg flex items-center gap-1">
            {time} <FaClock />
          </span>
        </div>
        <div className="card-body flex justify-center">
          <span className="text-2xl font-bold text-center">{title}</span>
        </div>
        <div className="card-header absolute m-auto left-0 right-0 -bottom-5 flex justify-center items-center">
          <div className="box bg-primary py-3 px-3 rounded-xl">
            <div className="box flex gap-4">
              <span className="text-sm bg-red py-2 px-3 rounded-lg ">
                <FaTrash className="" />
              </span>
              <span className="text-sm bg-success py-2 px-3 rounded-lg">
                <FaCheck className="text-primary" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListTodo;
