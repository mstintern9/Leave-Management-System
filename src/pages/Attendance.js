import React from "react";
import "../styling/attendance.css";
import CardComponent from "../components/cardComponent";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import { InputLabel } from "@mui/material";
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
import Stack from '@mui/material/Stack';

const data = [
  { name: "January", uv: 7000, pv: 2400, amt: 2400 },
  { name: "February", uv: 6500, pv: 1398, amt: 2210 },
  { name: "March", uv: 5400, pv: 9800, amt: 2290 },
  { name: "April", uv: 3580, pv: 3908, amt: 2000 },
  { name: "May", uv: 6590, pv: 4800, amt: 2181 },
  { name: "June", uv: 4600, pv: 3800, amt: 2500 },
  { name: "August", uv: 5000, pv: 4300, amt: 2100 },
  { name: "September", uv: 3590, pv: 4300, amt: 2100 },
  { name: "October", uv: 3490, pv: 4300, amt: 2100 },
  { name: "November", uv: 4490, pv: 4300, amt: 2100 },
  { name: "December", uv: 5690, pv: 4300, amt: 2100 },
];

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
    field: "image",
    headerName: "Image",
    width: 197,
    headerClassName: "header-cell",
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Profile"
        style={{ width: 35, height: 37, borderRadius: "50%", padding: "7px" }}
      />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    width: 170,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "checkIn",
    headerName: "Check In",
    width: 170,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "break",
    headerName: "Break",
    width: 170,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "checkOut",
    headerName: "Check out",
    width: 170,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "totalTime",
    headerName: "Total Time",
    width: 170,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 170,
    headerClassName: "header-cell",
    editable: true,
    renderCell: (params) => {
      const className = `status-cell status-${params.value.toLowerCase()}`;
      return <span className={className}>{params.value}</span>;
    },
  },
];
const rows = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s",
    name: "Sara",
    checkIn: "9:00 AM",
    break: "1 hour",
    checkOut: "---",
    totalTime: "9 hours",
    status: "Present",
  },
  {
    id: 2,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s",
    name: "Sara",
    checkIn: "9:00 AM",
    break: "1 hour",
    checkOut: "---",
    totalTime: "9 hours",
    status: "Present",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s",
    name: "Sara",
    checkIn: "9:00 AM",
    break: "1 hour",
    checkOut: "---",
    totalTime: "9 hours",
    status: "Present",
  },
  {
    id: 4,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s",
    name: "Sara",
    checkIn: "9:00 AM",
    break: "1 hour",
    checkOut: "---",
    totalTime: "9 hours",
    status: "Present",
  },
];

const getRowClassName = () => "custom-row";

export default function Attendance() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const menuProps = {
    PaperProps: {
      style: {
        marginTop: "2px",
        borderRadius: "0.8vh",
      },
    },
  };

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
              sx={{ marginTop: "0vh", width: "17vh", boxShadow: "none" }}
            >
             <Stack sx={{width:"18vh"}} >
                Daily | Monthly | Anually
             </Stack>
            </CardComponent>
          </div>
          <div className="secondChartContainer">
            <ResponsiveContainer width="97%" height="91%" style={{paddingTop:"2vh",marginLeft:"2vh"}}  >
              <AreaChart
                width={500}
                height={400}
                data={data}
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
                  dataKey="uv"
                  stroke="#2379CC"
                  fill="url(#gradient)"
                >
                  {data.map((entry, index) => (
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
            <p style={{ fontSize: "21px", fontWeight: "600",alignSelf:"end" }}>
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
