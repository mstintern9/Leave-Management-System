import React from "react";
import "./styling/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="firstForm">
        <p className="firstParagraph">
          {" "}
          <img
            style={{ height: "43px", width: "53px" }}
            className="imageLogo"
            src="	https://lms.mikrostartech.com/static/media/login_logo.1ed5c701cd708e1e8b66.png"
            alt=""
          />
        </p>
        <div className="searchContainer">
          <SearchIcon className="searchIcon" />
          <input className="searchBar" type="text" placeholder="Search" />
        </div>
        <div className="secondForm">
          <span className="icons">
            <TextsmsOutlinedIcon />
            <NotificationsNoneIcon />
          </span>
          <span className="information">
            <img
              className="informationIcon"
              src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
            ></img>
            <span className="email">
              <p
                style={{
                  height: "0vh",
                  color: "#6C7882",
                  fontWeight: 500,
                  fontSize: "14px",
                }}
              >
                Test User
              </p>
              <p
                style={{
                  height: "0vh",
                  color: "#6C7882",
                  marginTop: "0.5vh",
                  fontSize: "12px",
                }}
              >
                test@mikrostartech.com
              </p>
            </span>
            <span className="arrowIcon">
              <ExpandMoreOutlinedIcon sx={{ height: "6vh", width: "3vh" }} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
