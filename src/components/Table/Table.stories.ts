import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import { Table, ITable } from ".";

export default {
  title: "Components/ProductDetailText",
  component: Table,
  decorators: [withRouter],

  args: {
    data: [
      {
        department: "Health",
        product: "Elegant Concrete Fish",
        description:
          "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        material: "Bronze",
        color: "salmon",
        price: "109.00",
        id: "27",
      },
      {
        department: "Electronics",
        product: "Bespoke Steel Pizza",
        description:
          "he Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        material: "Steel",
        color: "green",
        price: "863.00",
        id: "28",
      },
    ],
  },
} as Meta<ITable>;

export const Default: StoryObj<ITable> = {};
