import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../styles/Signup.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../AxiosInstance";



function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      const data = {
        username: values.name,
        password: values.password,
        email: values.email
      }
      const response = await Axios.post("/register", data);
      if (response.data.success) {
        // console.log(response); 
        navigate('/Login')
      } else {
        console.error(response.data.error);
      }
    } catch (e) {
      if (e.response) {
        console.error(e.response.data.error);
      }
    }
  };

  return (
    <Grid
      container
      style={{ width: "100vw", height: "100vh" }}
      position="fixed"
    >
      <Grid item xs={0} md={3} style={{ backgroundColor: "#FFFFFF" }}></Grid>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <img className="pic3" src="src\assets\Vector 9.png "></img>
        <img className="pic4" src="src\assets\07.png "></img>
      </Box>
      <Grid item xs={12} md={9}>
        <Stack className="TF" direction="column" alignItems="center">
          <h1 className="tosignup" style={{ textAlign: "center" }}>
            Create Account
          </h1>

          <TextField
            sx={{ width: "55%" }}
            margin="normal"
            type={"name"}
            name="name"
            label="User Name"
            onChange={handleInput}
          />
          <TextField
            sx={{ width: "55%" }}
            margin="normal"
            type={"email"}
            name="email"
            label="email address"
            onChange={handleInput}
          />

          <TextField
            sx={{ width: "55%" }}
            margin="normal"
            type={"password"}
            name="password"
            label="Password"
            onChange={handleInput}
          />

          {/* <TextField
                sx={{ width: "55%" }}
                margin="normal"
                type={"password"}
                label="Enter password"
                
              /> */}
          <button
            onClick={handleSubmit}
            className="CA"
            style={{ zIndex: "9999" }}
          >
            {" "}
            Create account
          </button>

          <Typography>
            <Link className="haveanAccount" to="/Login">
              Already have an Account yet ? Log in
            </Link>
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Signup;
