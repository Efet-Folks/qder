import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import QserPage from "../pages/qser";
import NotFound from "../pages/404";

function AppRouter() {
  return (
    <>
      <Routes>
        {/* --- APP ROUTES --- */}

        <Route path="/" element={<HomePage />} />

        <Route path="/qser" element={<QserPage />} />

        {/* 404 ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRouter;
