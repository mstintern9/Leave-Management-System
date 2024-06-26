import React from "react";
import "./styling/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import AppBar from "@mui/material/AppBar";
import { Grid } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar sx={{ background: "#fbfbfb", boxShadow: "none",position:"fixed" }}>
      <Grid style={{display:"flex" ,justifyContent:"space-evenly" }} >
        <Grid md={6} sx={{display:"flex"}} >
        </Grid>
        <Grid md={6} sx={{display:"flex",gap:"2vh"}}>
        </Grid>
      </Grid>
    </AppBar>
  );
}
