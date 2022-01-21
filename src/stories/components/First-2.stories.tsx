import React from "react";
import { Meta, Story } from "@storybook/react";

const First = () => {
    return <div>Hello world</div>
}

export default {
    component: First,
    title: 'Hello/World/Components/First-2',
} as Meta;

const Template: Story = (args) => <First {...args} />;

export const Default: React.FC = () => <First />;
export const Inverse: React.FC = () => <First />;
export const InForm: React.FC = () => <First />;
export const Inline: React.FC = () => <First />;