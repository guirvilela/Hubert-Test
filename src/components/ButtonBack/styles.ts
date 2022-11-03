import styled from "styled-components";

export const Container = styled.button`
  width: 212px;
  padding: 12px 30px;
  font: ${({ theme }) => theme.fonts.nunito.small_600};
  color: ${({ theme }) => theme.colors.shade};
  background: ${({ theme }) => theme.colors.blue_500};
  border-radius: 4px;
`;
