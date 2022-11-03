import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Page, Arrow } from "./styles";

interface HistoryPages {
  product?: string;
  active?: boolean;
}

export const HistoryPages: React.FC<HistoryPages> = ({ product, active }) => {
  const navigate = useNavigate();
  const route = useLocation();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Container>
      <Page>Home</Page>
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
