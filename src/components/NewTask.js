import { useFormik } from "formik";
import React, { useContext } from "react";
import modalContext from "../context/modalContext";
import TodoContext from "../context/TodoContext";
import Button from "./Button";
import DateNow from "./DateNow";

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }

  if (!values.time) {
    errors.time = "Required";
  }
  return errors;
};

const NewTask = () => {
  const { setOpen, closeModal } = useContext(modalContext);
  const { AddTodos } = useContext(TodoContext);

  const formik = useFormik({
    initialValues: {
      title: "",
      time: "",
    },
    validate,
    onSubmit: (values) => {
      setOpen(false);
      AddTodos(values.title, values.time);
      console.log(values.title, values.time);
    },
  });

  // const HandleAddTodo = (e) => {
  //   e.preventDefault();
  //   const form = new FormData(e.target);
  //   const title = form.get("title");
  //   const time = form.get("time");

  // };
  return (
    <>
      <div className="flex justify-center">
        <DateNow></DateNow>
      </div>
      <form className="mt-4" onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="form-grup flex flex-col">
            <label htmlFor="" className="py-2">
              Title
            </label>
            <input
              type="text"
              className={`py-2 px-5 rounded-lg border-2 bg-white border-primary/30 transition duration-300 dark:bg-slate-800 outline-primary/30 focus:outline-primary  outline-none focus:outline-4 outline-offset-1 dark:text-slate-200 w-full ${
                formik.errors.title ? "border-red/50 outline-red text-red" : ""
              }`}
              placeholder="Insert Your Task"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.errors.title ? (
              <div className="text-red py-2">{formik.errors.title}</div>
            ) : null}
          </div>
          <div className="form-grup flex flex-col">
            <label htmlFor="" className="py-2">
              Time
            </label>
            <input
              type="time"
              className={`py-2 px-5 rounded-lg border-2 bg-white border-primary/30 transition duration-300 dark:bg-slate-800 outline-primary/30 focus:outline-primary  outline-none focus:outline-4 outline-offset-1 dark:text-slate-200 w-full ${
                formik.errors.time ? "border-red/50 outline-red text-red" : ""
              }`}
              name="time"
              onChange={formik.handleChange}
              value={formik.values.time}
            />
            {formik.errors.time ? (
              <div className="text-red py-2">{formik.errors.time}</div>
            ) : null}
          </div>
        </div>
        <div className="mt-10 flex justify-center items-center gap-10 text-white">
          <Button
            addClassName="bg-red dark:bg-red/30 dark:border dark:border-red py-3 px-4 rounded-lg"
            isClicked={() => closeModal()}
            isType="button"
          >
            Close
          </Button>
          <Button
            addClassName="bg-button/80 py-3 px-4 rounded-lg dark:bg-button/30 dark:border dark:border-button"
            isClicked={console.log("SAVE")}
            isType="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </>
  );
};

export default NewTask;
