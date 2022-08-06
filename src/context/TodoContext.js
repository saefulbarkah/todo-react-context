import { createContext, useState } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [Todos, setTodo] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  const AddTodos = (title, time) => {
    const id = Todos.length + 1;
    setTodo((prevState) => [...prevState, { id, title, time }]);
    console.log(title, time);
  };
  localStorage.setItem("todos", JSON.stringify(Todos));
  return (
    <>
      <TodoContext.Provider value={{ Todos, AddTodos }}>
        {children}
      </TodoContext.Provider>
    </>
  );
}

export default TodoContext;
