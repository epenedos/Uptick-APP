var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host: "172.17.0.2",
   user: "root",
   password: "nutanix/4u",
   database: "Uptick",
   port:3306
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
});

module.exports = mysqlConnection;
