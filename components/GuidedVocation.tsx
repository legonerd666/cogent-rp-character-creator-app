import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { Ionicons } from "@expo/vector-icons";

import DefaultText from "./DefaultText";
import Colors from "../constants/Colors";
import {
  setMultiFieldStat,
  setStat as setCharacterStat,
} from "../store/actions/currentCharacter";

const Vocation = (props: any) => {
  const [stat, setStat] = useState(props.itemData.stat);
  const [name, setName] = useState(props.itemData.name);
  const [bonus, setBonus] = useState(props.itemData.bonus);
  const [display, setDisplay] = useState(true);

  const skillPoints = useSelector(
    (state: RootStateOrAny) => state.character.skillPoints
  );

  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  let loadedVocations = useSelector(
    (state: RootStateOrAny) => state.character.vocations
  );

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const setStatHandler = () => {
    dispatch(
      setMultiFieldStat("vocation", props.itemData.id, {
        id: props.itemData.id,
        name: name,
        stat: stat,
        bonus: bonus,
      })
    );
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setStatHandler();
  }, [stat, name, bonus]);

  if (display) {
    return (
      <View style={styles.vocation}>
        <View style={styles.header}>
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
              placeholder="Enter Vocation Name..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={async (text) => {
                await setName(text);
                dispatch(
                  setMultiFieldStat("vocation", props.itemData.id, {
                    id: props.itemData.id,
                    name: name,
                    stat: stat,
                    bonus: bonus,
                  })
                );
              }}
              defaultValue={name}
            />
          </View>
        </View>
        <View style={styles.checkboxes}>
          <View style={styles.checkbox}>
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
              Str:
            </DefaultText>
            <RadioButton
              value="str"
              status={stat === "str" ? "checked" : "unchecked"}
              onPress={async () => {
                await setStat("str");
                dispatch(
                  setMultiFieldStat("vocation", props.itemData.id, {
                    id: props.itemData.id,
                    name: name,
                    stat: stat,
                    bonus: bonus,
                  })
                );
              }}
              color={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              uncheckedColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>

          <View style={styles.checkbox}>
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
              Ref:
            </DefaultText>
            <RadioButton
              value="ref"
              status={stat === "ref" ? "checked" : "unchecked"}
              onPress={async () => {
                await setStat("ref");
                dispatch(
                  setMultiFieldStat("vocation", props.itemData.id, {
                    id: props.itemData.id,
                    name: name,
                    stat: stat,
                    bonus: bonus,
                  })
                );
              }}
              color={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              uncheckedColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>

          <View style={styles.checkbox}>
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
              Int:
            </DefaultText>
            <RadioButton
              value="int"
              status={stat === "int" ? "checked" : "unchecked"}
              onPress={async () => {
                await setStat("int");
                dispatch(
                  setMultiFieldStat("vocation", props.itemData.id, {
                    id: props.itemData.id,
                    name: name,
                    stat: stat,
                    bonus: bonus,
                  })
                );
              }}
              color={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              uncheckedColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>
        </View>
        <View style={styles.skill}>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Bonus:
          </DefaultText>
          <View style={styles.buttons}>
            <TouchableNativeFeedback
              onPress={() => {
                if (props.itemData.bonus >= 1) {
                  let newVocation = props.itemData;
                  newVocation.bonus -= 1;
                  dispatch(
                    setMultiFieldStat("vocation", newVocation.id, newVocation)
                  );
                  dispatch(setCharacterStat("skillPoints", skillPoints + 1));
                }
              }}
            >
              <View>
                <Ionicons
                  name="remove"
                  size={32}
                  color={
                    isDarkMode
                      ? Colors.accentColorDarkMode
                      : Colors.accentColorLightMode
                  }
                />
              </View>
            </TouchableNativeFeedback>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              {props.itemData.bonus}
            </DefaultText>
            <TouchableNativeFeedback
              onPress={() => {
                if (props.itemData.bonus <= 3 && skillPoints >= 1) {
                  let newVocation = props.itemData;
                  newVocation.bonus += 1;
                  dispatch(
                    setMultiFieldStat("vocation", newVocation.id, newVocation)
                  );
                  dispatch(setCharacterStat("skillPoints", skillPoints - 1));
                }
              }}
            >
              <View>
                <Ionicons
                  name="add"
                  size={32}
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

        <View
          style={
            Dimensions.get("window").width > 600
              ? styles.deleteButtonContainerLarge
              : styles.deleteButtonContainer
          }
        >
          <TouchableNativeFeedback
            onPress={() => {
              let vocations = loadedVocations;
              const vocationToDeleteIndex = vocations.findIndex(
                (vocationById: any) => vocationById.id === props.itemData.id
              );
              vocations.splice(vocationToDeleteIndex, 1);
              dispatch(setCharacterStat("vocations", vocations));
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
  vocation: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxes: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  bonus: {
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
    width: 160,
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
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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

  skill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
  },
});

export default Vocation;
