import React from "react";
import { ROUTES } from "../modules/Routes";
import Dashboard from "../pages/Dashboard";
import Attendance from "../pages/Attendance";
import Employees from "../pages/Employees";
import Leave from "../pages/Leave";
import Login from "../pages/Login";
import AuthenticationCheck from "./AuthenticationCheck";

const routes = [
  {
    path: ROUTES.DASHBOARD,
    element: (
      <AuthenticationCheck>
        <Dashboard />
      </AuthenticationCheck>
    ),
  },
  {
    path: ROUTES.EMPLOYEES,
    element: (
      <AuthenticationCheck>
        <Employees />
      </AuthenticationCheck>
    ),
  },
  {
    path: ROUTES.LEAVE,
    element: (
      <AuthenticationCheck>
        <Leave />
      </AuthenticationCheck>
    ),
  },
  {
    path: ROUTES.ATTENDANCE,
    element: (
      <AuthenticationCheck>
        <Attendance />
      </AuthenticationCheck>
    ),
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
];

export default routes;
