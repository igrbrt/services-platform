import React from "react";

import {
	type Size,
	commonColor,
	fontClassName,
} from "../../../../frontend/web/lib/types";

import { type TextProps } from ".";

const fontSizeClass: Size = {
	xs: "text-[11px]",
	sm: "text-sm",
	md: "text-md",
	lg: "text-lg",
	xl: "text-xl",
	xxl: "text-2xl",
};

export default function Subtitle({
	children,
	fontSize = "sm",
	color = "black",
	fontFamily = "default",
	fontWeight,
}: TextProps) {
	const subClassName = `${commonColor[color].text} ${fontSizeClass[fontSize]} ${fontClassName[fontFamily]}`;
	return (
		<p
			className={subClassName}
			style={{
				fontWeight,
			}}
		>
			{children}
		</p>
	);
}
