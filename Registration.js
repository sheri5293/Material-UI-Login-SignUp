import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Registration.css";
import { Box, Button, TextField, Typography } from "@mui/material";

const Registration = () => {
  const [isSignup, setIsSignup] = useState(false);
  console.log(isSignup);

  return (
    <div>
      <form>
        <Box
          display={"flex"}
          flexDirection={"column"}
          maxWidth={500}
          height={"800px"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={"7%"}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Sign Up" : "Login"}
          </Typography>
          {isSignup && (
            <TextField
              margin="normal"
              type={"text"}
              variant="outlined"
              placeholder="Name"
              style={{ width: "80%" }}
            />
          )}

          <TextField
            margin="normal"
            type={"Email"}
            variant="outlined"
            placeholder="Email"
            style={{ width: "80%" }}
          />

          <TextField
            margin="normal"
            type={"Password"}
            variant="outlined"
            placeholder="Password"
            style={{ width: "80%" }}
          />
          {isSignup && (
            <TextField
              margin="normal"
              type={"Confirm Password"}
              variant="outlined"
              placeholder="Confirm Password"
              style={{ width: "80%" }}
            />
          )}
          {isSignup && (
            <TextField
              margin="normal"
              type={"file"}
              variant="outlined"
              placeholder="File"
              style={{ width: "80%" }}
            />
          )}

          {isSignup && (
            <TextField
              margin="normal"
              type={"date"}
              variant="outlined"
              placeholder="Date"
            />
          )}

          <Button
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            Submit
          </Button>

          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ marginTop: 2 }}
            color="warning"
            style={{ fontSize: "25px" }}
          >
            Change To {isSignup ? "Login" : "Sign Up"}
          </Button>
        </Box>
      </form>
    </div>
  );
};
export default Registration;
