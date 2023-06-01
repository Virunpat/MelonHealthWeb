import { FormControlLabel, Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../styles/Login.css";
import { useState } from "react";
import axios from "axios";
import { CheckBox } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

function Loginpage(props) {
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const onLogin = () => {
    axios
      .post("http://localhost:3000/login", { username, password })
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          // eslint-disable-next-line react/prop-types
          props.setIsLogin(true)
          navigate("/Reminder")
        } else window.alert("userName or password is invalid");
      });
  };

  return (
    <Grid
      container="column"
      style={{ width: "100vw", height: "100vh" }}
      position="fixed"
    >
      <Grid
        item
        xs={0}
        sm={0}
        md={3}
        style={{ backgroundColor: "#FFFFFF" }}
      ></Grid>
      <Box sx={imgstyles}>
        <img className="pic1" src="src\assets\Vector 9.png "></img>
        <img className="pic2" src="src\assets\9 (1).png"></img>
      </Box>
      <Grid item xs={12} md={9}>
        <Stack className="TF" direction="column" alignItems="center">
          <h1 className="tologin" style={{ textAlign: "center" }}>
            Log in to your Account
          </h1>

          <TextField
            sx={{ width: "55%" }}
            margin="normal"
            type={"userName"}
            label="User Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            sx={{ width: "55%" }}
            margin="normal"
            type={"password"}
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Stack
            className="TF2"
            direction="row"
            spacing={{ xs: 1, md: "372px" }}
          >
            <FormControlLabel
              control={<CheckBox color="primary" />}
              label=" Remember me "
              className="rememberMe"
            />

            <Typography>
              <Link className="forgotpassword" href="#">
                Forgot passsword ?
              </Link>
            </Typography>
          </Stack>

          <button className="Login1" type="submit" onClick={onLogin}>
            Log in
          </button>
          <Typography>
            <Link className="nothaveanAccount" to="/Signup">
              Do you have an Account yet ? Sign up
            </Link>
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Loginpage;

// const picStyles = {
//   position: 'absolute',
//   bottom: '0',
//   left:  '200px',
//  };

const imgstyles = {
  display: { xs: "none", sm: "none ", md: "block" },
};
