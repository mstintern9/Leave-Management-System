import React from "react";
import { Routes, useNavigate, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import routes from "./modules/AppRoutes";
import "./App.css";
import { useEffect } from "react";
import api from "./modules/Axios";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectToLogin = () => {
      navigate("/login");
    };
    api.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("access_token");
          redirectToLogin();
        }
        return Promise.reject(error);
      }
    );
  }, [navigate]);
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
