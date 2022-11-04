import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { Table } from ".";
import { exampleProduct } from "../../services/exampleProduct";
import theme from "../../theme";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("Table component", () => {
  it("Should be able the component render correctly ", () => {
    render(
      <ThemeProvider theme={theme}>
        <Table data={exampleProduct} />
      </ThemeProvider>
    );
    expect(screen).toBeTruthy();
  });

  it("Should be able appear header title table", () => {
    render(
      <ThemeProvider theme={theme}>
        <Table data={exampleProduct} />
      </ThemeProvider>
    );

    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Categoria")).toBeInTheDocument();
    expect(screen.getByText("Produto")).toBeInTheDocument();
    expect(screen.getByText("Cor")).toBeInTheDocument();
    expect(screen.getByText("Material")).toBeInTheDocument();
    expect(screen.getByText("Preço")).toBeInTheDocument();
  });

  it("Should be able to get the data correctly past in props ", () => {
    render(
      <ThemeProvider theme={theme}>
        <Table data={exampleProduct} />
      </ThemeProvider>
    );

    expect.objectContaining({
      data: exampleProduct,
    });
  });

  it("Should be able show data table correctly ", () => {
    render(
      <ThemeProvider theme={theme}>
        <Table data={exampleProduct} />
      </ThemeProvider>
    );

    expect(screen.getByText("27")).toBeInTheDocument();
    expect(screen.getByText("Health")).toBeInTheDocument();
    expect(screen.getByText("Elegant Concrete Fish")).toBeInTheDocument();
    expect(screen.getByText("salmon")).toBeInTheDocument();
    expect(screen.getByText("Bronze")).toBeInTheDocument();
    expect(screen.getByText("$109.00")).toBeInTheDocument();
  });

  it("Should be able navigate to detail page of products ", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Table data={exampleProduct} />
      </ThemeProvider>
    );

    const tableRows = container.querySelectorAll<HTMLElement>("table tbody tr");

    fireEvent.click(tableRows[0]);

    expect(mockedNavigator).toBeCalledWith(`/detalhes/${27}`, {
      state: {
        color: "salmon",
        department: "Health",
        description:
          "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        id: "27",
        material: "Bronze",
        price: "109.00",
        product: "Elegant Concrete Fish",
      },
    });
  });
});
