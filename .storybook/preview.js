import React from "react";
import { Container } from "@material-ui/core";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  containerSize: {
      name: 'Container size',
      // Text that will be shown on icon hover
      description: 'Global container\'s size',
      defaultValue: 'xs',
      toolbar: {
          /**
           * You can check all available icons by this link:
           * https://storybook.js.org/docs/riot/workflows/faq#what-icons-are-available-for-my-toolbar-or-my-addon
           */
          icon: 'circlehollow',
          items: ['xs', 'sm', 'md', 'lg', 'xl'],
          // Should "Container size" be shown, or just the "circlehollow" icon
          showName: true,
      },
  },
  theme: {
    name: 'Theme',
    description: 'Global theme',
    defaultValue: 'light',
    toolbar: {
        icon: 'lightning',
        items: ['dark', 'light'],
        showName: true,
    },
},
};

export const decorators = [
  (Story, context) => (
      <Container maxWidth={context.globals.containerSize}>
          <Story />
      </Container>
  ),
];

