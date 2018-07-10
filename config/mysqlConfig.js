var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host: "172.16.154.35",
   user: "root",
   password: "nutanix/4u",
   database: "Uptick",
   port:32778
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
});

module.exports = mysqlConnection;
