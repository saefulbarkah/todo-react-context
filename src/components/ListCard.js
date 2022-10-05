import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";
import { FaTrash, FaCheck, FaClock, FaWindowClose } from "react-icons/fa";
import Button from "./Button";
import Swal from "sweetalert2";
function ListCard() {
  const { Todos, RemoveTodos, completeTodo, unCompleteTodo } =
    useContext(TodoContext);
  console.log(Todos);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4B00FF",
      cancelButtonColor: "#FF4E4E",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        RemoveTodos(id);
      }
    });
  };
  const handleComplete = (id) => {
    const completed = true;
    completeTodo(id, completed);
  };
  const handleRemoveComplete = (id) => {
    const completed = false;
    unCompleteTodo(id, completed);
  };
  return (
    <>
      <div className="bg-white dark:bg-slate-800  rounded-t-3xl shadow-md min-h-screen">
        {Todos.length === 0 && (
          <div className="flex justify-center items-center h-[400px] md:h-[700px] lg:h-[450px] text-3xl font-bold">
            <span className="text-primary dark:text-slate-300">
              No Task Found
            </span>
          </div>
        )}
        <div className="grid grid-cols-1 gap-20 justify-center lg:grid-cols-4 py-20 pb-40 px-5">
          {Todos.map((item, i) => (
            <div
              className={`card w-full mx-auto rounded-xl py-24 px-5 shadow-lg relative ${
                item.isComplete
                  ? `bg-green-600 dark:bg-green-600/50 dark:border dark:border-green-600`
                  : `bg-red dark:bg-red/50 dark:border dark:border-red`
              }`}
              key={i}
            >
              <div className="card-header absolute m-auto left-0 right-0 -top-3 flex justify-center items-center">
                <span className="text-sm bg-primary py-3 px-3 rounded-lg flex items-center gap-1">
                  {item.time} <FaClock />
                </span>
              </div>
              <div
                className={`text-xl w-full  ${
                  item.isComplete ? `line-through` : ""
                } card-body text-center w-full relative h-full break-words`}
              >
                {item.title}
              </div>
              <div className="card-header absolute m-auto left-0 right-0 -bottom-5 flex justify-center items-center">
                <div className="box bg-primary py-3 px-3 rounded-xl">
                  <div className="box flex gap-4">
                    <Button
                      addClassName="text-sm bg-red py-2 px-3 rounded-lg dark:bg-red/30 dark:border dark:border-red"
                      isClicked={() => handleRemove(item.id)}
                    >
                      <FaTrash className="dark:text-white" />
                    </Button>
                    {item.isComplete ? (
                      <Button
                        addClassName="text-sm bg-orange-500 py-2 px-3 rounded-lg dark:bg-orange-500/50 dark:border dark:border-orange-500"
                        id={item.id}
                        isClicked={() => handleRemoveComplete(item.id)}
                      >
                        <FaWindowClose className=" dark:text-white" />
                      </Button>
                    ) : (
                      <Button
                        addClassName="text-sm bg-success py-2 px-3 rounded-lg dark:bg-success/50 dark:border dark:border-success"
                        id={item.id}
                        isClicked={() => handleComplete(item.id)}
                      >
                        <FaCheck className=" dark:text-success" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ListCard;
