import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import ListTodo from "./ListTodo";

function ListCard() {
  const { Todos } = useContext(TodoContext);
  console.log(Todos);
  return (
    <>
      <div className="bg-white rounded-t-3xl shadow-md w-12/12 min-h-screen">
        <div className="grid grid-rows-1 py-10 gap-20">
          {Todos.map((item) => (
            <ListTodo title={item.title} time={item.time} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListCard;
