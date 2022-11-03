import React, { useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { IProduct } from "../../@types/products";
import { HistoryPages } from "../../components/HistoryPages";
import { Container } from "./styles";

export const Details: React.FC = (props) => {
  const { state } = useLocation();
  const [detailProduct, setDetailProduct] = useState<IProduct>(state);

  return (
    <Container>
      <HistoryPages product={detailProduct.product} />
      <NavLink to="/">voltar</NavLink>
    </Container>
  );
};
