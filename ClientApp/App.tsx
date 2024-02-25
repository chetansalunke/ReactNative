import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SignUpScreen from './src/screens/SignUpScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

// Authintication Screens
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign-Up"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Log-In" component={LoginScreen} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
