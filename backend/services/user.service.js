const connection = require("../Utils/db-connection");
const mysql = require("mysql2");

module.exports = async (req, res) => {
  const { userId } = req.body;
  var sql = mysql.format(
    `SELECT Name,Email FROM user WHERE id = ${userId}`
  );

  connection.query(sql, (err, rows) => {
    if (err) {
      return res.json({
        success: false,
        data: null,
        error: err.message,
      });
    }
    const row = rows[0] || {}
    res.json({
      success: true,
      data: row,
    });
  });
};
