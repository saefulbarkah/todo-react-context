import React, { useEffect } from "react";
import Button from "./components/Button";
import DateCard from "./components/DateCard";
import Header from "./components/Header";
import ListCard from "./components/ListCard";
import { BsPlusSquareFill } from "react-icons/bs";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-primary", "text-white");
  }, []);
  return (
    <>
      <Header />
      <div className="main overflow-x-hidden pt-10">
        <section className="mb-10">
          <DateCard />
        </section>
        <section className="">
          <ListCard />
        </section>
        <div className="fixed bottom-10 flex justify-center w-full z-50">
          <Button addClassName="bg-button py-5 rounded-xl shadow-lg text-lg">
            <div className="flex items-center gap-8 px-10">
              <span>New Task</span>
              <BsPlusSquareFill className="animate-bounce" />
            </div>
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
