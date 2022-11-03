import React, { HTMLProps } from "react";
import { Container } from "./styles";

interface IButtonBack extends HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ButtonBack: React.FC<IButtonBack> = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};
