import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { Pagination } from ".";
import theme from "../../theme";

const mockedNavigator = jest.fn();

describe("Pagination component", () => {
  it("Should be able the component render correctly ", () => {
    render(
      <ThemeProvider theme={theme}>
        <Pagination currentPage={0} pages={5} setActualPage={() => {}} />
      </ThemeProvider>
    );

    expect(screen.getByText("1")).toBeTruthy();
  });

  it("Should be able send the page in function setActualPage", () => {
    render(
      <ThemeProvider theme={theme}>
        <Pagination
          currentPage={0}
          pages={5}
          setActualPage={() => mockedNavigator(2)}
        />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("2"));

    expect(mockedNavigator).toBeCalledWith(2);
  });
});
