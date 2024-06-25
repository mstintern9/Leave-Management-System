import React from "react";
import "../styling/attendance.css";
import CardComponent from "../components/cardComponent";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import { InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../modules/Axios";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import { DataGrid } from "@mui/x-data-grid";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const yAxisLabels = [
  "1 hour",
  "2 hours",
  "3 hours",
  "4 hours",
  "5 hours",
  "6 hours",
  "7 hours",
  "8 hours",
  "9 hours",
];

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 220,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "checkIn",
    headerName: "Check In",
    width: 220,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "break",
    headerName: "Break",
    width: 220,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "checkOut",
    headerName: "Check out",
    width: 220,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "totalTime",
    headerName: "Total Time",
    width: 220,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 220,
    headerClassName: "header-cell",
    editable: true,
    renderCell: (params) => {
      const className = `status-${params.value
        .replace(/ /g, "-")
        .toLowerCase()}`;
      return <span className={className}>{params.value}</span>;
    },
  },
];

const getRowClassName = () => "custom-row";

export default function Attendance() {
  const [age, setAge] = React.useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [machineName, setMachineName] = useState("");
  const [attendanceData, setAttendanceData] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  useEffect(() => {
    const machineNameFromStorage = localStorage.getItem("machine_name");
    setMachineName(machineNameFromStorage);
  }, []);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 3 }, (_, i) => currentYear - i);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getStatus = (timeSpent) => {
    const hours = parseInt(timeSpent.split("h")[0], 10);
    if (hours >= 9) return "Full Day";
    if (hours >= 7) return "Short Day";
    if (hours >= 5) return "Half Day";
    return "Leave";
  };

  useEffect(() => {
    const getAttendanceData = async () => {
      try {
        const requestBody = {
          employeeName: machineName,
          month: selectedMonth,
          year: selectedYear,
        };

        const response = await api.post(
          "/AttendanceRecords/GetEmployeesAttendance",
          requestBody
        );
        console.log(response.data);
        setAttendanceData(response.data);
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      }
    };
    getAttendanceData();
  }, [selectedYear]);

  const rows = attendanceData.map((item, index) => ({
    id: index + 1,
    name: item.machineName,
    checkIn: `${item.from} AM`,
    break: "1 hour",
    checkOut: `${item.to} PM`,
    totalTime: item.timeSpent,
    status: getStatus(item.timeSpent),
  }));

  const menuProps = {
    PaperProps: {
      style: {
        marginTop: "2px",
        borderRadius: "0.8vh",
      },
    },
  };

  const transformAttendanceData = (attendanceData) => {
    // Define your ranges
    const ranges = [
      { name: "1 - 5", minValue: 1, maxValue: 5 },
      { name: "6 - 10", minValue: 6, maxValue: 10 },
      { name: "11 - 15", minValue: 11, maxValue: 15 },
      { name: "16 - 20", minValue: 16, maxValue: 20 },
      { name: "21 - 25", minValue: 21, maxValue: 25 },
      { name: "26 - 30", minValue: 26, maxValue: 30 },
    ];

    // Initialize an array to hold the transformed data
    const transformedData = [];

    // Loop through each range
    ranges.forEach((range) => {
      // Filter attendance data within the current range
      const filteredData = attendanceData.filter((item) => {
        const timeSpent = parseInt(item.timeSpent.split("h")[0], 10);
        return timeSpent >= range.minValue && timeSpent <= range.maxValue;
      });

      // Calculate total time spent in this range
      const totalTimeSpent = filteredData.reduce((acc, curr) => {
        return acc + parseInt(curr.timeSpent.split("h")[0], 10);
      }, 0);

      // Push an object with the range name and total time spent to the transformed data array
      transformedData.push({
        name: range.name,
        timeSpent: totalTimeSpent,
      });
    });

    return transformedData;
  };

  const chartData = transformAttendanceData(attendanceData);

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    padding: theme.spacing(0.5, 2),
    fontSize: "0.875rem",
  }));
  return (
    <div className="attendance">
      <div className="firstContainer">
        <CardComponent
          sx={{ height: "43.2vh", width: "91%", boxShadow: "none" }}
        >
          <div className="firstChartContainer">
            <p
              style={{
                color: "#011627",
                fontWeight: "600",
                fontSize: "22px",
                height: "2px",
              }}
            >
              Attendance Details
            </p>
            <CardComponent
              backgroundColor={"#F1F1F1"}
              sx={{
                display: "flex",
                marginTop: "0vh",
                width: "14vh",
                boxShadow: "none",
              }}
            >
              <Stack sx={{ width: "18vh", display: "flex", gap: "0.4vh" }}>
                <Select
                  value={selectedMonth}
                  onChange={handleMonthChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Month" }}
                >
                  <MenuItem value="" disabled>
                    Select Month
                  </MenuItem>
                  {months.map((month, index) => (
                    <MenuItem key={month} value={index + 1}>
                      {month}
                    </MenuItem>
                  ))}
                </Select>
                <Select
                  value={selectedYear}
                  onChange={handleYearChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Year" }}
                >
                  <MenuItem value="" disabled>
                    Select Year
                  </MenuItem>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </Stack>
            </CardComponent>
          </div>
          <div className="secondChartContainer">
            <ResponsiveContainer
              width="97%"
              height="83%"
              style={{ paddingTop: "2vh", marginLeft: "2vh" }}
            >
              <AreaChart
                width={500}
                height={400}
                data={chartData}
                margin={{
                  top: 2,
                  right: 40,
                  left: 0,
                  bottom: 0,
                }}
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(16, 82, 159, 0.56)" />
                    <stop offset="60%" stopColor="rgba(14, 104, 210, 0.48)" />
                    <stop offset="100%" stopColor="rgba(14, 104, 210, 0.32)" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                  tickFormatter={(value) => {
                    const index = Math.floor(value / 1000);
                    return yAxisLabels[index] || "";
                  }}
                  domain={[0, 8000]}
                  ticks={[0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000]}
                />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="timeSpent"
                  stroke="#2379CC"
                  fill="url(#gradient)"
                >
                  {chartData.map((entry, index) => (
                    <Label
                      key={`label-${index}`}
                      value={entry.uv}
                      position="top"
                      fill="#000"
                      fontSize={10}
                      offset={10}
                    />
                  ))}
                </Area>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardComponent>
      </div>
      <div className="secondContainer">
        <CardComponent
          sx={{
            width: "91%",
            boxShadow: "none",
            marginTop: "0vh",
            height: "32vh",
          }}
        >
          <div className="attendanceTitle">
            <p
              style={{ fontSize: "21px", fontWeight: "600", alignSelf: "end" }}
            >
              Total Attendance
            </p>
            <div className="filterContainer">
              <FormControl sx={{ width: "7.3vh" }}>
                <InputLabel
                  sx={{ top: "-10px", left: "-4px", color: "#979FA6" }}
                  id="demo-simple-select-label"
                >
                  Filter
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  MenuProps={menuProps}
                >
                  <StyledMenuItem value={10}>Ten</StyledMenuItem>
                  <StyledMenuItem value={20}>Twenty</StyledMenuItem>
                  <StyledMenuItem value={30}>Thirty</StyledMenuItem>
                </Select>
              </FormControl>
              <span className="searchContainer">
                <SearchIcon className="searchIcon" sx={{ bottom: "1vh" }} />
                <input
                  className="searchBar"
                  style={{ marginTop: "-2vh", width: "15.3vh" }}
                  type="text"
                  placeholder="Search"
                />
              </span>
            </div>
          </div>
          <Box sx={{ height: "85%", width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 4,
                  },
                },
              }}
              pageSizeOptions={[4]}
              rowHeight={54}
              disableRowSelectionOnClick
              getRowClassName={getRowClassName}
              disableColumnMenu
              disableColumnSorting
              disableColumnResize
            />
          </Box>
        </CardComponent>
      </div>
    </div>
  );
}
