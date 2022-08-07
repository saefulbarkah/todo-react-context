import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("themes")
      ? JSON.parse(localStorage.getItem("themes"))
      : false
  );
  localStorage.setItem("themes", JSON.stringify(theme));
  useEffect(() => {
    theme
      ? document.body.classList.add("dark", "bg-blue-700")
      : document.body.classList.remove("dark", "bg-blue-700");
  });
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}

export default ThemeContext;
