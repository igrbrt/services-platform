import { InputHTMLAttributes, ReactNode, useState } from "react";
import { EyeCloseIcon, EyeOpenIcon } from "../Icons";
import { InputError, InputErrorProps } from "./InputError";

export interface TextInputProps extends InputErrorProps {
  label?: ReactNode;
  id: string;
  inputProps?: Omit<InputHTMLAttributes<HTMLInputElement>, "id">;
  isBordered?: boolean;
  isShowRevealPasswordButton?: boolean;
  inputContainerProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
  className?: string;
}

export const TextInput = ({
  label,
  id,
  inputProps,
  inputContainerProps,
  isBordered = true,
  isShowRevealPasswordButton = true,
  className = "",
  error,
  darkColor,
}: TextInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  return (
    <div
      className={`ui-flex ui-w-full ui-flex-col ui-text-sm ui-font-medium ${className}`}
    >
      {label && (
        <label
          htmlFor={`${id}__input`}
          className="ui-mb-1 ui-text-sm ui-font-normal"
        >
          {label}
        </label>
      )}
      <div
        className={`ui-flex ui-gap-x-2 ui-rounded-md ui-py-[10px] ui-px-4 ${
          inputProps?.disabled ? "ui-bg-[#EEEFF3]" : "ui-bg-white"
        } ${
          isBordered
            ? "ui-border-[0.063rem] ui-border-[#E6E6E6]"
            : "ui-border-none"
        }`}
        {...inputContainerProps}
      >
        <input
          id={`${id}__input`}
          className="ui-w-full ui-border-none ui-border-transparent ui-p-0 ui-text-base ui-font-light ui-leading-6 ui-text-black ui-outline-none focus:ui-border-transparent focus:ui-ring-0 disabled:ui-bg-[#EEEFF3]"
          {...inputProps}
          type={isShowPassword ? "text" : inputProps?.type ?? "text"}
        />
        {inputProps?.type === "password" && isShowRevealPasswordButton && (
          <button
            type="button"
            onClick={() => setIsShowPassword((previousState) => !previousState)}
          >
            {isShowPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
          </button>
        )}
      </div>
      <InputError error={error} darkColor={darkColor} />
    </div>
  );
};
