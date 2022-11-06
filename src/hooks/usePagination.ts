import { useEffect, useState } from "react";
import { IProduct } from "../@types/products";

export const usePagination = (products: IProduct[]) => {
  const [itensPerPage, setItensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItens, setCurrentItens] = useState<IProduct[]>([]);

  const pages = Math.ceil(products.length / itensPerPage);

  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;

  useEffect(() => {
    setCurrentItens(products.slice(startIndex, endIndex));
  }, [products, currentPage]);

  return {
    pages,
    currentItens,
    setCurrentPage,
    setCurrentItens,
    currentPage,
  };
};
