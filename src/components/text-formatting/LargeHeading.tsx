import { FC } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { manrope } from "@/styles/fonts";

const headingVariants = cva(
  "text-left lg:text-left font-medium leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: ["text-4xl", "md:text-5xl", "lg:text-6xl"],
        xs: ["text-2xl", "md:text-3xl", "lg:text-4xl"],
        sm: ["text-3xl", "md:text-4xl", "lg:text-5xl"],
        md: ["text-5xl", "md:text-6xl]", "lg:text-7xl"],
        lg: ["text-6xl", "md:text-7xl", "lg:text-8xl"],
        xl: ["text-7xl", "md:text-8xl", "lg:text-9xl"],
      },
      intent: {
        primary: [`${manrope.variable} font-heading`, "text-primary-500"],
        secondary: [],
      },
    },
    defaultVariants: {
      size: "default",
      intent: "primary",
    },
  },
);

interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading: FC<LargeHeadingProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  return (
    <h1 {...props} className={cn(headingVariants({ size, className }))}>
      {children}
    </h1>
  );
};

export default LargeHeading;
