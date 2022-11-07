import React, { HTMLProps, InputHTMLAttributes } from "react";
import { Container, Input, InputIcon } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import theme from "../../theme";

export const InputSearch: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...rest
}) => {
  return (
    <Container>
      <Input placeholder="Buscar produto" {...rest} />
      <InputIcon>
        <AiOutlineSearch size={24} color={theme.colors.blue_500} />
      </InputIcon>
    </Container>
  );
};
