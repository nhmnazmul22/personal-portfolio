"use client";

import { motion, Transition } from "framer-motion";

const transitionConfig: Transition = {
  repeat: Infinity,
  repeatType: "reverse",
  duration: 0.7,
  ease: "linear",
};

const rotateTransitionConfig: Transition = {
  repeat: Infinity,
  repeatType: "loop",
  duration: 1.5,
  ease: "linear",
};

const SvgAnimationIcons = () => {
  return (
    <div className="svg-icon z-[1] opacity-75">
      <motion.img
        initial={{ x: 0 }}
        animate={{ x: 20 }}
        transition={transitionConfig}
        src="/Ellipse-1.svg"
        width={20}
        height={20}
        alt="Ellipse"
        className="absolute top-[-30px] left-[10%]"
      ></motion.img>

      <motion.img
        initial={{ y: 0 }}
        animate={{ y: -20 }}
        transition={transitionConfig}
        src="/Ellipse-2.svg"
        width={20}
        height={20}
        alt="Ellipse"
        className="hidden lg:block absolute top-[20px] lg:right-[10%]"
      ></motion.img>
      <motion.img
        animate={{ rotate: 360 }}
        transition={rotateTransitionConfig}
        src="/Polygon.svg"
        width={20}
        height={20}
        alt="Ellipse"
        className="absolute bottom-[50px] rotate-45 right-[40%]"
      ></motion.img>
      <motion.img
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={transitionConfig}
        src="/Ellipse-2.svg"
        width={20}
        height={20}
        alt="Ellipse"
        className="absolute bottom-[-40px] left-[20%]"
      ></motion.img>
      <motion.img
        animate={{ rotate: 360 }}
        transition={rotateTransitionConfig}
        src="/Rectangle-1.svg"
        width={20}
        height={20}
        alt="Ellipse"
        className="absolute bottom-0 right-[60px]"
      ></motion.img>
      <motion.img
        animate={{ rotate: 360 }}
        transition={rotateTransitionConfig}
        src="/Rectangle-2.svg"
        width={20}
        height={20}
        alt="Ellipse"
        className="absolute top-[-40px] right-[20%]"
      ></motion.img>
    </div>
  );
};

export default SvgAnimationIcons;
