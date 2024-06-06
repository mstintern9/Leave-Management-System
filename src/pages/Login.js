import React from "react";
import CardComponent from "../components/cardComponent";
import "../styling/login.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import { InputLabel } from "@mui/material";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login">
      <CardComponent
        sx={{
          height: "23vh",
          boxShadow:
            "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
          height: " 75%",
          width: "19%",
          marginLeft: "78vh",
          marginTop: "19vh",
        }}
      >
        <div className="form">
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "2.5rem",
              color: "rgba(0, 128, 252, 1)",
              fontWeight: "700",
            }}
            variant="h5"
            component="h1"
            gutterBottom
          >
            <img className="imageLogo"
              src="	https://lms.mikrostartech.com/static/media/login_logo.1ed5c701cd708e1e8b66.png"
              alt=""
            />
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              height: "46vh",
              marginTop: "3.4vh",
            }}
          >
            <InputLabel>Username:</InputLabel>
            <TextField
              required
              id="username"
              label="Username"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  height: "5.5vh",
                },
              }}
            />
            <InputLabel>Password:</InputLabel>
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  height: "5.5vh",
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                height: "4.7vh",
                width: "11vh",
                marginLeft: "14vh",
                borderRadius: 2,
              }}
            >
              Submit
            </Button>
          </Box>
        </div>
      </CardComponent>
    </div>
  );
}
