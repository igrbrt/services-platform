export interface InputErrorProps {
  error?: string;
  darkColor?: boolean;
}
export const InputError = ({ error, darkColor = false }: InputErrorProps) => {
  return (
    <p
      className={`ui-mt-1 ui-w-full ui-text-left ui-text-sm ui-font-medium empty:ui-opacity-0 empty:after:ui-content-['a'] ${
        darkColor ? "ui-text-[#610000]" : "ui-text-[#CF1E1E]"
      }`}
    >
      {error}
    </p>
  );
};
