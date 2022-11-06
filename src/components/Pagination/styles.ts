import styled, { css } from "styled-components";

interface PaginationButtonProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 27px;
`;

export const PaginationButton = styled.button<PaginationButtonProps>`
  font: ${({ theme }) => theme.fonts.nunito.small_600};
  background-color: ${({ theme }) => theme.colors.shade};
  padding: 8px 16px;
  border-radius: 8px;

  ${({ theme, active }) =>
    active &&
    css`
      background-color: ${theme.colors.blue_500};
      color: ${theme.colors.shade};
    `}
`;
