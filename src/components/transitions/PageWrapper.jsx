"use client";

import { LazyMotion, m, domAnimation, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { DisableAnimationOnMobile } from "../modify-children/DisableAnimationOnMobile";

export const PageWrapper = ({ children }) => {
  const path = usePathname();
  const wrapperVariants = {
    initial: {
      opacity: 0,
      clipPath: "polygon(0 0, 0 0%, 0 100%, 0% 100%)",
    },
    animate: {
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    exit: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%)",
    },
  };
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        <DisableAnimationOnMobile>
          <m.div
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
          </m.div>
        </DisableAnimationOnMobile>
      </AnimatePresence>
    </LazyMotion>
  );
};
