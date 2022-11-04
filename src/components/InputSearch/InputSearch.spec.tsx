import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { InputSearch } from ".";
import theme from "../../theme";

describe("InputSearch component", () => {
  it("Should be able the component render correctly ", () => {
    render(
      <ThemeProvider theme={theme}>
        <InputSearch />
      </ThemeProvider>
    );

    expect(screen).toBeTruthy();
  });

  it("Should be able appear the value when write on field", () => {
    render(
      <ThemeProvider theme={theme}>
        <InputSearch />
      </ThemeProvider>
    );

    const input = screen.getByPlaceholderText(
      "Digite o produto"
    ) as HTMLInputElement;

    fireEvent.change(input, {
      target: { value: "product_name" },
    });

    expect(input.value).toBe("product_name");
  });
});
