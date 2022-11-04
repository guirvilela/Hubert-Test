import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { ProductDetailText } from ".";
import theme from "../../theme";

describe("ProductDetailText component", () => {
  it("Should be able the component render correctly ", () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductDetailText keys="ID">4</ProductDetailText>
      </ThemeProvider>
    );

    expect(screen).toBeTruthy();
  });

  it("Should be able text appear correctly when pass props", () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductDetailText keys="ID">4</ProductDetailText>
      </ThemeProvider>
    );

    expect(screen.getByText("ID: 4")).toBeInTheDocument();
  });
});
