import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../../components/Card";
import NumberContainer from "../../components/NumberContainer";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const rndNumber = Math.floor(Math.random() * (max - min)) + min;

  if (rndNumber === exclude) {
    generateRandomNumber(min, max, exclude);
  } else {
    return rndNumber;
  }
};
const GameScreen = ({ userChoice, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, userChoice)
  );
  const [guess, setGuess] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(guess);
    }
  }, [currentGuess]);

  const nextGuessHandler = (action) => {
    if (
      (currentGuess < userChoice && action === "lower") ||
      (currentGuess > userChoice && action === "greater")
    ) {
      Alert.alert("Wrong", "Don't lie, you know the number", [
        "Sorry",
        "Cancel",
      ]);
      return;
    } else {
      if (action === "lower") {
        currentHigh.current = currentGuess;
      } else {
        currentLow.current = currentGuess;
      }
      const newRndNumber = generateRandomNumber(
        currentLow.current,
        currentHigh.current,
        currentGuess
      );
      setCurrentGuess(newRndNumber);
      setGuess((current) => current + 1);
    }
  };
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Lower"
          onPress={nextGuessHandler.bind(this, "lower")}
        />
        <Button
          style={styles.button}
          title="Greater"
          onPress={nextGuessHandler.bind(this, "greater")}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    marginHorizontal: 15,
  },
});
export default GameScreen;
