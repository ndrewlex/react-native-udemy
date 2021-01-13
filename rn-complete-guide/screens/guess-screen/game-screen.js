import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  Dimensions,
} from "react-native";
import Card from "../../components/Card";
import MainButton from "../../components/MainButton";
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
const renderListItem = (numberOfRounds, itemData) => {
  return (
    <View style={styles.listItem}>
      <Text>#{numberOfRounds - itemData.index}</Text>
      <Text>{itemData.item}</Text>
    </View>
  );
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const initialNumber = generateRandomNumber(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialNumber);
  const [pastGuesses, setPastGuesses] = useState([initialNumber.toString()]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
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
        currentLow.current = currentGuess + 1;
      }
      const newRndNumber = generateRandomNumber(
        currentLow.current,
        currentHigh.current,
        currentGuess
      );
      setCurrentGuess(newRndNumber);
      setPastGuesses((current) => [...current, newRndNumber.toString()]);
    }
  };

  let listContainerStyle = styles.listContainerBig;
  let isHeightAbove600 = Dimensions.get("window").height > 600;

  if (isHeightAbove600) {
    listContainerStyle = styles.listContainer;
  }

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          -
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          +
        </MainButton>
      </Card>
      <View style={listContainerStyle}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((value, index) =>
            renderListItem(value, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          data={pastGuesses}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.list}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 280,
    maxWidth: "60%",
  },

  listContainer: {
    width: "60%",
    flex: 1,
    marginVertical: 10,
  },

  listContainerBig: {
    width: "80%",
    flex: 1,
    marginVertical: 10,
  },

  list: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },

  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
    width: "100%",
  },
});
export default GameScreen;
