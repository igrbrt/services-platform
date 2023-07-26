// import React from "react";
// import { Meta, StoryObj } from "@storybook/react";

// import * as Icons from "ui/src/Icon/files";
// import Icon, { type IconType } from "ui/src/Icon";

// const meta: Meta<typeof Icon> = { component: Icon };
// export default meta;

// type Story = StoryObj<typeof Icon>;

// const getIconName = (icon: string): IconType => {
// 	const iconName = icon.replaceAll("Icon", "");

// 	return `${iconName.charAt(0).toLocaleLowerCase()}${iconName.slice(
// 		1
// 	)}` as IconType;
// };

// function MapIcons({ icons }: { icons: string[] }) {
// 	return (
// 		<>
// 			{icons.map((icon) => (
// 				<div
// 					className="mr-3 flex w-20 flex-col place-items-center pb-5"
// 					key={icon}
// 					title={icon}
// 				>
// 					<Icon icon={getIconName(icon)} key={icon} />
// 					<span className="text-xs text-gray-900">{getIconName(icon)}</span>
// 				</div>
// 			))}
// 		</>
// 	);
// }

// export const Default: Story = {
// 	render: () => (
// 		<>
// 			<div className="pb-5">List of Icons</div>
// 			<div className="flex flex-wrap pb-10">
// 				<MapIcons icons={Object.keys(Icons)} />
// 			</div>
// 		</>
// 	),
// };
