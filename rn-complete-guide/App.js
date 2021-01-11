import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/home-screen";
import GoalScreen from "./screens/goal-screen";
import GuessScreen from "./screens/guess-screen";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const Stack = createStackNavigator();

const fetchFont = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [isReady, setReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setReady(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  console.log({ isReady });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GoalScreen" component={GoalScreen} />
        <Stack.Screen name="GuessScreen" component={GuessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
