import { FC } from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva(
  "text-gray-500 text-left lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
        xl: "text-7xl md:text-8xl lg:text-9xl",
        xs: "text-xs",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
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
