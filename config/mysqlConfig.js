var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host: "127.0.0.1",
   user: "root",
   password: "nutanix/4u",
   database: "Uptick",
   port:32778
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
});

module.exports = mysqlConnection;
