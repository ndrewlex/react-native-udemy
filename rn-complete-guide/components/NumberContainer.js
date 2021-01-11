import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";

const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.secondary,
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginVertical: 10,
  },
  number: {
    fontSize: 22,
    textAlign: "center",
    color: colors.secondary,
  },
});

export default NumberContainer;
