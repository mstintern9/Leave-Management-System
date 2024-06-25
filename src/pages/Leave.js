import React from "react";
import { Grid, Box } from "@mui/material";
import CardComponent from "../components/cardComponent";
import "../styling/leave.css";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import api from "../modules/Axios";

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 200,
    headerClassName: "header-cell",
  },
  {
    field: "days",
    headerName: "Days",
    width: 200,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "from",
    headerName: "Date From",
    width: 200,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "to",
    headerName: "Date to",
    width: 200,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "reason",
    headerName: "Reason",
    width: 280,
    headerClassName: "header-cell",
    editable: true,
    renderCell: (params) => {
      const className = `note-cell`;
      return <span className={className}>{params.value}</span>;
    },
  },
  {
    field: "Status",
    headerName: "Status",
    width: 200,
    headerClassName: "header-cell",
    editable: true,
    renderCell: (params) => {
      const value = params.value || ""; 
      const className = `status-cell status-${value.toLowerCase()}`;
      return <span className={className}>{value}</span>;
    },    
  },
];

const getRowClassName = () => "custom-row";

export default function Leave() {
  const [gridMd, setGridMd] = useState(window.innerWidth < 1840 ? 12 : 3);
  const [leave, setLeave] = useState([]);
  const [approvedLeaves, setApprovedLeaves] = useState(0);
  const [pendingLeaves, setPendingLeaves] = useState(0);
  const [rejectedLeaves, setRejectedLeaves] = useState(0);
  const [totalLeaves, setTotalLeaves] = useState(0);

  useEffect(() => {
    const approved = leave.filter((leave) => leave.Status === "Approved").length;
    const pending = leave.filter((leave) => leave.Status === "Pending").length;
    const rejected = leave.filter((leave) => leave.Status === "Rejected").length;
    const total = leave.length;

    setApprovedLeaves(approved);
    setPendingLeaves(pending);
    setRejectedLeaves(rejected);
    setTotalLeaves(total);
  }, [leave]);


  useEffect(() => {
    const handleResize = () => {
      setGridMd(window.innerWidth < 1800 ? 12 : 3);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const getLeaveData = async () => {
      try {
        const response = await api.get("/LeaveRequests/GetMyLeaves");
        console.log(response.data);
        setLeave(response.data); 
      } catch (error) {
        console.error("Error fetching leave data:", error);
      }
    };

    getLeaveData();
  }, []);
  const getRowId = (row) => row.ID;


  return (
    <div className="leave">
      <Box>
        <Grid container>
          <Grid item md={gridMd}>
            <CardComponent
              sx={{
                marginTop: "13vh",
                height: "11vh",
                width: "30vh",
                display: "flex",
                flexDirection: "column",
                boxShadow: "none",
              }}
            >
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "21px",
                  marginTop: "8px",
                }}
              >
                Total Leaves
              </p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#2379CC",
                }}
              >
                {totalLeaves}
              </p>
            </CardComponent>
          </Grid>
          <Grid item md={gridMd}>
            <CardComponent
              sx={{
                marginTop: "13vh",
                height: "11vh",
                width: "30vh",
                display: "flex",
                flexDirection: "column",
                boxShadow: "none",
              }}
            >
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "21px",
                  marginTop: "8px",
                }}
              >
                Approved Leaves
              </p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#1ED230",
                }}
              >
                {approvedLeaves}
              </p>
            </CardComponent>
          </Grid>
          <Grid item md={gridMd}>
            <CardComponent
              sx={{
                marginTop: "13vh",
                height: "11vh",
                width: "30vh",
                display: "flex",
                flexDirection: "column",
                boxShadow: "none",
              }}
            >
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "21px",
                  marginTop: "8px",
                }}
              >
                Pending Leaves
              </p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#2379CC",
                }}
              >
                {pendingLeaves}
              </p>
            </CardComponent>
          </Grid>
          <Grid item md={gridMd}>
            <CardComponent
              sx={{
                marginTop: "13vh",
                height: "11vh",
                width: "30vh",
                display: "flex",
                flexDirection: "column",
                boxShadow: "none",
              }}
            >
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "21px",
                  marginTop: "8px",
                }}
              >
                Rejected Leaves
              </p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#2379CC",
                }}
              >
                {rejectedLeaves}
              </p>
            </CardComponent>
          </Grid>
        </Grid>
      </Box>
      <div className="leaveRow">
        <p style={{ fontSize: "18px", fontWeight: "600" }}>Availed Leaves</p>
        <button className="applyLeave">Apply leave</button>
      </div>
      <div className="leaveTable">
        <CardComponent
          sx={{
            marginTop: "0.3vh",
            width: "98%",
            height: "92%",
            boxShadow: "none",
            paddingBottom: "36px",
            paddingRight: "22px",
          }}
        >
          <Box sx={{ height: "100%", width: "100%" }}>
           
            <DataGrid
              rows={leave}
              columns={columns}
              getRowId={getRowId} 
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[10]}
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
