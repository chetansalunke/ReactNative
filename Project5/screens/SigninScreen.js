import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import Category from "../models/category";
import login from "../util/auth";
import axios from "axios";

const SigninScreen = ({ navigation }) => {
  //   const navigation = useNavigation();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSignInButton = async () => {
    try {
      const email = values.email;
      const password = values.password;

      if (email && password) {
        console.log("fetch something");
        // navigation.navigate('SignUp');
        const fetchData = async () => {
          try {
            const response = await axios.post('http://192.168.0.161:3000/api/login_user',{email,password});
            console.log(response.data.status);
            const status = response.data.status
            if(status === 1){
              navigation.navigate("All Category");
            }
            else{
              ToastAndroid.show('enter valid email password !',ToastAndroid.SHORT);
            }
          } catch (error) {
            console.log(error.message);
          }
        };
      
        fetchData(); 
        
      } else {
        console.log("Enter Valid email & password");
      }
    } catch (error) {
      console.log("Error during sign-in:", error.message);
     
    }
  };
  const signUpTextHandler = () => {
    
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={values.email}
          onChangeText={(text) => setValues({ ...values, email: text })}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={values.password}
          onChangeText={(text) => setValues({ ...values, password: text })}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignInButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.footerLink} onPress={signUpTextHandler}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 16,
  },
  input: {
    fontSize: 16,
    padding: 8,
  },
  button: {
    width: "80%",
    backgroundColor: "#368dff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 50,
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "gray",
  },
  footerLink: {
    fontSize: 16,
    color: "#368dff",
    fontWeight: "bold",
  },
});

export default SigninScreen;
