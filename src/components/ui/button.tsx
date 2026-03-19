import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background";
    
    const variantClasses = {
      default: "bg-accent-primary text-background-primary hover:bg-accent-hover hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-primary/20",
      outline: "border border-border-soft bg-surface-card/70 text-text-primary hover:border-accent-primary/35 hover:bg-surface-pink",
      ghost: "text-text-secondary hover:bg-surface-pink hover:text-text-primary"
    };
    
    const sizeClasses = {
      default: "h-11 px-5 py-2",
      sm: "h-10 px-4",
      lg: "h-12 px-8",
      icon: "h-11 w-11"
    };

    return (
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };