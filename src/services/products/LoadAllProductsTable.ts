import { IProduct } from "../../@types/products";
import api from "../api";

export const loadAllProductsTable = async (): Promise<IProduct[]> => {
  try {
    const response = await api.get("/products");
    /* istanbul ignore next */
    return response.data;
  } catch (error) {
    return [];
  }
};
