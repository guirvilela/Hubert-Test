import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 8px;

  height: 40px;

  border: 2px solid ${({ theme }) => theme.colors.blue_400};
  max-width: 232px;
  border-radius: 8px;

  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.blue_500};
  }
`;

export const Input = styled.input`
  margin-right: 8px;

  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.blue_500};
  font: ${({ theme }) => theme.fonts.nunito.small_400};
  background-color: transparent;
  outline: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.blue_400};
  }
`;

export const InputIcon = styled.div`
  width: 24px;
  height: 24px;
`;
