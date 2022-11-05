import React, { useEffect, useState } from "react";
import { IProduct } from "../../@types/products";
import { HistoryPages } from "../../components/HistoryPages";
import { InputSearch } from "../../components/InputSearch";
import { Loading } from "../../components/Loading";
import { Table } from "../../components/Table";
import { loadAllProductsTable } from "../../services/products/LoadAllProductsTable";
import { Content } from "../../shared/AnimatedContainer";
import {
  ClearSearch,
  NotFoundProduct,
  ProductTable,
  SearchContent,
} from "./styles";

export const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [updateProducts, setUpdateProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    const data = await loadAllProductsTable();
    /* istanbul ignore next */
    setProducts(data);
    setUpdateProducts(data);
  };

  const handleSearchTable = (text: string) => {
    setSearch(text);

    if (text) {
      /* istanbul ignore next */
      const filtered = updateProducts.filter(({ product }) =>
        product.toLowerCase().includes(text.toLowerCase())
      );

      if (filtered) {
        setProducts(filtered);
      }
    } else {
      loadAllProducts();
    }
  };

  const handleClearSearch = () => {
    loadAllProducts();
    setSearch("");
  };

  const loadTableConditions = () => {
    if (products.length === 0 && !search) {
      return <Loading />;
    } else if (products.length === 0 && search) {
      return <NotFoundProduct>Nenhum produto encontrado!</NotFoundProduct>;
    } else {
      /* istanbul ignore next */
      return <Table data={products} />;
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

      <ProductTable>{loadTableConditions()}</ProductTable>
    </Content>
  );
};
