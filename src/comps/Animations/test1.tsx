// import { motion } from 'framer-motion'

// const AnimatedBox = () => (
//   <motion.div 
//     initial={{ x: -100 }} 
//     animate={{ x: 0 }} 
//     transition={{ duration: 1 }}
//   >
//     <h1>Hello World</h1>
//   </motion.div>
// )

// export default AnimatedBox

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const StaggeredAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3,
      },
      });
    }
  }, [isVisible, controls]);

  return (
    <motion.ul initial={{ opacity: 0, x: -100 }} animate={controls} className="">
      <motion.li variants={itemVariants}>Item 1</motion.li>
      <motion.li variants={itemVariants}>Item 2</motion.li>
      <motion.li variants={itemVariants}>Item 3</motion.li>
    </motion.ul>
  );
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default StaggeredAnimation;

