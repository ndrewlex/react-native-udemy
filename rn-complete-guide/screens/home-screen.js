import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <View style={style.col}>
        <Button
          title="Goals"
          onPress={() => navigation.navigate("GoalScreen")}
        />
      </View>
      <View style={style.col}>
        <Button
          title="Guess"
          onPress={() => navigation.navigate("GuessScreen")}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 20,
  },

  col: {
    width: 100,
    marginHorizontal: 18,
  },
});
export default HomeScreen;
