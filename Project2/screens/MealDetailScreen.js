import { Text, View, Image,Button, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";

import MealsDetails from "../components/MealsDetails";
import Subtitle1 from "../components/MealDetail/Subtitle1";
import List from "../components/MealDetail/List";
import IconButton from "../components/MealDetail/IconButton";
function MealDetailScreen({ route, navigation }) {

const headePressHandler = ()=>{
  console.log('Pressed');

};

  useLayoutEffect(()=>{

    navigation.setOptions({
      headerRight:()=>{
        return <IconButton icon="star" color="white" onPress={headePressHandler}/>
      }
    })
  },[navigation,headePressHandler]);


  // ithe aaplyla aapan send kelee mealId bhetii (route use karun aapan ti extract karto)
  const mealId = route.params.mealId;

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeals.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeals.title}</Text>
      <MealsDetails
        duration={selectedMeals.duration}
        complexity={selectedMeals.complexity}
        affordability={selectedMeals.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle1>Ingredients</Subtitle1>
          <List data={selectedMeals.ingredients} />
          <Subtitle1>Steps</Subtitle1>
          <List data={selectedMeals.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer:{
    marginBottom:32
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subtitleContainer: {
    padding: 4,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    margin: 6,
  },
  listOuterContainer:{
    alignContent:'center'
  },
  listContainer: {
    witdth: "80%",
  },
});
