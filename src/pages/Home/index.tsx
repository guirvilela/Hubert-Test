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
  const [updateProducts, setUpdateProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    const data = await loadAllProductsTable();
    setProducts(data);
    setUpdateProducts(data);
  };

  const handleSearchTable = (text: string) => {
    setSearch(text);

    if (text) {
      const filtered = updateProducts.filter((str) =>
        str.product.toLowerCase().includes(text.toLowerCase())
      );

      if (filtered) {
        setProducts(filtered);
      } else {
        setUpdateProducts(updateProducts);
      }
    } else {
      loadAllProducts();
    }
  };

  const handleClearSearch = () => {
    loadAllProducts();
    setSearch("");
  };

  return (
    <Container>
      <HistoryPages />

      <SearchContent>
        <InputSearch
          value={search}
          onChange={(e) => handleSearchTable(e.target.value)}
        />
        <ClearSearch onClick={handleClearSearch}>Limpar busca</ClearSearch>
      </SearchContent>

      <ProductTable>
        {products.length === 0 ? <Loading /> : <Table data={products} />}
      </ProductTable>
    </Container>
  );
};
