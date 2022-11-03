import React from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../@types/products";
import { productCategories } from "../../services/categories";
import { formatCurrency } from "../../services/formatCurrency";
import { BodyCells, BodyTable, Container, Dots, HeaderCells } from "./styles";

interface ITableProps {
  data: IProduct[];
}

export const Table: React.FC<ITableProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <thead>
        <tr>
          {productCategories.map((category, index) => (
            <HeaderCells key={index}>{category}</HeaderCells>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((product) => (
          <BodyTable
            key={product.id}
            onClick={() =>
              navigate(`/detalhes/${product.id}`, { state: product })
            }
          >
            <BodyCells>{product.id}</BodyCells>
            <BodyCells>{product.department}</BodyCells>
            <BodyCells>{product.product}</BodyCells>
            <BodyCells>{product.color}</BodyCells>
            <BodyCells>{product.material}</BodyCells>
            <BodyCells>
              {formatCurrency.format(Number(product.price))}
            </BodyCells>
            <BodyCells>
              <Dots size={24} />
            </BodyCells>
          </BodyTable>
        ))}
      </tbody>
    </Container>
  );
};
