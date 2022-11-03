import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styled, { css } from "styled-components";

interface PageProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 27px;
`;

export const Page = styled.a<PageProps>`
  font: ${({ theme }) => theme.fonts.nunito.small_600};
  color: ${({ theme }) => theme.colors.blue_400};

  ${({ theme, active }) =>
    active &&
    css`
      color: ${theme.colors.blue_500};
    `};

  &:hover {
    color: ${({ theme }) => theme.colors.blue_500};
    cursor: pointer;
    transition: 200ms;
  }
`;

export const Arrow = styled(MdOutlineKeyboardArrowRight).attrs({
  size: 20,
})`
  color: ${({ theme }) => theme.colors.blue_400};
`;
