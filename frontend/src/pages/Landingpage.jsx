import { Box, Button, Grid, Stack } from "@mui/material";
import "../styles/Landingpage.css";


const buttonStyles = {
  backgroundColor: '#2D89FF',
  marginLeft: {xs:'100px', sm: '150px', md: '200px'},
  marginTop: '20px',
  color: 'aliceblue',
  width: {xs:'100px', sm: '150px', md: '200px'},
  fontSize: {xs:'14px', sm: '16px', md: '20px'},
  fontWeight: 'bold',
  borderRadius: '70px',
};
function GoToLoginpage() {
  window.location.href = "/Login";
}

function GoToSignuppage() {
  window.location.href = "/Signup";
}

function Landingpage() {
  
  return (
    <Box>
      <nav>
        <Stack justifyContent={"space-between"} direction={"row"}>
          <img
            className="logo"
            src="src\assets\Melon Health.png"
            style={{ height: "70%" }}
          ></img>
          <Box sx={{display: {xs: "none", md: "block"}}}>
            <button className="loginL" onClick={GoToLoginpage}>
              Log in
            </button>
            <button className="signupL" onClick={GoToSignuppage}>
              Sign up
            </button>
          </Box>
        </Stack>
      </nav>
      <div>
        <Grid container>
          <Grid item xs={4} sm={4} md={4}>
            <img className="pic" src="src\assets\_0007.png"></img>
          </Grid>
          <Grid item xs={8} sm={8} md={8} sx={{fontSize: {xs: "8px", sm: "10px", md:"12px"}}}>
            <h1 className="text">
              "Stay on top of your meds, Get customizable schedules and
              notifications to never miss a dose again."
            </h1>
            <Button sx={buttonStyles} onClick={GoToSignuppage}>
              Sign up
            </Button>
          </Grid>
        </Grid>
      </div>
    </Box>
   
  );
}

export default Landingpage;
