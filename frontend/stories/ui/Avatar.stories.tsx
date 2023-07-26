import { Meta, StoryObj } from "@storybook/react";
import Avatar from "ui/src/Avatar";

const meta: Meta<typeof Avatar> = { component: Avatar };
export default meta;

type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
	args: {
		source: "https://cdn.quasar.dev/img/avatar.png",
		square: false,
		size: "md",
	},
};
