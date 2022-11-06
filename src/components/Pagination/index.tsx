import React from "react";
import { Container, PaginationButton } from "./styles";

interface IPagination {
  pages: number;
  setActualPage: (page: number) => void;
  currentPage: number;
}

export const Pagination: React.FC<IPagination> = ({
  pages,
  setActualPage,
  currentPage,
}) => {
  console.log(currentPage);
  return (
    <Container>
      {Array.from(Array(pages), (_, index) => (
        <PaginationButton
          active={currentPage === index}
          key={index}
          onClick={() => setActualPage(index)}
        >
          {index + 1}
        </PaginationButton>
      ))}
    </Container>
  );
};
