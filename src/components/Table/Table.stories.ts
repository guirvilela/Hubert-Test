import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import { Table, ITable } from ".";
import { exampleProduct } from "../../services/exampleProduct";

export default {
  title: "Components/ProductDetailText",
  component: Table,
  decorators: [withRouter],

  args: {
    data: exampleProduct,
  },
} as Meta<ITable>;

export const Default: StoryObj<ITable> = {};
