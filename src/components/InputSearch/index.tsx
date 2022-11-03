import React from "react";
import { Container, Input, InputIcon } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import theme from "../../theme";

export const InputSearch: React.FC = () => {
  return (
    <Container>
      <Input placeholder="Digite uma palavra chave" />
      <InputIcon>
        <AiOutlineSearch size={24} color={theme.colors.blue_500} />
      </InputIcon>
    </Container>
  );
};
