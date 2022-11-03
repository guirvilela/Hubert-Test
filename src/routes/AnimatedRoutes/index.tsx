import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Home } from "../../pages/Home";
import { Details } from "../../pages/Details";

export const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route element={<Home />} path="/" />
        <Route element={<Details />} path="/detalhes/:id" />
      </Routes>
    </>
  );
};
