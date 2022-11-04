import styled from "styled-components";

interface IRetangleColor {
  color: string;
}

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

  @media (max-width: 430px) {
    justify-content: center;
  }
`;

export const RetangleColor = styled.span<IRetangleColor>`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: ${({ theme, color }) => color};
`;
