import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Page, Arrow } from "./styles";

export interface IHistoryPages {
  product?: string;
}

export const HistoryPages: React.FC<IHistoryPages> = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Container>
      <Page onClick={handleNavigate}>Home</Page>
      <Arrow />
      <Page active={!product} onClick={handleNavigate}>
        Produtos
      </Page>
      {product && (
        <>
          <Arrow />
          <Page active={!!product}>{product}</Page>
        </>
      )}
    </Container>
  );
};
