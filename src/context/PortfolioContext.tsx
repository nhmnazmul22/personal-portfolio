"use client";
import { createContext, useContext, useState } from "react";

// Define the type for context
type PortfolioContextType = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [category, setCategory] = useState("All Project");

  return (
    <PortfolioContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

// Custom hook to use context safely
const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error(
      "usePortfolioContext must be used within a PortfolioProvider"
    );
  }
  return context;
};

export { PortfolioProvider, usePortfolioContext };
