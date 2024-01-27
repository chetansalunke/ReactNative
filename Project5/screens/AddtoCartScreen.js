import React from "react";
import {
  Image,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

const AddToCartScreen = () => {
  // Assuming `cartItems` is the property holding your cart items in the Redux store
  const cartItems = useSelector((state) => state.cart.item); // Use state.cart.item to access the cart items

  const getTotal = () => {
    let total = 0;
    cartItems.map((item) => {
      total = total + item.qty * item.price;
    });
    return total;
  };
  const adddButtonHandler = () => {
    setQty(qty + 1);
  };
  const decrementButtonHandler = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };
  // Function to render each product item
  const renderItem = ({ item }) => {
    console.log("Image URL:", item);
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image_url }} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>Price: ${item.price}</Text>
          <View style={{flexDirection:'row', alignItems:'flex-start'}} >
          {item.qty === 0 ? null : (
            <TouchableOpacity
              style={{
                height: 27,
                borderRadius: 10,
                backgroundColor: "#34a9db",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 10,
                paddingRight: 10,
              }}
              onPress={decrementButtonHandler}
            >
              <Text style={{ color: "#fff" }}>-</Text>
            </TouchableOpacity>
          )}
            

            

            {item.qty === 0 ? null :(
              <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
              {item.qty}
            </Text>
            )}
            {item.qty === 0 ? null :(
              <TouchableOpacity
              style={{
                height: 27,
                borderRadius: 10,
                backgroundColor: "#34a9db",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 10,
                paddingRight: 10,
                marginLeft: 10,
              }}
              onPress={decrementButtonHandler}
            >
              <Text style={{ color: "#fff" }}>+</Text>
            </TouchableOpacity>
            )}
            
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.product_id.toString()}
      />
    {cartItems.length > 0 ? ( <View
        style={{
          width: "100%",
          height: 60,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            height: 100,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 16, color: "#000" }}>
            {"Added Item" + "(" + cartItems.length + ")"}
          </Text>
          <Text style={{ fontSize: 16, }}>
            {"Total :- " + getTotal()}
          </Text>
        </View>
        <View
          style={{
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            height: 100,
          }}
        >
          <TouchableOpacity style={{height: 30,
                borderRadius: 10,
                backgroundColor: "#34a9db",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 10,
                paddingRight: 10,
                marginLeft: 10,}}>
          <Text style={{color:'#fff' , fontSize:12, fontWeight:'700'}}>Place Order</Text>
                </TouchableOpacity>
        </View>
      </View>):null}
      
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
  itemQty: {
    fontSize: 14,
  },
});

export default AddToCartScreen;
