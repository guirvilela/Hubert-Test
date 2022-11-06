import { useState } from "react";
import { IProduct } from "../@types/products";
import api from "../services/api";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [prevProducts, setPrevProducts] = useState<IProduct[]>([]);

  const getAllProducts = async () => {
    try {
      const response = await api.get("/products");
      /* istanbul ignore next */
      setProducts(response.data);
      /* istanbul ignore next */
      setPrevProducts(response.data);
    } catch (error) {
      return [];
    }
  };

  return {
    getAllProducts,
    products,
    setProducts,
    prevProducts,
  };
};
