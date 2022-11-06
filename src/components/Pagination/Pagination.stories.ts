import { Meta, StoryObj } from "@storybook/react";

import { Pagination, IPagination } from ".";

export default {
  title: "Components/Pagination",
  component: Pagination,
  args: {
    currentPage: 0,
    pages: 5,
    setActualPage: () => {},
  },
} as Meta<IPagination>;

export const Default: StoryObj<IPagination> = {};
