import React, { useEffect } from "react";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage.js";
import { detectTheme } from "../../utils/detectTheme.js";
import "./ButtonSwitch.css";
import sun from "../../image/icons/sun.svg";
import moon from "../../image/icons/moon.svg";

export default function ButtonSwitch() {
  //const [theme, setTheme] = useState("light");
  const [theme, setTheme] = useLocalStorage("theme", detectTheme());

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    // Если меняются системные настройки, меняем тему
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setTheme(newColorScheme);
      });
  }, []);

  function toggleTheme() {
    setTheme((current) => {
      return current === "light" ? "dark" : "light";
    });
  }

  return (
    <button
      className={
        theme === "dark"
          ? "dark-mode-btn dark-mode-btn--active"
          : "dark-mode-btn"
      }
      onClick={toggleTheme}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
