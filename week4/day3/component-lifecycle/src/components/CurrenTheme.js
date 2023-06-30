import React, { useState } from "react";

const CurrenTheme = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [toggle, setToggle] = useState(true);
  const onToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    setToggle((prev) => !prev);
  };
  return (
    <div className={toggle ? "light" : "dark"}>
      {children}
      <div>
        <p>Current Theme: {theme}</p>
        <button onClick={onToggle}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default CurrenTheme;
