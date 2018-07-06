var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "nutanix/4u",
   database: "Uptick",
   port:32777
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
});

module.exports = mysqlConnection;
