import { ReactNode } from "react";
import { CloseIcon } from "../Icons";

type Variants = "error" | "info";

export interface NotificationCardProps {
  variant?: Variants;
  title?: string;
  description?: ReactNode;
  isClosable?: boolean;
  onClose?: () => void;
}

const classByVariant: {
  [key in Variants]: string;
} = {
  error: "ui-border-[#CF1E1E1A] ui-bg-[#CF1E1E0D] ui-text-[#CF1E1E]",
  info: "ui-border-[#2F80ED1A] ui-bg-[#2F80ED0D] ui-text-primary",
};

export const NotificationCard = ({
  title,
  variant = "info",
  description,
  isClosable = true,
  onClose,
}: NotificationCardProps) => {
  const hasHeader = title || isClosable;
  return (
    <div
      className={`ui-w-full ui-rounded-2xl ui-border ui-p-4 ui-pl-6 ui-flex ui-flex-col ui-gap-y-4 ${classByVariant[variant]}`}
    >
      {hasHeader && (
        <div className="ui-flex ui-w-full ui-justify-between">
          {title && (
            <h6 className="ui-text-base ui-font-medium">{title}</h6>
          )}
          {isClosable && (
            <button onClick={onClose}>
              <CloseIcon />
            </button>
          )}
        </div>
      )}
      {description && (
        <div className="ui-w-full ui-text-base ui-font-light">
          {description}
        </div>
      )}
    </div>
  );
};
