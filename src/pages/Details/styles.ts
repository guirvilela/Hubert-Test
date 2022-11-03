import styled from "styled-components";
import { motion } from "framer-motion";

interface IRetangleColor {
  color: string;
}

export const Container = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.1 } },
})``;

export const ProductInfo = styled.div`
  background: ${({ theme }) => theme.colors.shade};
  padding: 32px 48px;
`;

export const Title = styled.h1`
  font: ${({ theme }) => theme.fonts.nunito.small_700};
  color: ${({ theme }) => theme.colors.blue_500};
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 32px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const RetangleColor = styled.span<IRetangleColor>`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: ${({ theme, color }) => color};
`;
