import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductItem = ({ product}) => {
    console.log(product)
  const [isLiked, setIsLiked] = useState(false);

  // Function to handle the like button press
  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  return (
    <TouchableOpacity
      style={styles.productContainer}
      
    >
      <Image source={{ uri: product.image_url }} style={styles.productImage} />

      <View style={styles.overlay}>
        <TouchableOpacity
          onPress={handleLikePress}
          style={styles.likeButton}
        >
          <Icon
            name={isLiked ? 'heart' : 'heart-o'}
            size={20}
            color={isLiked ? '#e74c3c' : '#fff'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'flex-end',
    padding: 8,
  },
  likeButton: {
    backgroundColor: 'transparent',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: '#3498db',
  },
});

export default ProductItem;
