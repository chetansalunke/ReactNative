

// const mysql = require('mysql2');

// // create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password:'abc54321',
//   database: 'api',
// });

// // execute will internally call prepare and query
// connection.execute(
//   'SELECT * FROM api.register_user',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     console.log(fields); // fields contains extra meta data about results, if available
//   }
// );


const express = require('express');

const app = express();

// MIDDELWARES
app.use(express.json()); // To return files as json

// ROUTES
app.use("/api",require('./routes/router'));

app.listen(3000,()=>{
console.log("The server is started running on the port 3000");
});