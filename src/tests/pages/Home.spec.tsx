import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import mock from "axios";
import mockAxios from "jest-mock-axios";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Home } from "../../pages/Home";
import api from "../../services/api";
import { exampleProduct } from "../../services/exampleProduct";
import { loadAllProductsTable } from "../../services/products/LoadAllProductsTable";
import theme from "../../theme";

jest.mock("../../services/api", () => {
  return {
    get: jest.fn(),
  };
});

jest.mock("axios");

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("Table component", () => {
  it("Should be able the component render correctly ", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );
    expect(screen.getByText("Limpar busca")).toBeInTheDocument();
  });

  it("Should be able filter list by product name", () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

    const input = screen.getByPlaceholderText(
      "Digite o produto"
    ) as HTMLInputElement;

    fireEvent.change(input, {
      target: { value: "Bespoke Steel" },
    });

    const filtered = exampleProduct.filter(({ product }) =>
      product.toLowerCase().includes(input.value.toLowerCase())
    );

    expect(filtered).toHaveLength(1);
  });

  it("Should be able return initial table if input is not filled", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

    const input = screen.getByPlaceholderText(
      "Digite o produto"
    ) as HTMLInputElement;

    fireEvent.change(input, {
      target: { value: "teste" },
    });

    fireEvent.change(input, {
      target: { value: null },
    });

    const filtered = exampleProduct.filter(({ product }) =>
      product.toLowerCase().includes(input.value.toLowerCase())
    );

    expect(filtered).toHaveLength(2);
  });

  it("Should be able return not found data if filter list by wrong product name", () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

    const input = screen.getByPlaceholderText(
      "Digite o produto"
    ) as HTMLInputElement;

    fireEvent.change(input, {
      target: { value: "Oriental Steel" },
    });

    expect(screen.getByText("Nenhum produto encontrado!")).toBeInTheDocument();
  });

  it("Should be able clean fields", () => {
    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Limpar busca"));

    const input = screen.getByPlaceholderText(
      "Digite o produto"
    ) as HTMLInputElement;

    expect(input.value).toBe("");
  });
});
