import React from "react";
import {
  Image,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, removeFromCart } from "../store/cartSlice";

const AddToCartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.item);

  const getTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.qty * item.price;
    });
    return total;
  };

  const incrementButtonHandler = (item) => {
    dispatch(addtoCart({ ...item, qty: item.qty + 1 }));
  };

  const decrementButtonHandler = (item) => {
    dispatch(removeFromCart(item));
    console.log("decrement "+item.product_id);
  };

  const renderItem = ({ item }) => {
    return (
      <>
      
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image_url }} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>Price: ${item.price}</Text>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              {item.qty > 0 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => decrementButtonHandler(item)}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
              )}
              {item.qty > 0 && (
                <Text style={styles.quantityText}>{item.qty}</Text>
              )}
              {item.qty > 0 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => incrementButtonHandler(item)}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.product_id.toString()}
      />
      {cartItems.length > 0 && (
        <View style={styles.bottomContainer}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>
              {"Added Item" + "(" + cartItems.length + ")"}
            </Text>
            <Text style={styles.totalText}>{"Total :- $" + getTotal()}</Text>
          </View>
          <TouchableOpacity style={styles.placeOrderButton}>
            <Text style={styles.placeOrderText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    width: "94%",
    height: 120,
    alignSelf: "center",
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
    elevation: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemDetails: {
    marginLeft: 12,
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "#3498db",
  },
  button: {
    height: 27,
    borderRadius: 10,
    backgroundColor: "#34a9db",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
  },
  quantityText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  bottomContainer: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  totalContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  totalText: {
    fontWeight: "700",
    fontSize: 16,
    color: "#000",
  },
  placeOrderButton: {
    height: 30,
    borderRadius: 10,
    backgroundColor: "#34a9db",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
  },
  placeOrderText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
});

export default AddToCartScreen;
