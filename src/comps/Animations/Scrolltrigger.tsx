import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const AnimatedElement = ({ scrollY }: { scrollY: number }) => {
  const y = useMotionValue(0);
  y.set(scrollY);
  const opacity = useTransform(y, [-100, 0, 100], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      className="element"
    > <p>Hello</p>
      {"Animated Content"}
    </motion.div>
  );
};

const StaggeredAnimationOnScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {"Your other components"}
      {/* <AnimatedElement scrollY={scrollY} /> */}
      {/* <AnimatedElement scrollY={scrollY * 2} /> */}
      {/* <AnimatedElement scrollY={scrollY * 3} /> */}
    </>
  );
};

export default StaggeredAnimationOnScroll;
