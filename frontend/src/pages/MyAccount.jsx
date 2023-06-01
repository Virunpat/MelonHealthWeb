import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import "../styles/Sidebar.css";
import "../styles/MyAccount.css";
import { Grid  } from "@mui/material";
import Axios from "../AxiosInstance";

export default  function MyAccount() {
  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    Axios.get("http://localhost:3000/user", {
      headers: { Authorization: localStorage.getItem("token") },
    }).then((res) => {
      console.log("🚀 ~ file: MyAccount.jsx:19 ~ reloadRemiderList ~ res.data.data:", res.data.data)
    });
  };

  return (
      <Grid container="column" style={{ width: "100vw", height: "100vh" }}>
        <Grid item xs={12} md={12} style={{ backgroundColor: "#C5D6F7" }}>
          <stack>
            <h1 className="myaccountheader">My Account</h1>
          </stack>
          <Box></Box>
        </Grid>
      </Grid>
  );
}
 
