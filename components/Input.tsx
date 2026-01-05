import { cn } from "@/lib/utils";
import * as Form from "@radix-ui/react-form";
import * as React from "react";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-11 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all mt-1",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

// Radix UI Form components for advanced form handling
const FormField = Form.Field;
const FormLabel = Form.Label;
const FormControl = Form.Control;
const FormMessage = Form.Message;
const FormSubmit = Form.Submit;
const FormRoot = Form.Root;

export {
   FormControl, FormField,
   FormLabel, FormMessage, FormRoot, FormSubmit, Input
};

