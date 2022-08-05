import React from "react";

const NewTask = () => {
  return (
    <>
      <form>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="form-grup flex flex-col">
            <label htmlFor="" className="py-2">
              Title
            </label>
            <input
              type="text"
              className="py-2 px-5 rounded-lg border-2 border-primary/50 transition duration-300 outline-primary focus:outline-4 outline-offset-1"
            />
          </div>
          <div className="form-grup flex flex-col">
            <label htmlFor="" className="py-2">
              Time
            </label>
            <input
              type="time"
              className="py-2 px-5 rounded-lg border-2 border-primary/50 transition duration-300 outline-primary focus:outline-4 outline-offset-1"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default NewTask;
