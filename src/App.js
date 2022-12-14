import React, { useEffect } from "react";
import ButtonNewTask from "./components/ButtonNewTask";
import DateCard from "./components/DateCard";
import Header from "./components/Header";
import ListCard from "./components/ListCard";
import { ModalProvider } from "./context/modalContext";
import { ThemeProvider } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-primary", "text-white");
  }, []);
  return (
    <>
      <ThemeProvider>
        <TodoProvider>
          <ModalProvider>
            <Header />
            <div className="main  pt-10">
              <section className="mb-10">
                <DateCard />
              </section>
              <section className="h-full">
                <ListCard />
              </section>
              <ButtonNewTask />
            </div>
          </ModalProvider>
        </TodoProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
