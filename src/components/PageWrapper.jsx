"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

export const PageWrapper = ({ children }) => {
  const path = usePathname();
  const wrapperVariants = {
    initial: {
      opacity: 0,
      clipPath: "polygon(100% 0, 100% 0%, 100% 0%, 100% 61%)",
    },
    animate: {
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 100%)",
    },
    // Exit does not work at the moment
    // exit: {
    //   clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%)",
    // },
  };
  return (
    <>
      <AnimatePresence>
        <motion.div
          key={path}
          initial="initial"
          animate="animate"
          exit="exit"
          mode="wait"
          transition={{
            delay: 0.25,
            duration: 0.75,
          }}
          variants={wrapperVariants}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
