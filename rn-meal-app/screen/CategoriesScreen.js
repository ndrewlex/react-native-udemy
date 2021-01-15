import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (category, onSelectCategory) => {
  const { id, title, color } = category;
  return (
    <TouchableOpacity
      style={{ ...styles.categoryItem, backgroundColor: color }}
      onPress={() => onSelectCategory(id)}
      key={id}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const CategoriesScreen = ({ navigation }) => {
  const onSelectCategory = (id) => {
    navigation.navigate("CategoryMealsScreen", {
      id,
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.listCategories}>
        <ScrollView contentContainerStyle={styles.listContentCategories}>
          {CATEGORIES.map((category) =>
            renderCategoryItem(category, onSelectCategory)
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  listCategories: {
    marginVertical: 10,
  },
  listContentCategories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginVertical: 5,
    flexWrap: "wrap",
  },
  categoryItem: {
    width: Dimensions.get("window").width / 2 - 12,
    marginHorizontal: 3,
    marginVertical: 3,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default CategoriesScreen;
