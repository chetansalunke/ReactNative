import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
const CategoryItem = ({
    name,
    imageUrl,}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.containerPressed,
      ]}
      android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
    >
     <Image source={{ uri: imageUrl }} style={styles.image} />

      <View style={styles.overlay}>
        <Text style={styles.categoryName}>{name}</Text>
      </View>
    </Pressable>
  );
};


const styles = StyleSheet.create({
    container: {
      borderRadius: 10,
      overflow: 'hidden',
      margin: 10,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
        },
        android: {
          elevation: 5,
        },
      }),
    },
    containerPressed: {
      opacity: 0.6,
    },
    image: {
      width: '100%',
      height: 150,
      resizeMode: 'cover',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    categoryName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
    },
  });
export default CategoryItem;
