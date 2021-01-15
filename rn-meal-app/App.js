import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MealsNavigator from "./navigator/MealsNavigator";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <MealsNavigator />
      </NavigationContainer>
    );
  }
}

export default App;
