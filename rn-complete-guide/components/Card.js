import React from "react";
import { StyleSheet, View } from "react-native";

const Card = ({ children, style: additionalStyle = {} }) => {
  return (
    <View style={{ ...styles.container, ...additionalStyle }}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 6,
    borderRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
  },
});

export default Card;
