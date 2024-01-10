// UserController.js

const connection = require('../db');

// Function to get all users
const getAllUsers = (req, res) => {
  connection.execute('SELECT * FROM api.register_user', (err, result, fields) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.status(200).json(result);
  });
};

const createUser = (req, res) => {
    connection.execute('SELECT * FROM api.register_user', (err, result, fields) => {
      if (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      res.status(200).json(result);
    });
  };
  
module.exports = {
  getAllUsers,
};
