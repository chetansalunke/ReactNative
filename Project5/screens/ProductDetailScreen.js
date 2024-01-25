import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import { PRODUCT } from "../data/dummy-data";
import { CommonActions, useRoute } from "@react-navigation/native";
import IconButton from "../components/ui/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../store/cartSlice";
import { addMyProducts } from "../store/MyproductSlice";

const ProductDetailScreen = ({ navigation }) => {
  const [qty, setQty] = useState(0);
  const route = useRoute();
  const pid = route.params.p_id;
 
 

  // Find the product with the given product_id
  const product = PRODUCT.find((product) => product.product_id === pid);

  console.log(product);
  
  const dispatch = useDispatch();
  const adddButtonHandler = () => {
    setQty(qty + 1);
  };
  const decrementButtonHandler = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  const headerButtonHandler = () => {
    navigation.navigate("AddToCart");
  };
  const addtoCartHandler = () => {
  //  dispatch({...product,qty: qty})
  console.log("add to cart");
  dispatch(addtoCart({ ...product, qty: qty }));
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="cart-outline"
            color="black"
            onPress={headerButtonHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonHandler]);

  if (!product) {
    // Handle the case when the product is not found
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.image_url }}
            style={styles.productImage}
          />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "stretch",
              marginTop: 5,
            }}
          >
            <Text style={styles.productPrice}>₹{product.price}</Text>
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
              <Text style={{ color: "#fff" }}>-</Text>
            </TouchableOpacity>
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
              {qty}
            </Text>
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
              onPress={adddButtonHandler}
            >
              <Text style={{ color: "#fff" }}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.productDetails}>{product.details}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addtoCartHandler}>
          <Text style={styles.buttonText}>ADD TO CART</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Button 2 pressed")}
        >
          <Text style={styles.buttonText}>PLACE ORDER</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    // <View style={{ flex: 1, backgroundColor: "red" }}>
    //   <FlatList
    //     data={PRODUCT}
    //     renderItem={(item, index) => {
    //       return (
    //         <View
    //           style={{
    //             width: "94%",
    //             alignSelf: "center",
    //             height: 120,
    //             backgroundColor: "#f0e856",
    //             marginTop: 10,
    //             borderRadius: 10,
    //             elevation: 1,
    //             flexDirection: "row",
    //             alignItems: "center",
    //             paddingLeft: 10,
    //           }}
    //         >
    //           <Image
    //             source={{ uri: product.image_url }}
    //             style={{ width: 100, height: 100, borderRadius: 10 }}
    //           />
    //           <View style={{ padding: 12 }}>
    //             <Text
    //               style={{ fontSize: 16, color: "#000", fontWeight: "600" }}
    //             >
    //               {product.name}
    //             </Text>
    //             <Text style={{ fontWeight: "400" }}>
    //               {product.details.substring(0, 30) + ".."}
    //             </Text>
    //             <Text style={{ color: "#3498db", fontWeight: "600" }}>
    //               ₹{product.price}
    //             </Text>
    //             <View style={{ flexDirection: "row", alignItems: "center", marginTop:5 }}>
    //               <TouchableOpacity
    //                 style={{
    //                  height:27,
    //                   borderRadius: 10,
    //                   backgroundColor: "#368dff",
    //                   justifyContent: "center",
    //                   alignItems: "center",
    //                   paddingLeft: 10,
    //                   paddingRight: 10,
    //                 }}
    //                 onPress={()=>{
    //                   dispatch(addtoCart(item))
    //                 }}
    //               >
    //                 <Text style={{ color: "#fff" }}>Add To Cart</Text>
    //               </TouchableOpacity>
    //               <TouchableOpacity
    //                 style={{
    //                  height:27,
    //                   borderRadius: 10,
    //                   backgroundColor: "#368dff",
    //                   justifyContent: "center",
    //                   alignItems: "center",
    //                   paddingLeft: 10,
    //                   paddingRight: 10,
    //                   marginLeft:10,

    //                 }}
    //               >
    //                 <Text style={{ color: "#fff" }}>-</Text>
    //               </TouchableOpacity>
    //               <Text style={{marginLeft:10,fontSize:16,fontWeight:'600'}}>{'0'}</Text>
    //               <TouchableOpacity
    //                 style={{
    //                  height:27,
    //                   borderRadius: 10,
    //                   backgroundColor: "#368dff",
    //                   justifyContent: "center",
    //                   alignItems: "center",
    //                   paddingLeft: 10,
    //                   paddingRight: 10,
    //                   marginLeft:10,
    //                 }}
    //               >
    //                 <Text style={{ color: "#fff" }}>+</Text>
    //               </TouchableOpacity>
    //             </View>
    //           </View>
    //         </View>
    //       );
    //     }}
    //   />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    flex: 1,
    backgroundColor: "#34a9db",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginHorizontal: 8,
    justifyContent: "center",
    // Add styling for the button
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    // Add styling for the button container
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
  },
  productContainer: {
    backgroundColor: "#fff",

    margin: 1,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  productImage: {
    width: "94%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 10,
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    color: "#3498db",
    marginBottom: 8,
  },
  productDetails: {
    fontSize: 16,
    color: "#555",
  },
});

export default ProductDetailScreen;
