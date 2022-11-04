import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { ButtonBack } from ".";
import theme from "../../theme";

describe("ButtonBacl component", () => {
  it("Should be able the component render correctly ", () => {
    render(
      <ThemeProvider theme={theme}>
        <ButtonBack>Voltar</ButtonBack>
      </ThemeProvider>
    );

    expect(screen).toBeTruthy();
  });

  it("Should be able text appear correctly when pass children", () => {
    render(
      <ThemeProvider theme={theme}>
        <ButtonBack>Voltar</ButtonBack>
      </ThemeProvider>
    );

    expect(screen.getByText("Voltar")).toBeTruthy();
  });
});
