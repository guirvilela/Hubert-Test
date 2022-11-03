import React from "react";
import { Container, Text } from "./styles";

interface IProductDetailText {
  keys: string;
  children: React.ReactNode;
}

export const ProductDetailText: React.FC<IProductDetailText> = ({
  keys,
  children,
}) => {
  return (
    <Container>
      <Text>
        {keys}: {children}
      </Text>
    </Container>
  );
};
