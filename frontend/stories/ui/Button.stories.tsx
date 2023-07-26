import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "ui";

const meta: Meta<typeof Button> = { component: Button };
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    color: "secondary",
    isLoading: true,
  },
};
