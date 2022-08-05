import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Button from "./Button";

export default function Modal({
  isOpen,
  closeModal,
  title,
  bodyModal,
  button,
  buttonClose,
  date,
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl text-center font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-3 text-gray-900 flex justify-center text-sm">
                    {date}
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{bodyModal}</p>
                  </div>

                  <div className="mt-10 flex justify-center items-center gap-10">
                    <Button
                      addClassName="bg-red py-3 px-4 rounded-lg"
                      isClicked={closeModal}
                    >
                      {buttonClose}
                    </Button>
                    <Button
                      addClassName="bg-button/80 py-3 px-4 rounded-lg"
                      isClicked={console.log("SAVE")}
                    >
                      {button}
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
