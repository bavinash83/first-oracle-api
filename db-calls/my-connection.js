var mysql = require('mysql');
module.exports = class myconnect{
  constructor(){
      this.myconnect = "";
  }

  mycon(){
    
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Admin123"
    });
    
    con.connect(function(err) {
        if (err) throw err;
        var respJSON = con.query("SELECT * FROM myscorecard.users", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });
    return this.myconnect = respJSON;
  }
}
