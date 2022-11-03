import { BrowserRouter, useLocation } from "react-router-dom";

import { AnimatedRoutes } from "./AnimatedRoutes";

export const RoutesPages = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};
