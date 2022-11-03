import React from "react";
import { Container } from "./styles";

interface IContent {
  children: React.ReactNode;
}

export const Content: React.FC<IContent> = ({ children }) => {
  return <Container>{children}</Container>;
};
