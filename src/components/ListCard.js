import React from "react";
import ListTodo from "./ListTodo";

function ListCard() {
  return (
    <>
      <div className="bg-white rounded-t-3xl shadow-md w-12/12 min-h-screen">
        <div className="grid grid-rows-1 py-10 gap-20">
          <ListTodo title="What are u doing ?" time="20:20" />
          <ListTodo title="What are u doing ?" time="20:20" />
        </div>
      </div>
    </>
  );
}

export default ListCard;
