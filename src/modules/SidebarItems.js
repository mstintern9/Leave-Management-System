import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { ROUTES } from "./Routes";

export const sidebarItems = [
  { caption: "Menu" },
  { name: "Dashboard", icon: <DashboardIcon />, navigation: ROUTES.DASHBOARD },
  {
    name: "Employees",
    icon: <Person2OutlinedIcon />,
    navigation: ROUTES.EMPLOYEES,
  },
  {
    name: "Leave",
    icon: <ReportProblemOutlinedIcon />,
    navigation: ROUTES.LEAVE,
  },
  {
    name: "Attendance",
    icon: <CalendarMonthOutlinedIcon />,
    navigation: ROUTES.ATTENDANCE,
  },
];
