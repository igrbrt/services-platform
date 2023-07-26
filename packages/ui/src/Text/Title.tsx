import { fontClassName } from "../../../../frontend/web/lib/types";

import { type HeadlineMap, type TextProps } from ".";

const headlineSize: HeadlineMap = {
	h1: "text-4xl",
	h2: "text-xl",
	h3: "text-lg",
	h4: "text-base",
	h5: "text-sm",
};

function Title({
	headline = "h1",
	children,
	fontFamily = "default",
	fontWeight,
}: TextProps) {
	return (
		<span
			className={`${headlineSize[headline]} font-bold ${fontClassName[fontFamily]}`}
			style={{
				fontWeight,
			}}
		>
			{children}
		</span>
	);
}

export default Title;
