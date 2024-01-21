import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NativeStackView, createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SendOtpScreen from './screens/SendOtpScreen';
import ValidateOtp from './screens/ValidateOtp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
          <Stack.Screen name="sendOtp" component={SendOtpScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="validateOtp" component={ValidateOtp} />
          <Stack.Screen name="homeScreen" component={HomeScreen} />
        </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
