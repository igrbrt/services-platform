import { ReactNode, InputHTMLAttributes } from 'react';
import { InputErrorProps } from './InputError.js';

interface TextInputProps extends InputErrorProps {
    label?: ReactNode;
    id: string;
    inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "id">;
    isBordered?: boolean;
    isShowRevealPasswordButton?: boolean;
    inputContainerProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
    className?: string;
}
declare const TextInput: ({ label, id, inputProps, inputContainerProps, isBordered, isShowRevealPasswordButton, className, error, darkColor, }: TextInputProps) => JSX.Element;

export { TextInput, TextInputProps };
