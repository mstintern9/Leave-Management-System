import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import routes from "./modules/AppRoutes";
import "./App.css";

function App() {
  const location = useLocation();

  const AppRoutes = () => (
    <Routes>
      {routes.map(({ path, element }, index) => (
        <Route key={index} path={path} element={element} />
      ))}
    </Routes>
  );
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Navbar />}
      {!isLoginPage && <Sidebar />}
      <AppRoutes />
    </>
  );
}

export default App;
