const connection = require("../Utils/db-connection");
const mysql = require("mysql2");

exports.addReminder = async (req, res) => {
  const { medicineName, datelist, time, pill, userId } = req.body;
  var sql = mysql.format(
    "INSERT INTO reminders (medicine_name, datelist, time , pill, user_id) VALUES (?, ?, ?, ?, ?)",
    [medicineName, datelist, time, pill, userId]
  );

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
      message: "Reminder has been created",
    });
  });
};

exports.updateReminder = async (req, res) => {
  const { medicineName, datelist, time, pill, id } = req.body;
  var sql = mysql.format(
    `UPDATE reminders SET medicine_name = "${medicineName}" ,datelist = "${datelist}" , time = "${time}", pill = ${pill} WHERE id = ${id}`
  );

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
      message: "Reminder has been updated",
    });
  });
};

exports.deleteReminder = async (req, res) => {
  const { id } = req.query;
  var sql = mysql.format(`DELETE FROM reminders WHERE id = ${id}`);
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
      message: "Reminder has been deleted",
    });
  });
};

exports.getReminder = async (req, res) => {
  const { id } = req.query;
  const { userId } = req.body;
  var sql = mysql.format(
    `SELECT * FROM reminders WHERE id = ${id} AND user_id = ${userId}`
  );

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
      data: rows,
    });
  });
};

exports.getAllReminder = async (req, res) => {
  const { userId } = req.body;
  var sql = mysql.format(`SELECT * FROM reminders WHERE user_id = ${userId}`);

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
      data: rows,
    });
  });
};
