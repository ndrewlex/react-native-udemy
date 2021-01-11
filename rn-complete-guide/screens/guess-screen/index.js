import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import GameOverScreen from "./game-over-screen";
import GameScreen from "./game-screen";
import StartGameScreen from "./start-game-screen";

const GuessNumberScreen = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (number) => {
    setUserNumber(number);
  };

  const gameOverHandler = (guess) => {
    setGuessRounds(guess);
  };

  const newGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (guessRounds === 0 && userNumber) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        guessNumber={guessRounds}
        userNumber={userNumber}
        onRestart={newGameHandler}
      />
    );
  }

  content = (
    <GameOverScreen
      guessNumber={guessRounds}
      userNumber={userNumber}
      onRestart={newGameHandler}
    />
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.container}>{content}</View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

export default GuessNumberScreen;
