"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

// Since we haven't installed cva/slot, I will implement a simpler version first or install them.
// Wait, I missed installing class-variance-authority and @radix-ui/react-slot.
// I will stick to a simpler implementation for now to avoid side-tracking, or I can install them.
// Actually, for a "better UI", these utilities are very helpful. I will install them in the next step if I can't do it now.
// For now, let's just make a really nice Framer Motion button without complex CVA if I don't have it,
// BUT the user expects high quality. Let's just write the button with standard props for now and `cn`.

/*
  Re-thinking: CVA is great but I can do without it for this specific task to be faster.
  I'll build a robust Button that takes `variant` prop.
*/

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", asChild = false, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden";

    const variants = {
      primary:
        "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(234,179,8,0.4)]",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      glass: "glass text-foreground hover:bg-white/10 border border-white/10",
    };

    const sizes = {
      sm: "h-9 px-3 text-xs",
      md: "h-11 px-8 text-sm",
      lg: "h-14 px-8 text-base",
    };

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className,
    );
    const Component = motion.button;

    return (
      <Component
        ref={ref as any}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
