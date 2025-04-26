"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="">
      <span
        className="bg-custom-yellow flex items-center justify-center w-10 h-10 rounded-full cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <Moon size={24} className="dark:stroke-black" />
        ) : (
          <Sun size={24} className="dark:stroke-black" />
        )}
      </span>
    </div>
  );
};

export default ToggleTheme;
