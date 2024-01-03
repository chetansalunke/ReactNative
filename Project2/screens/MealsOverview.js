import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Meal from "../models/meal";

function MealsOverviewScreen({ route }) {
  const catId = route.params.catgoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    // we have to retue true of the item is belong to the category we receive (when the user select )

    console.log("the Indexxx"+mealItem.categoryIds.indexOf(catId)>=0);
    return mealItem.categoryIds.indexOf(catId)>=0;
  });

  // dataItem is the convential name to the paramenter
  const renderMealItem = (itemData) => {
    return <MealItem title={itemData.item.title} imageUrl={itemData.item.imageUrl}/>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        // itemData.item contains the current item's data
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
