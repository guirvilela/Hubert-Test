import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div).attrs({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.1 } },
})`
  height: 100%;
  @media (min-width: 1200px) {
    max-width: 1200px;
    margin: auto;
  }

  @media (max-width: calc(1201px)) {
    padding: 0px 24px;
  }
`;

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
