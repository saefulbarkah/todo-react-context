import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Button from "./Button";
import DateNow from "./DateNow";
import Modal from "./Modal";
import NewTask from "./NewTask";

const ButtonNewTask = ({ show }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="fixed bottom-10 flex justify-center w-full z-50">
        <Button
          addClassName="bg-button py-5 rounded-xl drop-shadow-xl text-lg"
          isClicked={() => openModal()}
        >
          <div className="flex items-center gap-8 px-5">
            <span>New Task</span>
            <BsPlusLg className="" />
          </div>
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Add New Task"}
        bodyModal={<NewTask />}
        button="Save"
        buttonClose="Close"
        date={<DateNow />}
      />
    </>
  );
};

export default ButtonNewTask;
