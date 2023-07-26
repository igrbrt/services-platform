import React, { useCallback, useState } from "react";

import { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "ui";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 255 }}>
      <TextInput {...args} />
    </div>
  ),
  args: {
    id: "primary",
    label: "Digite seu nome",
  },
};
