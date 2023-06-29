import React from "react";

import { useRef } from "react";
import { useInView } from "framer-motion";

const InViewEffect = ({ children }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return <section ref={ref}>{isInView ? children : ""}</section>;
};

export default InViewEffect;
