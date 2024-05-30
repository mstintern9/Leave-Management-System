import React from "react";
import "../styling/dashboard.css";
import CardComponent from "../components/cardComponent";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="title">
        <p style={{color:"#2379CC",fontSize:"20px",fontWeight:500,paddingTop:"1vh"}} >Welcome Test User!</p>
        <p style={{color:"#979FA6",fontWeight:500,fontSize:"16px"}} >Dashboard</p>
      </div>
      <div className="currentEmployees">bbbbbbbb</div>
      <div className="calender">cccccccccccccc</div>
      <div className="activity">ddddddddddddddd</div>
    </div>
  );
}
