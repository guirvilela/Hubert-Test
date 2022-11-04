import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Details } from "../../pages/Details";
import { exampleProductDetails } from "../../services/exampleProduct";

import theme from "../../theme";

const mockedNavigator = jest.fn();
const mockedLocation = {
  state: exampleProductDetails,
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
  useLocation: () => mockedLocation,
}));

describe("Table component", () => {
  it("Should be able the component render correctly ", () => {
    render(
      <ThemeProvider theme={theme}>
        <Details />
      </ThemeProvider>
    );
    expect(screen.getByText("Detalhes do produto")).toBeInTheDocument();
  });

  it("Should be able show all product information", () => {
    render(
      <ThemeProvider theme={theme}>
        <Details />
      </ThemeProvider>
    );

    expect(screen.getByText("ID: 27")).toBeInTheDocument();
    expect(screen.getByText("Departamento: Health")).toBeInTheDocument();
    expect(screen.getByText("Nome: Elegant Concrete Fish")).toBeInTheDocument();
    expect(screen.getByText("Cor: salmon")).toBeInTheDocument();
    expect(screen.getByText("Material: Bronze")).toBeInTheDocument();
    expect(screen.getByText("Preço: $109.00")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Descrição: The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality"
      )
    ).toBeInTheDocument();
  });

  it("Should be able return to first screen when click on back button", () => {
    render(
      <ThemeProvider theme={theme}>
        <Details />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Voltar"));
    expect(mockedNavigator).toBeCalledWith("/");
  });
});
