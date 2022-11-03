import styled from "styled-components";

export const Container = styled.div`
  margin: 8px 0;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;

  font: ${({ theme }) => theme.fonts.nunito.extraSmall_600};
  color: ${({ theme }) => theme.colors.blue_800};
`;
