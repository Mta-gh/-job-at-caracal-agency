import React, { useState, useEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";

const AnimatedSection = ({ progress, children }) => {
  const y = useTransform(progress, [0, 1], [-50, 0]);

  return (
    <motion.div
      className="section"
      style={{ y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};
