import styled from "styled-components";

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

export const NotFoundProduct = styled.h2`
  font: ${({ theme }) => theme.fonts.nunito.small_600};
  color: ${({ theme }) => theme.colors.blue_500};
  text-align: center;
`;

export const ProductTable = styled.div`
  width: 100%;
  padding: 32px 41px;
  background: ${({ theme }) => theme.colors.shade};
  margin-top: 27px;
  overflow: auto;
`;
