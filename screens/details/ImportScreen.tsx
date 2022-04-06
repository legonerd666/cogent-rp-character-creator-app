import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import DefaultText from "../../components/DefaultText";
import blankCharacter, { ICharacter } from "../../constants/characterTemplate";
import Colors from "../../constants/Colors";
import DataManipulation from "../../functions/DataManipulation";
import { newCurrentCharacter } from "../../store/actions/currentCharacter";

const ImportScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  var importedCharacter: ICharacter;

  const dataManipulation = new DataManipulation();

  const dispatch = useDispatch();

  return (
    <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.container}>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Paste in an exported character and it'll add it to your characters!
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.inputContainerLongMultilineLargeDarkMode
                  : styles.inputContainerLongMultilineLargeLightMode
                : isDarkMode
                ? styles.inputContainerLongMultilineDarkMode
                : styles.inputContainerLongMultilineLightMode
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.inputTextLargeDarkMode
                    : styles.inputTextLargeLightMode
                  : isDarkMode
                  ? styles.inputTextDarkMode
                  : styles.inputTextLightMode
              }
              multiline={true}
              onChangeText={(text) => {
                try {
                  importedCharacter = JSON.parse(text);
                } catch (error) {
                  Alert.alert(
                    "Invalid Character",
                    "The character you are trying to import isn't a valid character."
                  );
                }
              }}
              placeholder="Paste Character Here..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableNativeFeedback
              onPress={async () => {
                await dataManipulation.storeLoadedData();
                const newCharacters = dataManipulation.getData();

                if (
                  newCharacters.find(
                    (character) => character.id === importedCharacter.id
                  )
                ) {
                  Alert.alert(
                    "Duplicate Detected",
                    "You seem to be trying to import a duplicate character, are you sure you want to import it?",
                    [
                      {
                        text: "Cancel",
                        onPress: () => {},
                        style: "cancel",
                      },
                      {
                        text: "Import",
                        onPress: () => {
                          importedCharacter.id = uuid();

                          newCharacters.push(importedCharacter);

                          dataManipulation.setData(newCharacters);
                          dataManipulation.saveData();

                          dispatch(newCurrentCharacter(blankCharacter()));
                          props.navigation.popToTop();
                        },
                      },
                    ]
                  );
                } else {
                  newCharacters.push(importedCharacter);

                  dataManipulation.setData(newCharacters);
                  dataManipulation.saveData();

                  dispatch(newCurrentCharacter(blankCharacter()));
                  props.navigation.popToTop();
                }
              }}
            >
              <View style={styles.button}>
                <DefaultText>Import</DefaultText>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenDarkMode: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.primaryColorDarkMode,
  },
  screenLightMode: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.primaryColorLightMode,
  },

  container: {
    alignItems: "center",
    width: "85%",
    alignSelf: "center",
    paddingVertical: 30,
  },

  textBlockDarkMode: {
    textAlign: "center",
    color: Colors.accentColorDarkMode,
    marginVertical: 10,
  },
  textBlockLightMode: {
    textAlign: "center",
    color: Colors.accentColorLightMode,
    marginVertical: 10,
  },

  inputTextDarkMode: {
    fontSize: 16,
    color: Colors.accentColorDarkMode,
  },
  inputTextLightMode: {
    fontSize: 16,
    color: Colors.accentColorLightMode,
  },
  inputTextLargeDarkMode: {
    fontSize: 25,
    color: Colors.accentColorDarkMode,
  },
  inputTextLargeLightMode: {
    fontSize: 25,
    color: Colors.accentColorLightMode,
  },

  inputContainerLongMultilineDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: "80%",
    height: 300,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  inputContainerLongMultilineLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: "80%",
    height: 300,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  inputContainerLongMultilineLargeDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: "80%",
    height: 500,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  inputContainerLongMultilineLargeLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: "80%",
    height: 500,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  buttonContainer: {},
  button: {},
});

export default ImportScreen;
