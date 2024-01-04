import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Meal from "../models/meal";
import MealDetailsScreen from "./MealDetailScreen";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.catgoryId;


  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  // useEffect(()=>{
  //   const categoryTitle = CATEGORIES.find((category)=> category.id===catId).title;
  //   navigation.setOptions({
  //     title:categoryTitle,
  //   });

  // },[navigation,catId]);
  // dependent array

  const displayMeals = MEALS.filter((mealItem) => {
    // we have to retue true of the item is belong to the category we receive (when the user select )

    // console.log("the Indexxx"+mealItem.categoryIds.indexOf(catId)>=0);
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // dataItem is the convential name to the paramenter
  const renderMealItem = (itemData) => {
    
    const item = itemData.item;

    const mealItemProps = {
      id:item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps}  />;
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
