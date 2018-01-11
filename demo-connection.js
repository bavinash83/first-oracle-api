var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Admin123"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM myscorecard.users", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });