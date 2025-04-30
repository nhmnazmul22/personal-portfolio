"use client";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

type toggleThemeType = {
  classNames: string;
};

const ToggleTheme: React.FC<toggleThemeType> = ({ classNames }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={cn(classNames)}>
      <span
        className="bg-custom-yellow flex items-center justify-center rounded-full cursor-pointer  w-8 h-8 sm:w-10 sm:h-10"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <Moon className="dark:stroke-black w-[16px] sm:w-[24px]" />
        ) : (
          <Sun className="dark:stroke-black w-[16px] sm:w-[24px]" />
        )}
      </span>
    </div>
  );
};

export default ToggleTheme;
