import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.1 } },
})``;

export const SearchContent = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ClearSearch = styled.a`
  font: ${({ theme }) => theme.fonts.nunito.extraSmall_600};
  color: ${({ theme }) => theme.colors.blue_500};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ProductTable = styled.div`
  width: 100%;
  padding: 32px 41px;
  background: ${({ theme }) => theme.colors.shade};
  margin-top: 27px;
  overflow: auto;
`;
