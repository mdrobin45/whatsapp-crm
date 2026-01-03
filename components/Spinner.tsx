import React from 'react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg';
}

const Spinner = ({ size = 'md', className, ...props }: SpinnerProps) => {
    const sizes = {
        sm: 'w-4 h-4 border-2',
        md: 'w-8 h-8 border-3',
        lg: 'w-12 h-12 border-4',
    };

    return (
        <div
            className={`animate-spin rounded-full border-primary/20 border-t-primary ${sizes[size]} ${className || ''}`}
            {...props}
        />
    );
};

export { Spinner };
