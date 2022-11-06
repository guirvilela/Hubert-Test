import React, { useEffect, useState } from "react";
import { HistoryPages } from "../../components/HistoryPages";
import { InputSearch } from "../../components/InputSearch";
import { Loading } from "../../components/Loading";
import { Pagination } from "../../components/Pagination";
import { Table } from "../../components/Table";
import { usePagination } from "../../hooks/usePagination";
import { useProducts } from "../../hooks/useProducts";
import { Content } from "../../shared/AnimatedContainer";
import {
  ClearSearch,
  NotFoundProduct,
  ProductTable,
  SearchContent,
} from "./styles";

export const Home: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { getAllProducts, products, prevProducts } = useProducts();
  const { pages, currentItens, setCurrentItens, setCurrentPage, currentPage } =
    usePagination(products);

  useEffect(() => {
    setLoading(true);
    getAllProducts();
    setLoading(false);
  }, []);

  const handleSearchTable = (text: string) => {
    setSearch(text);

    if (text) {
      /* istanbul ignore next */
      const filtered = prevProducts.filter(({ product }) =>
        product.toLowerCase().includes(text.toLowerCase())
      );

      if (filtered) {
        setCurrentItens(filtered);
      }
    } else {
      getAllProducts();
    }
  };

  const handleClearSearch = () => {
    setLoading(true);
    getAllProducts();
    setSearch("");
    setCurrentPage(0);
    setLoading(false);
  };

  const loadTableConditions = () => {
    if (currentItens.length === 0 && !search) {
      return <Loading />;
    } else if (currentItens.length === 0 && search) {
      return <NotFoundProduct>Nenhum produto encontrado!</NotFoundProduct>;
    } else {
      /* istanbul ignore next */
      return <Table data={currentItens} />;
    }
  };

  return (
    <Content>
      <HistoryPages />

      <SearchContent>
        <InputSearch
          value={search}
          onChange={(event) =>
            handleSearchTable((event.target as HTMLInputElement).value)
          }
        />
        <ClearSearch onClick={handleClearSearch}>Limpar busca</ClearSearch>
      </SearchContent>

      {!loading ? (
        <ProductTable>{loadTableConditions()}</ProductTable>
      ) : (
        <Loading />
      )}

      {!search && !loading && (
        <Pagination
          pages={pages}
          setActualPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </Content>
  );
};
