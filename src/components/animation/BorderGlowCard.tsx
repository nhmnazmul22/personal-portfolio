"use client";

import { frame, motion, useMotionValue, Variants } from "framer-motion";
import { JSX, MouseEvent, useCallback, useRef, useState } from "react";

type FeatureCardProps = {
  classes?: string;
  children: JSX.Element;
};

const staggerContainer: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const BorderGlowCard = ({ classes, children }: FeatureCardProps) => {
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [showGlow, setShowGlow] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      frame.read(() => {
        x.set(event.clientX - Number(rect?.left));
        y.set(event.clientY - Number(rect?.top));
      });
    },
    [x, y]
  );

  return (
    <motion.div
      variants={staggerContainer}
      initial="start"
      whileInView="end"
      viewport={{ once: true }}
      className={`relative overflow-hidden p-[1px] rounded-[13px] h-fit ${classes}`}
    >
      <div
        className="relative isolate bg-card backdrop-blur-md rounded-xl overflow-hidden"
        ref={cardRef}
        onMouseOver={() => setShowGlow(true)}
        onMouseOut={() => setShowGlow(false)}
        onMouseMove={handleMouseMove}
      >
        {children}
      </div>

      {/* Border effects */}
      <motion.div
        className="absolute -top-[150px] -left[150px] rounded-full -z-10 w-[300px] h-[300px] bg-foreground blur-[50px]"
        ref={glowRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: Number(showGlow) }}
        style={{ x, y }}
      ></motion.div>
    </motion.div>
  );
};

export default BorderGlowCard;
