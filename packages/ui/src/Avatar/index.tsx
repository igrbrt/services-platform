import {
	UseSizeProps,
	useSize,
} from "../../../../frontend/web/lib/hooks/useSize";

export type AvatarProps = {
	className?: string;
	square?: boolean;
	source?: string;
	alt?: string;
} & UseSizeProps;

export default function Avatar(props: AvatarProps) {
	const {
		alt = "avatar-image",
		source = "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png",
	} = props;
	const sizeStyle = useSize(props);
	const squareStyle = props.square ? "rounded-none" : "rounded-full";

	return (
		<img
			alt={alt}
			className={`relative align-middle inline-block ${squareStyle} ${props.className}`}
			src={source}
			style={sizeStyle}
		/>
		// <div
		//   className={`rounded-full`}
		//   style={sizeStyle}
		// >
		//   {props.children}
		// </div>
	);
}

//relative align-middle inline-block ${squareStyle} ${props.className}
