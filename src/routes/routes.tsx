import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";

export const RoutesPages = () => {
  return (
    <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Details />} path="/detalhes/:id" />
      </Routes>
    </BrowserRouter>
  );
};
