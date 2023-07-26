declare const sizes: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
};
type UseSizeProps = {
    size: keyof typeof sizes;
};

type AvatarProps = {
    className?: string;
    square?: boolean;
    source?: string;
    alt?: string;
} & UseSizeProps;
declare function Avatar(props: AvatarProps): JSX.Element;

export { AvatarProps, Avatar as default };
