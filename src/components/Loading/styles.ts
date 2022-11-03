import styled, { css } from "styled-components";

export const Spinner = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  animation: spinner 0.8s linear infinite;
  margin: 0 auto;

  ${({ theme }) =>
    css`
      border: 0.125rem solid ${theme.colors.blue_400};
      border-top: 0.125rem solid transparent;
    `}
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
