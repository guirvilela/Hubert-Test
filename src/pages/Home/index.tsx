import React, { useEffect, useState } from "react";
import { IProduct } from "../../@types/products";
import { HistoryPages } from "../../components/HistoryPages";
import { InputSearch } from "../../components/InputSearch";
import { Loading } from "../../components/Loading";
import { Table } from "../../components/Table";
import { loadAllProductsTable } from "../../services/products/LoadAllProductsTable";
import { ClearSearch, Container, ProductTable, SearchContent } from "./styles";

export const Home: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    const data = await loadAllProductsTable();
    setProducts(data);
  };

  return (
    <Container>
      <HistoryPages />

      <SearchContent>
        <InputSearch />
        <ClearSearch>Limpar busca</ClearSearch>
      </SearchContent>

      <ProductTable>
        {products.length === 0 ? <Loading /> : <Table data={products} />}
      </ProductTable>
    </Container>
  );
};
