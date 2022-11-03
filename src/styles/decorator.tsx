import React from "react";
import { DecoratorFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../theme";
import { GlobalStyle } from "./global";

const withTheme: DecoratorFn = (StoryFn) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  );
};

export const globaDecorators = [withTheme];
