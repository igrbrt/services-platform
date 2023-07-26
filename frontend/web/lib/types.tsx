interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

interface Color {
  bg: string;
  bgAlfa: string;
  hoverBg: string;
  border: string;
  fill: string;
  fillHover: string;
  text: string;
  focus: string;
}

interface FeedbackColorMap {
  primary: Color;
  danger: Color;
  positive: Color;
  neutral: Color;
  black: Color;
  white: Color;
  blue: Color;
  orange: Color;
}

type fonts = "default" | "inter" | "rajdhani";

const fontClassName: { [key in fonts]: string } = {
  inter: "font-inter",
  rajdhani: "font-rajdhani",
  default: "",
};

const commonColor: FeedbackColorMap = {
  primary: {
    bg: "bg-primary",
    bgAlfa: "bg-primary/20",
    border: "bg-primary",
    hoverBg: "hover:bg-primary/30",
    fill: "fill-primary",
    fillHover: "fill-primary/30",
    text: "text-primary",
    focus: "focus:ring ring-primary",
  },

  neutral: {
    bg: "bg-gray-700",
    bgAlfa: "bg-gray-700/20",
    border: "bg-gray-700",
    hoverBg: "hover:bg-gray-700/30",
    fill: "fill-gray-700",
    fillHover: "fill-gray-700/30",
    text: "text-gray-700",
    focus: "focus:ring ring-gray-700",
  },

  danger: {
    bg: "bg-red-700",
    bgAlfa: "bg-red-700/20",
    border: "border-red-700",
    hoverBg: "hover:bg-red-700/30",
    fill: "fill-red-700",
    fillHover: "fill-red-700/30",
    text: "text-red-700",
    focus: "focus:ring ring-red-700",
  },

  positive: {
    bg: "bg-green-600",
    bgAlfa: "bg-green-600/20",
    border: "border-green-600",
    hoverBg: "hover:bg-green-600/30",
    fill: "fill-green-600",
    fillHover: "fill-green-600/30",
    text: "text-green-600",
    focus: "focus:ring ring-green-600",
  },

  blue: {
    bg: "bg-blue-600",
    bgAlfa: "bg-blue-600/20",
    border: "border-blue-600",
    hoverBg: "hover:bg-blue-600/30",
    fill: "fill-blue-600",
    fillHover: "fill-blue-600/30",
    text: "text-blue-600",
    focus: "focus:ring ring-blue-600",
  },

  orange: {
    bg: "bg-orange-600",
    bgAlfa: "bg-orange-600/20",
    border: "border-orange-600",
    hoverBg: "hover:bg-orange-600/30",
    fill: "fill-orange-600",
    fillHover: "fill-orange-600/30",
    text: "text-orange-600",
    focus: "focus:ring ring-orange-600",
  },

  black: {
    bg: "bg-black",
    bgAlfa: "bg-black-600/20",
    border: "border-black",
    hoverBg: "hover:bg-black/30",
    fill: "fill-black",
    fillHover: "fill-black/30",
    text: "text-black",
    focus: "focus:ring ring-black",
  },

  white: {
    bg: "bg-white",
    bgAlfa: "bg-white/20",
    border: "border-white",
    hoverBg: "hover:bg-white/30",
    fill: "fill-white",
    fillHover: "fill-white/30",
    text: "text-white",
    focus: "focus:ring ring-white",
  },
};

type HeadingLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type { Size, HeadingLevel };
export { commonColor, fontClassName };
