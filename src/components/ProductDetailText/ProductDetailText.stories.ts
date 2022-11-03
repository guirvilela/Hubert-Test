import { Meta, StoryObj } from "@storybook/react";

import { ProductDetailText, IProductDetailText } from ".";

export default {
  title: "Components/ProductDetailText",
  component: ProductDetailText,
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adip",
    keys: "Descrição",
  },
} as Meta<IProductDetailText>;

export const Default: StoryObj<IProductDetailText> = {};
