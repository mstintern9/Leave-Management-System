import React from "react";
import { Grid, Box } from "@mui/material";
import CardComponent from "../components/cardComponent";
import "../styling/leave.css";
import { DataGrid } from "@mui/x-data-grid";
import { useState,useEffect } from "react";

const columns = [
  {
    field: "leaveType",
    headerName: "Leave Type",
    width: 200,
    headerClassName: "header-cell",
  },
  {
    field: "duration",
    headerName: "Duration",
    width: 200,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "dateFrom",
    headerName: "Date From",
    width: 200,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "dateTo",
    headerName: "Date to",
    width: 200,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "note",
    headerName: "Note",
    width: 200,
    headerClassName: "header-cell",
    editable: true,
    renderCell: (params) => {
      const className = `note-cell`;
      return <span className={className}>{params.value}</span>;
    },
  },
  {
    field: "addedOn",
    headerName: "Added on",
    width: 200,
    headerClassName: "header-cell",
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
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
    leaveType: "Sick Leave",
    duration: "2 days",
    dateFrom: "2023-01-15",
    dateTo: "2023-01-17",
    note: "Flu",
    addedOn: "2023-01-14",
    status: "Approved",
  },
  {
    id: 2,
    leaveType: "Vacation",
    duration: "1 week",
    dateFrom: "2023-02-10",
    dateTo: "2023-02-17",
    note: "Family trip",
    addedOn: "2023-02-05",
    status: "Approved",
  },
  {
    id: 3,
    leaveType: "Sick Leave",
    duration: "1 day",
    dateFrom: "2023-03-05",
    dateTo: "2023-03-06",
    note: "Doctor appointment",
    addedOn: "2023-03-04",
    status: "Rejected",
  },
  {
    id: 4,
    leaveType: "Personal Leave",
    duration: "3 days",
    dateFrom: "2023-04-12",
    dateTo: "2023-04-15",
    note: "Moving",
    addedOn: "2023-04-10",
    status: "Approved",
  },
  {
    id: 5,
    leaveType: "Vacation",
    duration: "2 weeks",
    dateFrom: "2023-05-01",
    dateTo: "2023-05-15",
    note: "Europe trip",
    addedOn: "2023-04-20",
    status: "Approved",
  },
  {
    id: 6,
    leaveType: "Sick Leave",
    duration: "4 days",
    dateFrom: "2023-06-01",
    dateTo: "2023-06-05",
    note: "Recovery from surgery",
    addedOn: "2023-05-30",
    status: "Rejected",
  },
  {
    id: 7,
    leaveType: "Maternity Leave",
    duration: "3 months",
    dateFrom: "2023-07-01",
    dateTo: "2023-09-30",
    note: "Childbirth",
    addedOn: "2023-06-15",
    status: "Approved",
  },
  {
    id: 8,
    leaveType: "Sick Leave",
    duration: "1 week",
    dateFrom: "2023-10-10",
    dateTo: "2023-10-17",
    note: "Covid-19",
    addedOn: "2023-10-08",
    status: "Approved",
  },
  {
    id: 9,
    leaveType: "Vacation",
    duration: "2 weeks",
    dateFrom: "2023-11-20",
    dateTo: "2023-12-04",
    note: "Honeymoon",
    addedOn: "2023-11-10",
    status: "Approved",
  },
  {
    id: 10,
    leaveType: "Vacation",
    duration: "2 weeks",
    dateFrom: "2023-11-20",
    dateTo: "2023-12-04",
    note: "Honeymoon",
    addedOn: "2023-11-10",
    status: "Approved",
  },
  {
    id: 11,
    leaveType: "Sick Leave",
    duration: "4 days",
    dateFrom: "2023-06-01",
    dateTo: "2023-06-05",
    note: "Recovery from surgery",
    addedOn: "2023-05-30",
    status: "Rejected",
  },
  {
    id: 12,
    leaveType: "Maternity Leave",
    duration: "3 months",
    dateFrom: "2023-07-01",
    dateTo: "2023-09-30",
    note: "Childbirth",
    addedOn: "2023-06-15",
    status: "Approved",
  },
  {
    id: 13,
    leaveType: "Sick Leave",
    duration: "1 week",
    dateFrom: "2023-10-10",
    dateTo: "2023-10-17",
    note: "Covid-19",
    addedOn: "2023-10-08",
    status: "Approved",
  },
  {
    id: 14,
    leaveType: "Vacation",
    duration: "2 weeks",
    dateFrom: "2023-11-20",
    dateTo: "2023-12-04",
    note: "Honeymoon",
    addedOn: "2023-11-10",
    status: "Approved",
  },
  {
    id: 15,
    leaveType: "Vacation",
    duration: "2 weeks",
    dateFrom: "2023-11-20",
    dateTo: "2023-12-04",
    note: "Honeymoon",
    addedOn: "2023-11-10",
    status: "Approved",
  },
];
const getRowClassName = () => "custom-row";

export default function Leave() {

  const [gridMd, setGridMd] = useState(window.innerWidth < 1840 ? 12 : 3);

  useEffect(() => {
    const handleResize = () => {
      setGridMd(window.innerWidth < 1800 ? 12 : 3);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="leave">
      <Box>
        <Grid container>
          <Grid className="grid-row"   >
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
                Total Leaves
              </p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#2379CC",
                }}
              >
                14
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
                Availed Leaves
              </p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#1ED230",
                }}
              >
                5
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
                Health Leaves
              </p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#2379CC",
                }}
              >
                2
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
                Other Leaves
              </p>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#2379CC",
                }}
              >
                3
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
              rows={rows}
              columns={columns}
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
