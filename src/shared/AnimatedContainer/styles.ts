import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  @media (min-width: 1200px) {
    max-width: 1200px;
    margin: auto;
  }

  @media (max-width: calc(1201px)) {
    padding: 0px 24px;
  }
`;
