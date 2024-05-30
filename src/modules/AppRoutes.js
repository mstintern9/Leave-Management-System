import React from "react";
import { ROUTES } from "../modules/Routes";
import Dashboard from "../pages/Dashboard";
import Attendance from "../pages/Attendance";
import Employees from "../pages/Employees";
import Leave from "../pages/Leave";
import Login from "../pages/Login";

const routes = [{
    path:ROUTES.DASHBOARD, element:<Dashboard />
},
{
    path:ROUTES.EMPLOYEES,element:<Employees />
},
{
    path:ROUTES.LEAVE,element:<Leave />
},
{
    path:ROUTES.ATTENDANCE,element:<Attendance />
},
{
    path:ROUTES.LOGIN,element:<Login />
},
];

export default routes;
