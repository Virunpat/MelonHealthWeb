
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3000;
const register = require("./services/register.service");
const login = require("./services/login.service")
const user = require("./services/user.service")
const reminderRoute = require("./Routes/reminder.route")
var jwt = require("jsonwebtoken")


// Enable CORS for requests from http://localhost:5173
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));
app.use(cookieParser());

app.use((req, res, next) => {
  if(req.headers.authorization){
  var decoded = jwt.verify(req.headers.authorization,"your_secret_key");
  req.body.userId = decoded.userId
}
  next()
})


app.get("/", (req, res)=> res.send("Hello Check"))


//Routes
app.use("/reminder" , reminderRoute)

app.post("/register", register);

app.post("/login", login);

app.get("/user", user);






// app.get("/", (req, res) => {
//   res.status(200);
//   res.send("Welcome to root URL of Server");
// });
// app.post("/login", (req, res) => {
//   console.log(req.body);
//   if (req.body.username == "virunpat" && req.body.password == "1234") {
//     res.status(200);
//     res.json({
//       isLoginSuccess: true,
//     });
//   } else {
//     res.status(200);
//     res.json({
//       isLoginSuccess: false,
//     });
//   }
// });

// app.listen(PORT, (error) => {
//   if (!error)
//     console.log(
//       "Server is Successfully Running, and App is listening on port " + PORT
//     );
//   else console.log("Error occurred, server can't start", error);
// });

app.listen(3000, function() {
    console.log ('listening on port 3000')
})
