import { Navigate, Route, Routes } from "react-router-dom";
import { NavidadRoutes } from "../navidad/routes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home/*" element={<NavidadRoutes />} />
      <Route path="/*" element={<Navigate to={"/home/navidad"} />} />
    </Routes>
  );
};
