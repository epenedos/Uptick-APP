var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host: "0.0.0.0",
   user: "root",
   password: "nutanix/4u",
   database: "Uptick",
   port:3306
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
});

module.exports = mysqlConnection;
