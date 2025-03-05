import { motion } from "framer-motion";
import React from 'react'

const pageVariants = {
    initial: { opacity: 0, filter:'blur(10px)'},
    animate: { opacity: 1,  transition: { duration: 0.4}, filter:'blur(0px)' },
    exit: { opacity: 0,  transition: { duration: 0.4 } }
  };

const PageWrapper = ({ children }) => {
  return (
    <motion.div 
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;

