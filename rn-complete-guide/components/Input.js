import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.container, ...props.style }} />
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "gray",
    borderBottomWidth: 1,
    height: 30,
    width: "100%",
    marginVertical: 10,
  },
});
export default Input;
