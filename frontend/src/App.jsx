import { useState } from "react";
import Landingpage from "./pages/Landingpage";
import { Box } from "@mui/material";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Reminder from "./pages/Reminder";
import MyAccount from "./pages/MyAccount";
import History from "./pages/History";
import MyNotes from "./pages/MyNotes";
import Sidebar from "./components/Sidebar";
import './App.css';

function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(localStorage.getItem("token"));

  return (
    <Box>
      {!isLogin ? (
        <Routes>
          <Route
            exect
            path="/"
            element={
              <Landingpage userLogin={userLogin} setUserLogin={setUserLogin} />
            }
          />
          <Route exect path="/Signup" element={<Signup />} />
          <Route exect path="/Login" element={<Login setIsLogin={setIsLogin} />} />
          <Route path="/*" element={<Navigate to="/Login" />} />
        </Routes>
      ) : (
        <Box sx={{ display: "flex" }}>
          <Box>
            <Sidebar setIsLogin={setIsLogin}  />
          </Box>
        <Routes>
          <Route path="/Reminder" element={<Reminder />} />
          <Route path="/History" element={<History />} />
          <Route path="/MyNotes" element={<MyNotes />} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/*" element={<Navigate to="/Reminder" />} />
        </Routes>
          </Box>
      )}
    </Box>
  );
}

export default App;
