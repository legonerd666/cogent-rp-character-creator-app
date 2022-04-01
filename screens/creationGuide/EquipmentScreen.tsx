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
import { Ionicons } from "@expo/vector-icons";
import { ICharacter } from "../../constants/characterTemplate";
import { setStringStat } from "../../store/actions/currentCharacter";

const EquipmentScreen = (props: any) => {
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
            Almost there, now you get to pick your equipment!
          </DefaultText>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Make sure to check with your narrator before adding something to
            your equipment to make sure the equipment fits the setting.
          </DefaultText>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Try to consider things like: food, cover when traveling (eg. tent,
            bedroll), backpack, light source, weaponry, armor, and such.
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
            Equipment:
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
              placeholder="Enter Equipment..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                dispatch(setStringStat("equipment", text));
              }}
              multiline={true}
              defaultValue={
                character.equipment != "None" ? character.equipment : ""
              }
            />
          </View>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            After that there is only notes and picking a pretty background color
            for the character, so when you are ready, click next!
          </DefaultText>
          <View style={styles.nextButtonContainer}>
            <TouchableNativeFeedback
              onPress={() => {
                props.navigation.navigate("Notes");
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
                  Next
                </DefaultText>
                <Ionicons
                  name="arrow-forward-outline"
                  size={20}
                  color={
                    isDarkMode
                      ? Colors.accentColorDarkMode
                      : Colors.accentColorLightMode
                  }
                />
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
    justifyContent: "space-between",
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
});

export default EquipmentScreen;
