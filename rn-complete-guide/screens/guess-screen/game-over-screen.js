import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
} from "react-native";

const GameOverScreen = ({ guessNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <View style={styles.imageContainer}>
        <Image
          // source={require("../../assets/success.png")}
          fadeDuration={1000}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg",
          }}
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
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 1,
    borderColor: "black",
    marginVertical: Dimensions.get("window").width / 30,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
