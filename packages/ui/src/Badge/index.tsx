import React from "react";

import { commonColor } from "../../../../frontend/web/lib/types";
import Text, { TextProps } from "../Text";

interface BadgeProps {
	children: TextProps["children"];
	bgColor?: keyof typeof commonColor;
	textColor?: TextProps["color"];
	fontSize?: TextProps["fontSize"];
}

const badgeColors: typeof commonColor = {
	...commonColor,
	neutral: {
		bg: "bg-gray-300",
		bgAlfa: "",
		border: "",
		fill: "",
		fillHover: "",
		focus: "",
		hoverBg: "",
		text: "",
	},
};

export default function Badge({
	children,
	fontSize = "sm",
	bgColor = "neutral",
	textColor = "black",
}: BadgeProps) {
	const badgeClass = `${badgeColors[bgColor].bg} p-1 w-fit`;

	return (
		<div className={badgeClass}>
			<Text color={textColor} fontSize={fontSize} type="label">
				{children}
			</Text>
		</div>
	);
}
