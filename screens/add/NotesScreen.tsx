import React, { useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import ColorPicker from "react-native-wheel-color-picker";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";

import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import { setStat } from "../../store/actions/currentCharacter";

const AddNotesScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  const [notes, setNotes] = useState(
    useSelector((state: RootStateOrAny) => state.character.notes)
  );
  const [bgColor, setBgColor] = useState(
    useSelector((state: RootStateOrAny) => state.character.bgColor)
  );

  return (
    <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.container}>
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
                setNotes(text);
                dispatch(setStat("notes", text));
              }}
              multiline={true}
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
              onColorChangeComplete={(color) => {
                setBgColor(color);
                dispatch(setStat("bgColor", color));
              }}
              thumbSize={30}
              sliderSize={40}
              noSnap={true}
              row={false}
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
    justifyContent: "center",
  },
  screenLightMode: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.primaryColorLightMode,
    justifyContent: "center",
  },

  container: {
    alignItems: "center",
    width: "92%",
    alignSelf: "center",
    paddingTop: 30,
  },
  infoBlockContainer: {
    alignItems: "center",
    marginVertical: 15,
  },
  largeInfoDarkMode: {
    fontSize: 35,
    paddingRight: 2,
    textAlign: "center",
    marginVertical: 10,
    color: Colors.accentColorDarkMode,
  },
  largeInfoLightMode: {
    fontSize: 35,
    paddingRight: 2,
    textAlign: "center",
    marginVertical: 10,
    color: Colors.accentColorLightMode,
  },
  infoDarkMode: {
    fontSize: 22,
    paddingRight: 2,
    textAlign: "center",
    color: Colors.accentColorDarkMode,
  },
  infoLightMode: {
    fontSize: 22,
    paddingRight: 2,
    textAlign: "center",
    color: Colors.accentColorLightMode,
  },

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

  inputContainerLongMultilineDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: "70%",
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
    width: "70%",
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
    width: "70%",
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
    width: "70%",
    height: 500,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
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

export default AddNotesScreen;
