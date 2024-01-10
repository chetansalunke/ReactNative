

const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'abc54321',
  database: 'api',
});

// // execute will internally call prepare and query
// connection.execute(
//   'SELECT * FROM api.register_user',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

module.exports = connection; 