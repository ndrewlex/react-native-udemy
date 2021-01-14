import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FilterScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Filter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilterScreen;
