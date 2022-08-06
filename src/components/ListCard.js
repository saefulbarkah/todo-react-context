import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { FaTrash, FaCheck, FaClock } from "react-icons/fa";
import Button from "./Button";
import Swal from "sweetalert2";
function ListCard() {
  const { Todos, RemoveTodos } = useContext(TodoContext);
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
  return (
    <>
      <div className="bg-white rounded-t-3xl shadow-md w-12/12 min-h-screen">
        <div className="grid grid-rows-1 py-10 gap-20">
          {Todos.map((item, i) => (
            <div className="card bg-red w-8/12 mx-auto rounded-xl py-24 shadow-lg relative">
              <div className="card-header absolute m-auto left-0 right-0 -top-3 flex justify-center items-center">
                <span className="text-sm bg-primary py-3 px-3 rounded-lg flex items-center gap-1">
                  {item.time} <FaClock />
                </span>
              </div>
              <div className="card-body flex justify-center">
                <span className="text-2xl font-bold text-center">
                  {item.title}
                </span>
              </div>
              <div className="card-header absolute m-auto left-0 right-0 -bottom-5 flex justify-center items-center">
                <div className="box bg-primary py-3 px-3 rounded-xl">
                  <div className="box flex gap-4">
                    <Button
                      addClassName="text-sm bg-red py-2 px-3 rounded-lg"
                      isClicked={() => handleRemove(item.id)}
                    >
                      <FaTrash className="" />
                    </Button>
                    <Button
                      addClassName="text-sm bg-success py-2 px-3 rounded-lg"
                      id={item.id}
                    >
                      <FaCheck className="text-primary" />
                    </Button>
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
