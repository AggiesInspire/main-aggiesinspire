import type { AnimationProps } from "framer-motion";
import { Children, cloneElement, isValidElement } from "react";

import useMediaQuery from "@/hooks/useMediaQuery";

export function DisableAnimationOnMobile({
  children,
}: {
  children: any | any[];
  defaultAnimateVariant?: string;
}) {
  const notMobile = useMediaQuery("(min-width: 1060px)");

  if (notMobile) {
    return children;
  }

  const modifiedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const emptyAnimationProps = {
        animate: "default",
        initial: undefined,
        exit: undefined,
        transition: { duration: 0 },
        variants: { default: { opacity: 1, top: 0, bottom: 0 } },
      } as AnimationProps;

      return cloneElement(child, emptyAnimationProps);
    }
    return child;
  });
  return modifiedChildren;
}
