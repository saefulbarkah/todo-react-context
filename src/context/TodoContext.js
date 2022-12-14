import { createContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [Todos, setTodo] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const MySwal = withReactContent(Swal);

  const AddTodos = (title, time) => {
    const id = Todos.length + 1;
    setTodo((prevState) => [
      ...prevState,
      { id, title, time, isComplete: false },
    ]);
    MySwal.fire({
      icon: "success",
      title: "Success",
      text: "New task added successfully",
    });
  };

  const RemoveTodos = (id) => {
    Todos.id = Todos.filter((item) => item.id !== id);
    console.log(Todos.id);
    setTodo(Todos.id);
    MySwal.fire({
      icon: "success",
      title: "Success",
      text: "Remove task successfully",
    });
  };

  const completeTodo = (id, completed) => {
    setTodo(
      Todos.map((item) => {
        if (item.id === id) {
          return { ...item, isComplete: completed };
        }
        return item;
      })
    );
    console.log(Todos);
  };

  const unCompleteTodo = (id, completed) => {
    setTodo(
      Todos.map((item) => {
        if (item.id === id) {
          return { ...item, isComplete: completed };
        }
        return item;
      })
    );
    console.log(Todos);
  };

  localStorage.setItem("todos", JSON.stringify(Todos));
  return (
    <>
      <TodoContext.Provider
        value={{ Todos, AddTodos, RemoveTodos, completeTodo, unCompleteTodo }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
}

export default TodoContext;
