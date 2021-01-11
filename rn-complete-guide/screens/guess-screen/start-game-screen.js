import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Alert, Keyboard } from "react-native";
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
        <Button
          title="Start the game!"
          onPress={() => onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <View style={style.container}>
      <Text style={{ ...defaultStyle.titleText, ...style.title }}>
        Start A New Game
      </Text>
      <Card style={style.inputContainer}>
        <Text style={defaultStyle.bodyText}>Select A Number</Text>
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
          <View style={style.btn}>
            <Button
              title="Reset"
              onPress={resetInputHandler}
              color={colors.primary}
            />
          </View>
          <View style={style.btn}>
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
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
  },
  textInput: {
    textAlign: "center",
    width: 50,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  btn: {
    width: 100,
  },
});
export default StartGameScreen;
