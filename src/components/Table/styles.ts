import { BiDotsHorizontalRounded } from "react-icons/bi";
import styled from "styled-components";

export const Container = styled.table`
  width: 100%;

  border-collapse: collapse;
  overflow-x: auto;
`;

export const HeaderTable = styled.thead``;

export const HeaderCells = styled.th`
  background: ${({ theme }) => theme.colors.background};
  padding: 16px;
  font: ${({ theme }) => theme.fonts.nunito.small_600};
  color: ${({ theme }) => theme.colors.blue_800};

  @media (max-width: 430px) {
    font: ${({ theme }) => theme.fonts.nunito.extraSmall_600};
  }
`;

export const BodyTable = styled.tr`
  border-bottom: 2px solid ${({ theme }) => theme.colors.background};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.background};
    transition: 200ms;
  }
`;

export const BodyCells = styled.td`
  padding: 16px;
  text-align: center;
  font: ${({ theme }) => theme.fonts.nunito.small_600};
  color: ${({ theme }) => theme.colors.blue_800};

  @media (max-width: 430px) {
    font: ${({ theme }) => theme.fonts.nunito.extraSmall_600};
  }
`;

export const Dots = styled(BiDotsHorizontalRounded).attrs({
  size: 24,
})`
  color: ${({ theme }) => theme.colors.blue_800};
`;
