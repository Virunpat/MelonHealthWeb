const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const connection = require("../Utils/db-connection");
const hmacSHA512 = require("crypto-js/hmac-sha512");

module.exports = async (req, res) => {
  const Name = req.body.username;
  const password = req.body.password;

  var sql = mysql.format(" SELECT * FROM user WHERE Name = ?", [Name]);

  console.log("DEBUG: /Login =>" + sql);
  connection.query(sql, async (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }
    if (rows.length === 0) {
      return res.json({
        success: false,
        data: null,
        error: "Invalid username or password",
      });
    }

    const user = rows[0];

    // Verify the password

    const isMatch = await bcrypt.compare(
      password.toString(),
      user.hashed_password
    ); //(password.toString(), "privateKey")==user.hashed_password
    console.log(isMatch, password.toString());
    if (!isMatch) {
      return res.json({
        success: false,
        data: null,
        error: "Invalid username or password",
      });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, "your_secret_key");

    return res.json({
      success: true,
      data: user,
      token: token,
      error: null,
    });
  });
};
