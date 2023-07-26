export const sizes = {
  xxs: "1rem", // 16px
  xs: "1.5rem", // 24px
  sm: "2rem", // 32px
  md: "3rem", // 48px
  lg: "4rem", // 64px
  xl: "5rem", // 80px
  "2xl": "7rem", // 112px
  "3xl": "9rem", // 144px
};

export type UseSizeProps = {
  size: keyof typeof sizes;
};

export const useSize = ({ size = "md" }: UseSizeProps) => {
  return {
    width: `${sizes[size]}`,
    height: `${sizes[size]}`,
  };
};
