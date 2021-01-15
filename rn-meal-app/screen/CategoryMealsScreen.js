import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { MEALS } from "../data/dummy-data";

const getListMeals = (id) => {
  return MEALS.filter((meal) => meal.categoryIds.includes(id)) || [];
};

const renderMealItem = (meal, index) => {
  const {
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
  } = meal;

  return (
    <View style={styles.mealItem} key={id}>
      <View style={styles.mealImageView}>
        <Image
          style={styles.mealImage}
          source={{ uri: imageUrl }}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.mealTitle}>{title}</Text>
    </View>
  );
};
const CategoryMealsScreen = ({ route, navigation }) => {
  const { id } = route.params || {};
  const listMeals = getListMeals(id);

  return (
    <View style={styles.screen}>
      <View style={styles.listMeals}>
        <ScrollView contentContainerStyle={styles.listContentMeals}>
          {listMeals.map((meal, index) => renderMealItem(meal, index))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  listMeals: {
    marginVertical: 10,
  },
  listContentMeals: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginVertical: 5,
  },

  mealItem: {
    width: Dimensions.get("window").width / 2 - 12,
    marginHorizontal: 3,
    marginVertical: 3,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  mealImageView: {
    alignSelf: "center",
    width: Dimensions.get("window").width / 2 - 12,
    height: Dimensions.get("window").height / 4 - 12,
    backgroundColor: "#ccc",
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  mealImage: {
    height: "100%",
    width: "100%",
  },
  mealTitle: {
    marginVertical: 10,
    marginHorizontal: 10,
    alignSelf: "flex-start",
  },
});

export default CategoryMealsScreen;
