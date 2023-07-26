import { T as TextProps, c as commonColor } from '../index-5016c3b7.js';
import 'react';

interface BadgeProps {
    children: TextProps["children"];
    bgColor?: keyof typeof commonColor;
    textColor?: TextProps["color"];
    fontSize?: TextProps["fontSize"];
}
declare function Badge({ children, fontSize, bgColor, textColor, }: BadgeProps): JSX.Element;

export { Badge as default };
