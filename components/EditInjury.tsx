import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import DefaultText from "./DefaultText";
import Colors from "../constants/Colors";
import {
  setMultiFieldStat,
  setStat as setCharacterStat,
} from "../store/actions/currentCharacter";

const Injury = (props: any) => {
  const [name, setName] = useState(props.itemData.name);
  const [penalty, setPenalty] = useState(props.itemData.penalty);
  const [display, setDisplay] = useState(true);

  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  let loadedInjuries = useSelector(
    (state: RootStateOrAny) => state.character.lingeringInjuries
  );

  const setStatHandler = () => {
    dispatch(
      setMultiFieldStat("injury", props.itemData.id, {
        id: props.itemData.id,
        name: name,
        penalty: penalty,
      })
    );
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setStatHandler();
  }, [name, penalty]);

  if (display) {
    return (
      <View style={styles.injury}>
        <View style={styles.header}>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.textLargeDarkMode
                  : styles.textLargeLightMode
                : isDarkMode
                ? styles.textDarkMode
                : styles.textLightMode
            }
          >
            Injury:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.inputContainerLargeDarkMode
                  : styles.inputContainerLargeLightMode
                : isDarkMode
                ? styles.inputContainerDarkMode
                : styles.inputContainerLightMode
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
              placeholder="Enter Injury Name..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setName(text);
              }}
              defaultValue={name}
            />
          </View>
        </View>
        <View style={styles.penalty}>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.textLargeDarkMode
                  : styles.textLargeLightMode
                : isDarkMode
                ? styles.textDarkMode
                : styles.textLightMode
            }
          >
            Penalty:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.penaltyInputContainerLargeDarkMode
                  : styles.penaltyInputContainerLargeLightMode
                : isDarkMode
                ? styles.penaltyInputContainerDarkMode
                : styles.penaltyInputContainerLightMode
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.penaltyInputTextLargeDarkMode
                    : styles.penaltyInputTextLargeLightMode
                  : isDarkMode
                  ? styles.penaltyInputTextDarkMode
                  : styles.penaltyInputTextLightMode
              }
              onChangeText={(text) => {
                setPenalty(isNaN(parseInt(text)) ? 0 : parseInt(text));
              }}
              keyboardType={"number-pad"}
              defaultValue={penalty.toString()}
            />
          </View>
        </View>
        <View
          style={
            Dimensions.get("window").width > 600
              ? styles.deleteButtonContainerLarge
              : styles.deleteButtonContainer
          }
        >
          <TouchableNativeFeedback
            onPress={() => {
              let injuries = loadedInjuries;
              const injuryToDeleteIndex = injuries.findIndex(
                (injuryById: any) => injuryById.id === props.itemData.id
              );
              injuries.splice(injuryToDeleteIndex, 1);
              dispatch(setCharacterStat("lingeringInjuries", injuries));
              setDisplay(false);
            }}
          >
            <View>
              <DefaultText
                style={
                  Dimensions.get("window").width > 600
                    ? styles.deleteButtonTextLarge
                    : styles.deleteButtonText
                }
              >
                Delete
              </DefaultText>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View
          style={isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode}
        ></View>
      </View>
    );
  }
  return <View></View>;
};

const styles = StyleSheet.create({
  injury: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  checkboxes: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  penalty: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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

  penaltyInputContainerDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: 50,
    height: 50,
    justifyContent: "center",
    marginVertical: 15,
    borderRadius: 50,
  },
  penaltyInputContainerLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: 50,
    height: 50,
    justifyContent: "center",
    marginVertical: 15,
    borderRadius: 50,
  },
  penaltyInputContainerLargeDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: 70,
    height: 70,
    justifyContent: "center",
    marginVertical: 15,
    borderRadius: 50,
  },
  penaltyInputContainerLargeLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: 70,
    height: 70,
    justifyContent: "center",
    marginVertical: 15,
    borderRadius: 50,
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

  penaltyInputTextDarkMode: {
    fontSize: 16,
    color: Colors.accentColorDarkMode,
    textAlign: "center",
  },
  penaltyInputTextLightMode: {
    fontSize: 16,
    color: Colors.accentColorLightMode,
    textAlign: "center",
  },
  penaltyInputTextLargeDarkMode: {
    fontSize: 25,
    color: Colors.accentColorDarkMode,
    textAlign: "center",
  },
  penaltyInputTextLargeLightMode: {
    fontSize: 25,
    color: Colors.accentColorLightMode,
    textAlign: "center",
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

  deleteButtonContainerLarge: {
    backgroundColor: "red",
    borderRadius: 10,
    elevation: 3,
    padding: 5,
    marginTop: 10,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    alignSelf: "center",
  },
  deleteButtonContainer: {
    backgroundColor: "red",
    borderRadius: 10,
    elevation: 3,
    padding: 5,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    alignSelf: "center",
  },
  deleteButtonTextLarge: {
    fontSize: 40,
  },
  deleteButtonText: {},
});

export default Injury;
