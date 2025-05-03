"use client";

import { portfolio } from "@/constants";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const CategoryButton = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center flex-wrap">
      <Button
        className={cn(
          "bg-custom-yellow text-center py-1 px-2 rounded text-background font-semibold truncate max-sm:w-full cursor-pointer hover:bg-custom-yellow hover:scale-[1.02]"
        )}
      >
        All Category
      </Button>
      {portfolio.map(({ categoryName }, index) => (
        <Button
          key={index}
          variant="ghost"
          className={cn(
            "text-center py-1 px-2 rounded font-semibold max-sm:w-full cursor-pointer  hover:scale-[1.02] duration-200"
          )}
        >
          {categoryName}
        </Button>
      ))}
    </div>
  );
};

export default CategoryButton;
