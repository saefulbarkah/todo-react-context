import React, { useContext, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import ModalContext from "../context/ModalContext";
import Button from "./Button";
import Modal from "./Modal";
import NewTask from "./NewTask";

const ButtonNewTask = ({ show }) => {
  const { openModal } = useContext(ModalContext);
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
      <Modal title={"Add New Task"}>
        <NewTask />
      </Modal>
    </>
  );
};

export default ButtonNewTask;
