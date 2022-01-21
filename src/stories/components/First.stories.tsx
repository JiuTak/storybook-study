import { Meta } from "@storybook/react";
import React from "react";

export const First = () => {
    return <div>Hello world</div>
}

export default {
    component: First,
    title: 'Components/First',
} as Meta;

export const Default: React.FC = () => <First />;
export const Inverse: React.FC = () => <First />;
export const InForm: React.FC = () => <First />;
export const Inline: React.FC = () => <First />;