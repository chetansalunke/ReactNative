import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { PRODUCT } from "../data/dummy-data";
import { useRoute } from '@react-navigation/native';

const ProductDetailScreen = () => {
  const route = useRoute();
  const pid = route.params.p_id;

  // Find the product with the given product_id
  const product = PRODUCT.find((product) => product.product_id === pid);

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
        <Image
          source={{ uri: product.image_url }}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
          <Text style={styles.productDetails}>{product.details}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 20,
    color: '#3498db',
    marginBottom: 8,
  },
  productDetails: {
    fontSize: 16,
    color: '#555',
  },
});

export default ProductDetailScreen;
