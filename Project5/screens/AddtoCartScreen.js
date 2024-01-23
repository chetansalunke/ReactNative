import { PRODUCT } from "../data/dummy-data";
import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";

const AddtoCartScreen = () => {
  // Example list of products
  const cartItemIds = useSelector((state) => state.cart.ids);

  const item = PRODUCT.filter((product) =>
    cartItemIds.includes(product.product_id)
  );

  console.log(item);

  

  // State to track items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart

  // Function to render each product item
  const renderProductItem = ({ item }) => (
    <View style={styles.productContainer}>
      <View style={styles.productInnerContainer}>
        <Image source={{ uri: item.image_url }} style={styles.productImage} />
        <Text>{item.name}</Text>
        <Text>${item.price}</Text>
        <Text> Quantity</Text>
        <View style={styles.container1}>
         
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={item}
        keyExtractor={(item) => item.name}
        renderItem={renderProductItem}
        // You can adjust the number of columns based on your design
      />

      {/* Cart summary */}
      <View style={styles.cartSummary}>
        <Text style={styles.cartSummaryText}>Cart Summary:</Text>
        {cartItems.map((cartItem) => (
          <Text key={cartItem.id}>{cartItem.name}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  productContainer: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  productImage: {
    width: "%",
    height: 250,
    marginBottom: 8,
    resizeMode: "cover",
    borderRadius: 4,
  },
  productContainer: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  productInnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: 300,
    marginBottom: 8,
    resizeMode: "cover",
    borderRadius: 4,
  },
  cartSummary: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    padding: 16,
  },
  cartSummaryText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddtoCartScreen;
