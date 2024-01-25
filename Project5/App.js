import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignupScreen from "./screens/SignupScreen";
import { useEffect, useImperativeHandle } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "./screens/SigninScreen";
import AllCategoryScreen from "./screens/AllCategoryScreen";
import ProductScreen from "./screens/ProductScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddtoCartScreen from "./screens/AddtoCartScreen";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/store";
import { PRODUCT } from "./data/dummy-data";
import { addMyProducts } from "./store/MyproductSlice";
const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SigIn" component={SigninScreen} />
          <Stack.Screen name="SignUp" component={SignupScreen} />
          <Stack.Screen name="All Category" component={AllCategoryScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen name="AddToCart" component={AddtoCartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
