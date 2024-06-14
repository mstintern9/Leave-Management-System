import React from "react";
import "../styling/employees.css";
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
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

export default function Employees() {
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
      <Box>
        <Grid sx={{display:"flex",flexDirection:"column" ,height: "92vh",gap:"2vh"}}  >
          <Grid className="grid-row">
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
          </Grid>
          <Grid className="grid-row">
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
          </Grid>
          <Grid className="grid-row">
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
            <Grid item md={2.4}>
              <CardComponent
                sx={{
                  gap: "2.4vh",
                  display: "flex",
                  width: "22vh",
                  marginTop: "-1vh",
                  height: "26vh",
                  boxShadow: "none",
                }}
              >
                <Grid md={11}>
                  <span className="employeeTitle">
                    <img
                      className="employeeImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"
                      alt=""
                    />
                    <p style={{ fontSize: "17px", fontWeight: "600" }}>Sana</p>
                  </span>
                  <span className="employeeInformation">
                    <p className="informationRow">
                      <PeopleOutlineOutlinedIcon />
                      Product Designer
                    </p>
                    <p className="informationRow">
                      <TodayOutlinedIcon />
                      Feb 26,2023
                    </p>
                    <p className="informationRow">
                      <EmailOutlinedIcon />
                      Sana56@yahoo.com
                    </p>
                    <p className="informationRow">
                      <CallOutlinedIcon />
                      950-069-0890
                    </p>
                  </span>
                </Grid>
                <Grid md={1}>
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
              </CardComponent>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
