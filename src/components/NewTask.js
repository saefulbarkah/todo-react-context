import React, { useContext, useEffect, useState } from "react";
import ModalContext from "../context/ModalContext";
import TodoContext from "../context/TodoContext";
import Button from "./Button";
import DateNow from "./DateNow";
const NewTask = () => {
  const { closeModal } = useContext(ModalContext);
  const { AddTodos } = useContext(TodoContext);

  const HandleAddTodo = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const title = form.get("title");
    const time = form.get("time");
    AddTodos(title, time);
  };
  return (
    <>
      <div className="flex justify-center">
        <DateNow></DateNow>
      </div>
      <form className="mt-4" onSubmit={HandleAddTodo}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="form-grup flex flex-col">
            <label htmlFor="" className="py-2">
              Title
            </label>
            <input
              type="text"
              className="py-2 px-5 rounded-lg border-2 border-primary/50 transition duration-300 outline-primary focus:outline-4 outline-offset-1"
              placeholder="Insert Your Task"
              name="title"
            />
          </div>
          <div className="form-grup flex flex-col">
            <label htmlFor="" className="py-2">
              Time
            </label>
            <input
              type="time"
              className="py-2 px-5 rounded-lg border-2 bg-white border-primary/50 transition duration-300 outline-primary focus:outline-4 outline-offset-1 w-full"
              name="time"
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center items-center gap-10 text-white">
          <Button
            addClassName="bg-red py-3 px-4 rounded-lg"
            isClicked={() => closeModal()}
            isType="button"
          >
            Close
          </Button>
          <Button
            addClassName="bg-button/80 py-3 px-4 rounded-lg"
            isClicked={console.log("SAVE")}
            isType="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </>
  );
};

export default NewTask;
