import { useContext, useState } from "react";
import { Switch } from "@headlessui/react";
import { MdNightlight, MdWbSunny } from "react-icons/md";
import ThemeContext from "../context/ThemeContext";
export default function Toggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <Switch
        checked={theme}
        onChange={setTheme}
        className={`${theme ? "bg-gray-200" : "bg-slate-700"}
          relative flex items-center h-[38px] w-[88px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 gap-2`}
      >
        <MdWbSunny
          className={`text-xl absolute left-2 ${
            theme ? " text-slate-800" : " text-transparent"
          }`}
        />
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${
            theme ? "translate-x-12 bg-slate-800" : "translate-x-0 bg-white"
          }
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out relative`}
        />
        <MdNightlight
          className={`text-xl absolute right-2 ${
            theme ? "text-transparent" : "text-white"
          }`}
        />
      </Switch>
    </>
  );
}
