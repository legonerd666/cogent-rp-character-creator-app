import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Dimensions,
  TextInput,
  ScrollView,
} from "react-native";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import { ICharacter } from "../../constants/characterTemplate";
import { setStringStat } from "../../store/actions/currentCharacter";
import ColorPicker from "react-native-wheel-color-picker";

const NotesScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  const character: ICharacter = useSelector(
    (state: RootStateOrAny) => state.character
  );

  return (
    <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.container}>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Last steps before your character is ready to be played!
          </DefaultText>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Just write down any notes about your character (eg. fears, disabling
            characteristics, etc) and pick a pretty color to represent them and
            you are done!
          </DefaultText>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.statTitleLargeDarkMode
                  : styles.statTitleLargeLightMode
                : isDarkMode
                ? styles.statTitleDarkMode
                : styles.statTitleLightMode
            }
          >
            Notes:
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
              placeholder="Enter Notes..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                dispatch(setStringStat("notes", text));
              }}
              multiline={true}
              defaultValue={
                character.notes != "No Notes" ? character.notes : ""
              }
            />
          </View>

          <View
            style={
              isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode
            }
          ></View>

          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.sectionTextLargeDarkMode
                  : styles.sectionTextLargeLightMode
                : isDarkMode
                ? styles.sectionTextDarkMode
                : styles.sectionTextLightMode
            }
          >
            Background Color:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.colorPickerLarge
                : styles.colorPicker
            }
          >
            <ColorPicker
              color={character.bgColor}
              onColorChangeComplete={(color) => {
                dispatch(setStringStat("bgColor", color));
              }}
              thumbSize={30}
              sliderSize={40}
              noSnap={true}
              row={false}
            />
          </View>

          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Thats it, when you are ready click done to save your completed
            character!
          </DefaultText>
          <View style={styles.nextButtonContainer}>
            <TouchableNativeFeedback
              onPress={() => {
                props.navigation.pop();
                props.navigation.pop();
                props.navigation.pop();
                props.navigation.pop();
                props.navigation.pop();
                props.navigation.pop();
                props.navigation.pop();
              }}
            >
              <View style={styles.nextButton}>
                <DefaultText
                  style={
                    isDarkMode
                      ? styles.textBlockDarkMode
                      : styles.textBlockLightMode
                  }
                >
                  Done
                </DefaultText>
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

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  nextButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
    width: 100,
    backgroundColor: Colors.textBoxColorLightMode,
    paddingHorizontal: 10,
  },

  inputContainerDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: "70%",
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
    marginVertical: 15,
    borderRadius: 20,
  },
  inputContainerLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: "70%",
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
    marginVertical: 15,
    borderRadius: 20,
  },
  inputContainerLargeDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: "70%",
    height: 70,
    justifyContent: "center",
    paddingLeft: 10,
    marginVertical: 15,
    borderRadius: 20,
  },
  inputContainerLargeLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: "70%",
    height: 70,
    justifyContent: "center",
    paddingLeft: 10,
    marginVertical: 15,
    borderRadius: 20,
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

  textDarkMode: {
    color: Colors.accentColorDarkMode,
  },
  textLightMode: {
    color: Colors.accentColorLightMode,
  },
  textLargeDarkMode: {
    fontSize: 50,
    color: Colors.accentColorDarkMode,
  },
  textLargeLightMode: {
    fontSize: 50,
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

  statTitleLargeDarkMode: {
    color: Colors.accentColorDarkMode,
    textAlign: "center",
    fontSize: 50,
  },
  statTitleLargeLightMode: {
    color: Colors.accentColorLightMode,
    textAlign: "center",
    fontSize: 50,
  },
  statTitleDarkMode: {
    color: Colors.accentColorDarkMode,
    textAlign: "center",
    fontSize: 30,
  },
  statTitleLightMode: {
    color: Colors.accentColorLightMode,
    textAlign: "center",
    fontSize: 30,
  },
  nextButtonContainer: {},

  sectionTextDarkMode: {
    fontSize: 30,
    color: Colors.accentColorDarkMode,
    marginBottom: 30,
  },
  sectionTextLightMode: {
    fontSize: 30,
    color: Colors.accentColorLightMode,
    marginBottom: 30,
  },
  sectionTextLargeDarkMode: {
    fontSize: 55,
    color: Colors.accentColorDarkMode,
    marginBottom: 30,
  },
  sectionTextLargeLightMode: {
    fontSize: 55,
    color: Colors.accentColorLightMode,
    marginBottom: 30,
  },

  colorPicker: {
    height: 200,
    width: "70%",
    marginBottom: 100,
  },
  colorPickerLarge: {
    height: 200,
    width: "40%",
    marginBottom: 100,
  },

  dividerDarkMode: {
    height: 1,
    width: "70%",
    backgroundColor: Colors.dividerColorDarkMode,
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 30,
  },
  dividerLightMode: {
    height: 1,
    width: "70%",
    backgroundColor: Colors.dividerColorLightMode,
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 30,
  },
});

export default NotesScreen;
