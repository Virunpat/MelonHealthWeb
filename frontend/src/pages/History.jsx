import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import HistoryIcon from '@mui/icons-material/History';
// import EditNoteIcon from '@mui/icons-material/EditNote';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LogoutIcon from '@mui/icons-material/Logout';
import "../styles/Sidebar.css";
import "../styles/History.css";
import { Link } from 'react-router-dom';
import { Grid, Stack  } from "@mui/material";
import Sidebar from "../components/Sidebar";





export default function History() {
  return (
    <Box sx={{ display: "flex" }}>
      <box>
        <Sidebar />
      </box>
      <Grid container="column" style={{ width: "100vw", height: "100vh" }}>
        <Grid item xs={12} md={12} style={{ backgroundColor: "#C5D6F7" }}>
          <stack>
            <h1 className="Historyheader">History</h1>
          </stack>
          <Box></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
 
