import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  Keyboard,
  Dimensions,
} from "react-native";
import MainButton from "../../components/MainButton";
import NumberContainer from "../../components/NumberContainer";
import colors from "../../constants/colors";
import defaultStyle from "../../constants/default-style";
import Card from "./../../components/Card";
import Input from "./../../components/Input";

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [selectedNumber, setSelectedNumber] = useState("");
  const [isConfirmed, setConfirmed] = useState(false);
  const numberInputHandler = (value) => {
    const intVal = value.replace(/[^0-9]/g, "");
    setEnteredValue(intVal);
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 - 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    Keyboard.dismiss();
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue("");
  };

  let confirmedOutput;

  if (isConfirmed) {
    confirmedOutput = (
      <Card style={style.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => onStartGame(selectedNumber)}>
          Start the game!
        </MainButton>
      </Card>
    );
  }

  return (
    <View style={style.container}>
      <Text style={{ ...defaultStyle.titleText, ...style.title }}>
        Start A New Game
      </Text>
      <Card style={style.inputContainer}>
        <Text style={{ ...defaultStyle.bodyText }}>Select A Number</Text>
        <Input
          style={style.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          blurOnSubmit={true}
          value={enteredValue}
          onChangeText={numberInputHandler}
        />
        <View style={style.buttonContainer}>
          <View style={style.button}>
            <Button
              title="Reset"
              onPress={resetInputHandler}
              color={colors.primary}
            />
          </View>
          <View style={style.button}>
            <Button
              title="Confirm"
              onPress={confirmInputHandler}
              color={colors.secondary}
            />
          </View>
        </View>
      </Card>
      {confirmedOutput}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
  textInput: {
    textAlign: "center",
    width: 50,
  },
  inputContainer: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  button: {
    width: Dimensions.get("window").width / 4,
  },
});
export default StartGameScreen;
