// UserController.js

const connection = require("../db");

// Function to get all users
const getAllUsers = (req, res) => {
  connection.execute(
    "SELECT * FROM api.register_user",
    (err, result, fields) => {
      if (err) {
        console.error("Error fetching users:", err);
        res.status(500).send("Internal Server Error");
        return;
      }

      res.status(200).json(result);
    }
  );
};

const createUser = (req, res) => {
  // destructure the value from the req.body
  const { user_name, email, password, mobile_no } = req.body;
  const user = connection.execute(
    "select * from api.register_user where email=?",
    [email],
    (err, result, fields) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log(result.length);
      }

      // check the email already present
      if (result.length !== 0) {
        res.status(200).json({ message: "User Already Register" });
      } else {
        connection.execute(
          "INSERT INTO api.register_user (user_name, email, password, mobile_no) VALUES (?, ?, ?, ?)",
          [user_name, email, password, mobile_no],
          (err, result, fields) => {
            if (err) {
              console.error("Error inserting user:", err);
              res.status(500).send("Internal Server Error");
              return;
            }
            res.status(200).json({ message: "User register" });
            // res.status(200).json({message:"New User Created !!!"});
            console.log("data inserted !!!");
          }
        );
      }
    }
  );
};

  const getAllCategory = (req, res) => {

    connection.execute('select * from api.product',(err,result,fields)=>{
      if(err)
      {
        res.status(500).send({message:"Error while fatching category"},err);
        console.log(err.message);
        return;
      }

      res.send(result);

    })

  };
const getProduceId = (req, res) => {

  const id = req.params.id;
  console.log(id);

  connection.execute('SELECT * FROM api.product where category_id= ? ',[id],(err,result,fields)=>{
    if(err)
    {
      res.status(500).send({message:"Error while fatching category"},err);
      console.log(err.message);
      return;
    }
    res.send(result);
    

  })

};

module.exports = {
  getAllUsers,
  createUser,
  getAllCategory,
  getProduceId,
};
