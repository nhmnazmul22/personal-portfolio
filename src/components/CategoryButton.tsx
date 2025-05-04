"use client";

import { portfolio } from "@/constants";
import { usePortfolioContext } from "@/context/PortfolioContext";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const CategoryButton = () => {
  const { category, setCategory } = usePortfolioContext();

  const handleCategory = (categoryName: string) => {
    return setCategory(categoryName);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center flex-wrap">
      <Button
        variant="ghost"
        className={cn(
          "text-center py-1 px-2 rounded font-semibold max-sm:w-full cursor-pointer  hover:scale-[1.02] duration-200",
          category === "All Project" &&
            "bg-custom-yellow !text-background hover:!bg-custom-yellow"
        )}
        onClick={() => handleCategory("All Project")}
      >
        All Project
      </Button>
      {portfolio.map(({ categoryName }, index) => (
        <Button
          key={index}
          variant="ghost"
          className={cn(
            "text-center py-1 px-2 rounded font-semibold max-sm:w-full cursor-pointer  hover:scale-[1.02] duration-200",
            category === categoryName &&
              "bg-custom-yellow !text-background hover:!bg-custom-yellow"
          )}
          onClick={() => handleCategory(categoryName)}
        >
          {categoryName}
        </Button>
      ))}
    </div>
  );
};

export default CategoryButton;
