import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../screen/CategoriesScreen";
import CategoryMealsScreen from "../screen/CategoryMealsScreen";

const Stack = createStackNavigator();
const MealsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen
        name="CategoryMealsScreen"
        component={CategoryMealsScreen}
      />
    </Stack.Navigator>
  );
};

export default MealsNavigator;
