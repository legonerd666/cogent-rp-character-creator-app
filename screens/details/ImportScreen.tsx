import React, { useState } from "react";
import {
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { RootStateOrAny, useSelector } from "react-redux";
import DefaultText from "../../components/DefaultText";
import { ICharacter } from "../../constants/characterTemplate";
import Colors from "../../constants/Colors";

const ImportScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const [importedCharacter, setImportedCharacter] = useState({});

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
                  setImportedCharacter(JSON.parse(text));
                } catch (error) {
                  Alert.alert(
                    "Invalid Character",
                    "The character you are trying to import isn't a valid character."
                  );
                }
                console.log(text);
              }}
              placeholder="Paste Character Here..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
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
});

export default ImportScreen;
