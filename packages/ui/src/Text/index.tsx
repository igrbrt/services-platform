import type React from "react";

import type { fontClassName } from "../../../../frontend/web/lib/types";
import {
	type Size,
	type commonColor,
} from "../../../../frontend/web/lib/types";
import Label from "./Label";
import Subtitle from "./Subtitle";
import Title from "./Title";
import Paragraph from "./Paragraph";

type TextVariantsTypes = "label" | "subtitle" | "title" | "paragraph";
type FontWeightTypes =
	| "100"
	| "200"
	| "300"
	| "400"
	| "500"
	| "600"
	| "700"
	| "800";

interface HeadlineMap {
	h1: string;
	h2: string;
	h3: string;
	h4: string;
	h5: string;
}

const textMap: {
	[key in TextVariantsTypes]: (props: TextProps) => JSX.Element;
} = {
	label: Label,
	subtitle: Subtitle,
	title: Title,
	paragraph: Paragraph,
};

interface TextProps {
	headline?: keyof HeadlineMap;
	children: React.ReactNode;
	fontSize?: keyof Size;
	color?: keyof typeof commonColor;
	fontFamily?: keyof typeof fontClassName;
	fontWeight?: FontWeightTypes;
}

export type { TextProps, HeadlineMap };

export default function Text({
	type = "title",
	...props
}: TextProps & { type?: TextVariantsTypes }): JSX.Element {
	return textMap[type](props);
}
