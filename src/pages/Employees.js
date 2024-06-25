import React from "react";
import "../styling/employees.css";
import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import { Grid, Box } from "@mui/material";
import CardComponent from "../components/cardComponent";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import api from "../modules/Axios";

export default function Employees() {
  const [age, setAge] = React.useState("");
  const [employees, setEmployees] = useState([]);

  const [dimensions, setDimensions] = useState({
    height: "26vh",
    width: "22vh",
  });

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerHeight < 750) {
        setDimensions({
          height: "40vh",
          width: "29vh",
        });
      } else {
        setDimensions({
          height: "26vh",
          width: "22vh",
        });
      }
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

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

  // useEffect(() => {
  //   const getEmployeeData = async () => {
  //     try {
  //       const response = await api.get("/AuthUser/GetAllUsers");
  //       console.log(response.data);
  //       setEmployees(response.data);
  //     } catch (error) {
  //       console.error("Error fetching employee data:", error);
  //     }
  //   };

  //   getEmployeeData();
  // }, []);

  const rows = [];
  for (let i = 0; i < employees.length; i += 5) {
    rows.push(employees.slice(i, i + 5));
  }

  return (
    <div className="employees">
      <div className="firstRow">
        <button className="addEmployee">Add Employee</button>
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
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {employees.map((employee, index) => (
            <Grid item md={2.4} key={employee.id}>
              <CardComponent
                sx={{
                  gap: '2.4vh',
                  display: 'flex',
                  width: dimensions.width,
                  marginTop: '-1vh',
                  height: dimensions.height,
                  boxShadow: 'none',
                }}
              >
                <Grid container >
                  <Grid item md={11}>
                    <span className="employeeTitle">
                      <img
                        className="employeeImage"
                        src={`https://pkdservers.com/lmsdev/api${employee.ProfilePicture}`}
                        alt={employee.name}
                      />
                      <p style={{ fontSize: '15px', fontWeight: '600' }}>{employee.Name}</p>
                    </span>
                    <span className="employeeInformation">
                      <p className="informationRow">
                        <PeopleOutlineOutlinedIcon />
                        {employee.Roles[0]}
                      </p>
                      <p className="informationRow">
                        <TodayOutlinedIcon />
                        {employee.probation.substring(0, employee.probation.indexOf('T'))}
                      </p>
                      <p className="informationRow">
                        <EmailOutlinedIcon />
                        {employee.Email}
                      </p>
                      <p className="informationRow">
                        <BusinessOutlinedIcon />
                        {employee.department}
                      </p>
                    </span>
                  </Grid>
                  <Grid item md={1}>
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="26" height="26" rx="5" fill="#F5F6FA" />
                      <path
                        d="M13 11C11.9008 11 11 11.9008 11 13C11 14.0992 11.9008 15 13 15C14.0992 15 15 14.0992 15 13C15 11.9008 14.0992 11 13 11Z"
                        fill="#8F8F8F"
                      />
                      <path
                        d="M13 5C11.9008 5 11 5.90076 11 7C11 8.09924 11.9008 9 13 9C14.0992 9 15 8.09924 15 7C15 5.90076 14.0992 5 13 5Z"
                        fill="#8F8F8F"
                      />
                      <path
                        d="M13 17C11.9008 17 11 17.9008 11 19C11 20.0992 11.9008 21 13 21C14.0992 21 15 20.0992 15 19C15 17.9008 14.0992 17 13 17Z"
                        fill="#8F8F8F"
                      />
                    </svg>
                  </Grid>
                </Grid>
              </CardComponent>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
