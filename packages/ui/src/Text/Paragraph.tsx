import React from "react";

import {
	type Size,
	commonColor,
	fontClassName,
} from "../../../../frontend/web/lib/types";

import type { TextProps } from "./index";

const fontClass: Size = {
	xs: "text-xs",
	sm: "text-sm leading-5",
	md: "text-base",
	lg: "text-lg",
	xl: "text-xl",
	xxl: "text-2xl",
};

export default function Paragraph({
	children,
	fontSize = "sm",
	color = "black",
	fontFamily = "default",
	fontWeight,
}: TextProps) {
	const className = `${fontClass[fontSize]} ${commonColor[color].text} ${fontClassName[fontFamily]}`;
	return (
		<p
			className={className}
			style={{
				fontWeight,
			}}
		>
			{" "}
			{children}{" "}
		</p>
	);
}
