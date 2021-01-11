import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GameOverScreen = ({ guessNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text>Number: {userNumber}</Text>
      <Text>Number of rounds: {guessNumber}</Text>
      <Button title="New Game" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
