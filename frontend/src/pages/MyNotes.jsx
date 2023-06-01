import * as React from 'react';
import Box from '@mui/material/Box';
import "../styles/Sidebar.css";
import "../styles/MyNotes.css";
import { Grid, Stack  } from "@mui/material";




export default function MyNotes() {
  return (
      <Grid container="column" style={{ width: "100vw", height: "100vh" }}>
        <Grid item xs={12} md={12} style={{ backgroundColor: "#C5D6F7" }}>
          <stack>
            <h1 className="mynotesheader">My Notes</h1>
          </stack>
        </Grid>
      </Grid>
  );
}
 
