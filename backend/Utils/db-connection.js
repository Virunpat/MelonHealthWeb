const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "server2.bsthun.com",
    port: "6105",
    user: "lab_28juue",
    password: "r72eaNJvHksi9dLP",
    database: "lab_blank01_283ngpj",
  });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con
  