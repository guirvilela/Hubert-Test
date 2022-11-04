import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IProduct } from "../../@types/products";
import { ButtonBack } from "../../components/ButtonBack";
import { HistoryPages } from "../../components/HistoryPages";
import { ProductDetailText } from "../../components/ProductDetailText";
import { formatCurrency } from "../../services/formatCurrency";
import { Content } from "../../shared/AnimatedContainer";
import { ButtonContent, ProductInfo, RetangleColor, Title } from "./styles";

export const Details: React.FC = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [detailProduct, setDetailProduct] = useState<IProduct>(state);

  const handleBackToProducts = () => {
    navigate("/");
  };

  return (
    <Content>
      <HistoryPages product={detailProduct.product} />

      <ProductInfo>
        <Title>Detalhes do produto</Title>

        <ProductDetailText keys="ID">{detailProduct.id}</ProductDetailText>
        <ProductDetailText keys="Nome">
          {detailProduct.product}
        </ProductDetailText>
        <ProductDetailText keys="Material">
          {detailProduct.material}
        </ProductDetailText>
        <ProductDetailText keys="Departamento">
          {detailProduct.department}
        </ProductDetailText>
        <ProductDetailText keys="Cor">
          {detailProduct.color} <RetangleColor color={detailProduct.color} />
        </ProductDetailText>
        <ProductDetailText keys="Preço">
          {formatCurrency.format(Number(detailProduct.price))}
        </ProductDetailText>
        <ProductDetailText keys="Descrição">
          {detailProduct.description}
        </ProductDetailText>

        <ButtonContent>
          <ButtonBack onClick={handleBackToProducts}>Voltar</ButtonBack>
        </ButtonContent>
      </ProductInfo>
    </Content>
  );
};
