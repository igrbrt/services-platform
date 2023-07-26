import React, { ButtonHTMLAttributes, type ReactNode } from "react";

import { type Size, fontClassName } from "../../../../frontend/web/lib/types";
import { LoadingIcon } from "../Icons";

type Colors = "default" | "primary" | "secondary" | "transparent";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  loading?: boolean;
  className?: string;
}

const buttonWithOutline = "ui-outline ui-outline-1 ui-bg-transparent";

const buttonColors: { [key in Colors]: string } = {
  default: "ui-bg-white ui-hover:bg-primary ui-hover:text-white",
  primary: "ui-bg-[#003f5c] ui-hover:bg-[#003f5c]/95 ui-text-white",
  secondary: "ui-bg-[#fb5b5a] ui-hover:bg-[#fb5b5a]/95 ui-text-white",
  transparent: "",
};

const buttonSizes: Size = {
  lg: "ui-px-7 ui-h-12",
  md: "ui-px-4 ui-py-2",
  sm: "ui-p-2",
  xl: "ui-w-40 ui-h-12 ui-flex ui-items-center ui-justify-center",
  xs: "",
  xxl: "",
};

export const Button = ({
  children,
  variant = "primary",
  className = "",
  loading,
  ...rest
}: ButtonProps) => {
  const classVariants = {
    primary: `${buttonColors.primary} ui-bg-primary ui-text-white`,
    secondary: `${buttonColors.secondary} ${buttonWithOutline} ui-outline-primary ui-text-primary`,
    tertiary: `${buttonWithOutline} ui-outline-white ui-text-white`,
  };
  return (
    <button
      {...rest}
      className={`ui-w-full ui-rounded-md ui-py-3 ui-text-base ui-leading-5 disabled:ui-cursor-not-allowed disabled:ui-bg-[#A7A8AD] ${
        classVariants[variant]
      } ${className} ${loading && "ui-pointer-events-none"}`}
    >
      {loading ? <LoadingIcon /> : children}
    </button>
  );
};
