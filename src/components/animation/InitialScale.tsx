"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type InitialScalePropsType = {
  children: React.ReactNode;
  className?: string;
};

const InitialScale: React.FC<InitialScalePropsType> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 40 }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default InitialScale;
