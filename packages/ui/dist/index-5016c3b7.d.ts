import React from 'react';

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
declare const fontClassName: {
    [key in fonts]: string;
};
declare const commonColor: FeedbackColorMap;

type TextVariantsTypes = "label" | "subtitle" | "title" | "paragraph";
type FontWeightTypes = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800";
interface HeadlineMap {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
}
interface TextProps {
    headline?: keyof HeadlineMap;
    children: React.ReactNode;
    fontSize?: keyof Size;
    color?: keyof typeof commonColor;
    fontFamily?: keyof typeof fontClassName;
    fontWeight?: FontWeightTypes;
}

declare function Text({ type, ...props }: TextProps & {
    type?: TextVariantsTypes;
}): JSX.Element;

export { HeadlineMap as H, TextProps as T, Text as a, commonColor as c };
