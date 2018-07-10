var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host: "10.30.8.161",
   user: "root",
   password: "nutanix/4u",
   database: "Uptick",
   port:32792
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
});

module.exports = mysqlConnection;
