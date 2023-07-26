import React from "react";

import {
	type Size,
	commonColor,
	fontClassName,
} from "../../../../frontend/web/lib/types";

import type { TextProps } from "./index";

const lableSize: Size = {
	xs: "text-xs font-medium",
	sm: "text-sm font-medium",
	md: "text-md",
	lg: "text-lg",
	xl: "text-xl",
	xxl: "text-2xl",
};

export default function Label({
	children,
	fontSize = "sm",
	color = "black",
	fontFamily = "default",
	fontWeight,
}: TextProps): JSX.Element {
	return (
		<span
			className={`${lableSize[fontSize]} ${commonColor[color].text} ${fontClassName[fontFamily]}`}
			style={{
				fontWeight,
			}}
		>
			{children}
		</span>
	);
}
