

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

app.set("view engine","ejs");

app.use((req,res,next)=>{

    // console.log("moye moye");
    next();

})
app.get("/",(request,response)=>{
    response.render("index");
})
app.get("/profile",(request,response)=>{
    
})

app.listen(3000,()=>{
    console.log("Server is running on the port 3000");
})