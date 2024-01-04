import { Text, View, Image, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

import MealsDetails from "../components/MealsDetails";
function MealDetailScreen({ route, navigation }) {
  // ithe aaplyla aapan send kelee mealId bhetii (route use karun aapan ti extract karto)
  const mealId = route.params.mealId;

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeals.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeals.title}</Text>
      <MealsDetails
        duration={selectedMeals.duration}
        complexity={selectedMeals.complexity}
        affordability={selectedMeals.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ingridents</Text>
      </View>
      {selectedMeals.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}

      <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>Steps</Text>
      </View>
      {selectedMeals.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
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
  subtitleContainer:{
    padding:4,
    marginHorizontal:24,
    marginVertical:4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    margin: 6,
  }
});
