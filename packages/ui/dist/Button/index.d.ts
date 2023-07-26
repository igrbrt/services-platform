import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "tertiary";
    loading?: boolean;
    className?: string;
}
declare const Button: ({ children, variant, className, loading, ...rest }: ButtonProps) => JSX.Element;

export { Button, ButtonProps };
