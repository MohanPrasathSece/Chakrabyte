import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 relative overflow-hidden group active:scale-95 md:active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 active:scale-100 md:active:scale-95 before:absolute before:inset-0 before:bg-white/0 before:transition-all before:duration-300 hover:before:bg-white/10",
        destructive: "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 active:scale-100 md:active:scale-95 before:absolute before:inset-0 before:bg-white/0 before:transition-all before:duration-300 hover:before:bg-white/10",
        outline: "border-2 border-purple-600/30 bg-background text-purple-700 hover:bg-purple-600/5 hover:border-purple-600/50 hover:text-purple-800 hover:shadow-md hover:shadow-purple-500/20 hover:scale-105 active:scale-100 md:active:scale-95",
        secondary: "bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-700 hover:to-slate-800 hover:shadow-md hover:shadow-slate-500/20 hover:scale-105 active:scale-100 md:active:scale-95",
        ghost: "hover:bg-purple-600/10 hover:text-purple-700 hover:shadow-sm hover:shadow-purple-500/10 hover:scale-105 active:scale-100 md:active:scale-95 rounded-lg",
        link: "text-purple-600 underline-offset-4 hover:underline hover:text-purple-700 decoration-2 hover:decoration-purple-600/60",
      },
      size: {
        default: "h-14 px-6 py-3.5 text-base md:h-12 md:px-5 md:py-3 md:text-sm",
        sm: "h-12 rounded-xl px-5 text-base md:h-11 md:rounded-lg md:px-4 md:text-sm",
        lg: "h-16 rounded-xl px-8 text-lg md:h-14 md:rounded-lg md:px-6 md:text-base",
        icon: "h-12 w-12 md:h-11 md:w-11",
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
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
