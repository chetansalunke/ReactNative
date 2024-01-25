import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../components/product/ProductItem";

const AddToCartScreen = () => {
  // Assuming `cartItems` is the property holding your cart items in the Redux store
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  // Function to render each product item
  const renderItem = ({item}) => {
    return <Text>asddddddddddd</Text>
  };

  return (
    <View >
      <FlatList data={cartItems} renderItem={renderItem} keyExtractor={(item)=> item.name } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c2ed43",
  },
});

export default AddToCartScreen;
