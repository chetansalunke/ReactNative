import CategoryItem from "./CategoryItem";
import { View, Text, StyleSheet, FlatList } from "react-native";
const CategoryList = ({ data }) => {
    const renderItem = ({ item }) => (
        <CategoryItem
          name={item.name}
          image_url={item.image_url}
        />
      );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.category_id.toString()}
        // itemData.item contains the current item's data
        renderItem={renderItem}
      />
    </View>
  );
};

export default CategoryList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
