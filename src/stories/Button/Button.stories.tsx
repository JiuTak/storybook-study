import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps, Container} from "@material-ui/core";

export default {
    component: Button,
    title: 'MaterialUI/Button',
    decorators: [
        (Story) => {
            return (
                <Container maxWidth='sm'>
                    <Story />
                </Container>
            );
        },
    ],
} as Meta;

const Template: Story<ButtonProps> = (args) => (
    <Button
        {...args}
        fullWidth={true}
        color='primary'
        variant='contained'
    >
        Button text
    </Button>
);

export const Primary = Template.bind({});