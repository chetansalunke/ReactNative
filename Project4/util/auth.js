import axios from "axios";

const API_KEY = "AIzaSyB8DPkWwO6tvViJl2gBMoLnHPrKbjdw5JE";

async function createUser(email, password) {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );

    // Handle the response as needed
    console.log("User created successfully:", response.data);
    
    // If you need to extract something from the response, return it
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Error creating user:", error.response.data);
    throw error; // Rethrow the error to be caught by the calling function
  }
}

export default createUser;
