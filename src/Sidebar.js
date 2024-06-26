import React, { useState,useEffect } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate,useLocation } from "react-router-dom";
import { sidebarItems } from "./modules/SidebarItems";
import "./styling/sidebar.css";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { LogoutOutlined } from "@mui/icons-material";

const drawerWidth = 300;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(() => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
}));

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialIndex = sidebarItems.findIndex(item => item.navigation === location.pathname);
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  useEffect(() => {
    if (selectedIndex === -1) {
      setSelectedIndex(0);
      navigate(sidebarItems[0].navigation);
    }
  }, [selectedIndex, navigate]);

  const handleListItemClick = (event, index, navigation) => {
    setSelectedIndex(index);
    navigate(navigation);
  };

  return (
    <Drawer variant="permanent" >
      <Divider />
      <List className="list">
       
        <img
            style={{ height: "4vh", width: "5vh" }}
            className="imageLogo"
            src="	https://lms.mikrostartech.com/static/media/login_logo.1ed5c701cd708e1e8b66.png"
            alt=""
          />
        {sidebarItems.map((item, index) => {
          if (item.caption) {
            return (
              <ListItem key={index} disablePadding sx={{ display: "block" }}>
                <ListItemText primary={item.caption} className="caption" />
              </ListItem>
            );
          } else {
            return (
              <ListItem
                key={index}
                disablePadding
                sx={{ display: "block", paddingTop: "1vh", paddingLeft: "4vh" }}
                onClick={(event) => handleListItemClick(event, index, item.navigation)}
              >
                <ListItemButton
                  selected={selectedIndex === index}
                  disableRipple
                  disableTouchRipple
                  sx={{
                    minHeight: 48,
                    justifyContent: "center",
                    px: 2.5,
                    marginRight: "4vh",
                    borderRadius: "1.3vh",
                    "&:hover": {
                      backgroundColor: "inherit",
                      color: "inherit", 
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#2379CC",
                      color: "#FBFBFB",
                    },
                    "&.Mui-focusVisible": {
                      backgroundColor: "#2379CC",
                      color: "#FBFBFB",
                    },
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            );
          }
        })}
        
        <span className="sideBarBottom" onClick={()=>{
            localStorage.clear();
            navigate("/login")
          }}>
          <p style={{ marginLeft: "-1.5vh", color: "#6C7882", fontSize: "12px" }}>Account</p>
          <p className="drawerParagraph"> <LogoutOutlined /> Log Out</p>  
        </span>
      </List>
    </Drawer>
  );
};

export default Sidebar;
