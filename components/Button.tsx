import * as React from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
    size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

        const variants = {
            primary: "bg-primary text-primary-foreground hover:bg-primary-600 shadow-sm",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-600 shadow-sm",
            outline: "border-2 border-border bg-transparent hover:bg-muted text-foreground",
            ghost: "bg-transparent hover:bg-muted text-foreground",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive-600 shadow-sm",
        };

        const sizes = {
            sm: "h-9 px-3 text-xs",
            md: "h-10 px-4 py-2 text-sm",
            lg: "h-12 px-8 text-base",
            icon: "h-10 w-10",
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
