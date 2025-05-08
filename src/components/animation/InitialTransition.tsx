"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type InitialTransitionPropsType = {
  children: React.ReactNode;
  className?: string;
};

const InitialTransition: React.FC<InitialTransitionPropsType> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default InitialTransition;
