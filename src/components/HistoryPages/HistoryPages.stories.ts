import { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";

import { HistoryPages, IHistoryPages } from ".";

export default {
  title: "Components/HistoryPages",
  component: HistoryPages,
  decorators: [withRouter],
} as Meta<IHistoryPages>;

export const Default: StoryObj<IHistoryPages> = {};

export const ProductPage: StoryObj<IHistoryPages> = {
  args: {
    product: "Produto 1",
  },
};
