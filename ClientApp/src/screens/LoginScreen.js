import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter the Password"
        secureTextEntry={!passwordVisible}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={togglePasswordVisibility}
      >
        <Ionicons name={passwordVisible ? "eye-off-outline" : "eye-outline"} size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#888',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    padding: 8,
  },
});

export default LoginScreen;
