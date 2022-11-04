import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { HistoryPages } from ".";
import theme from "../../theme";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("HistoryPages component", () => {
  it("Should be able the component render correctly ", () => {
    render(
      <ThemeProvider theme={theme}>
        <HistoryPages />
      </ThemeProvider>
    );

    expect(screen).toBeTruthy();
  });

  it("Should be able Product text appear with style if not pass props", () => {
    render(
      <ThemeProvider theme={theme}>
        <HistoryPages />
      </ThemeProvider>
    );

    expect.objectContaining({
      active: true,
    });
  });

  it("Should be able appear product name when pass props to component", () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <HistoryPages product="product" />
      </ThemeProvider>
    );
    expect(screen.getByText("product")).toBeInTheDocument();
  });

  it("Should be able return to first screen when click on back button", () => {
    render(
      <ThemeProvider theme={theme}>
        <HistoryPages />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Produtos"));
    expect(mockedNavigator).toBeCalledWith("/");
  });
});
