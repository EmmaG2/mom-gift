import { Navigate, Route } from "react-router";
import { Routes } from "react-router-dom";
import { NavidadPage } from "../pages";

export const NavidadRoutes = () => {
  return (
    <Routes>
      <Route path="/navidad" element={<NavidadPage />} />
      <Route path="/*" element={<Navigate to={"/navidad"} />} />
    </Routes>
  );
};
