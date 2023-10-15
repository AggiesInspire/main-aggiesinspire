import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

/* Template from joschan21/similarity-api on Github */

const focused = `focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50  disabled:pointer-events-none focus:ring-offset-primary-500`;

const buttonVariants = cva(
  "active:scale-95 inline-flex rounded-md font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-primary-300 text-white text-gray-500 hover:bg-primary-500 border-2 border-primary-500",
        destructive:
          "text-primary-500 text-lg font-bold hover:font-black rounded-none border:border-x-0:border-t-0 hover:border-b-2 hover:border-gray-50",
        outline:
          "rounded-none border:border-x-0:border-b-0 border-t-2 bg-gray-20 text-gray-500 hover:text-primary-300 border-primary-500",
        subtle: "hover:bg-slate-200 dark:bg-slate-700 dark:text-gray-500",
        ghost:
          "text-gray-500 text-lg hover:text-primary-500 border border-transparent hover:border-primary-500",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-100 hover:bg-transparent",
        background: [
          "px-5 py-2",
          "bg-primary-500",
          "rounded-none",
          "text-white",
          "hover:bg-primary-400",
          "hover:text-primary-500",
        ],
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
        outlineLg: "h-8 rounded-md w-60",
        outlineSm: "h-8 rounded-md w-36",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
