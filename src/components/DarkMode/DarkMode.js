import React from "react";
import "../DarkMode/DarkMode.css";

const DarkMode = () => {
  let clickedClass = "cliked";
  const body = document.body;
  const ligthTheme = "ligth";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === ligthTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(ligthTheme);
  }

  const swichTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, ligthTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "ligth");
      theme = ligthTheme;
    } else {
      body.classList.replace(ligthTheme, darkTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => swichTheme}
    ></button>
  );
};

export default DarkMode;
