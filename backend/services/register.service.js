const connection = require("../Utils/db-connection")
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const crypto = require("crypto-js");


module.exports = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

 

  // const salt1 = await bcrypt.genSalt(9);
  // console.log("Salt #1: ", salt1);
  // const hash1 = await bcrypt.hash(password.toString(), salt1);
  // console.log("Hash #1: ", hash1);
  

  var sql = mysql.format(
    "INSERT INTO user (Name, Email, hashed_password) VALUES (?, ?, ?)",
    [username, email,bcrypt.hashSync(password.toString())]
  );
  console.log(bcrypt.hashSync("my password"))

  connection.query(sql, (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }
    res.json({
      success: true,
      message: "User has been created",
    });
  });
};
