import { createContext, useState } from "react";

const modalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setOpen] = useState(false);
  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <modalContext.Provider value={{ isOpen, openModal, closeModal, setOpen }}>
      {children}
    </modalContext.Provider>
  );
}
export default modalContext;
