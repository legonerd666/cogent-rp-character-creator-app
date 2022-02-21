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

import DefaultText from "./DefaultText";
import Colors from "../constants/Colors";
import {
  setMultiFieldStat,
  setStat as setCharacterStat,
} from "../store/actions/currentCharacter";

const Proficiency = (props: any) => {
  const [stat, setStat] = useState(props.itemData.stat);
  const [name, setName] = useState(props.itemData.name);
  const [bonus, setBonus] = useState(props.itemData.bonus);
  const [display, setDisplay] = useState(true);

  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  let loadedProficiencies = useSelector(
    (state: RootStateOrAny) => state.character.proficiencies
  );

  const setStatHandler = () => {
    dispatch(
      setMultiFieldStat("proficiency", props.itemData.id, {
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
      <View style={styles.proficiency}>
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
            Proficiency:
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
              placeholder="Enter Proficiency Name..."
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
              Cbt:
            </DefaultText>
            <RadioButton
              value="cbt"
              status={stat === "cbt" ? "checked" : "unchecked"}
              onPress={() => setStat("cbt")}
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
              Str:
            </DefaultText>
            <RadioButton
              value="str"
              status={stat === "str" ? "checked" : "unchecked"}
              onPress={() => setStat("str")}
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
              onPress={() => setStat("ref")}
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
              onPress={() => setStat("int")}
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
        <View style={styles.bonus}>
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
            Bonus:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.bonusInputContainerLargeDarkMode
                  : styles.bonusInputContainerLargeLightMode
                : isDarkMode
                ? styles.bonusInputContainerDarkMode
                : styles.bonusInputContainerLightMode
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.bonusInputTextLargeDarkMode
                    : styles.bonusInputTextLargeLightMode
                  : isDarkMode
                  ? styles.bonusInputTextDarkMode
                  : styles.bonusInputTextLightMode
              }
              onChangeText={(text) => {
                setBonus(isNaN(parseInt(text)) ? 0 : parseInt(text));
              }}
              keyboardType={"number-pad"}
              defaultValue={bonus.toString()}
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
              let proficiencies = loadedProficiencies;
              const proficiencyToDeleteIndex = proficiencies.findIndex(
                (proficiencyById: any) =>
                  proficiencyById.id === props.itemData.id
              );
              proficiencies.splice(proficiencyToDeleteIndex, 1);
              dispatch(setCharacterStat("proficiencies", proficiencies));
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
  proficiency: {
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

  bonusInputContainerDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: 50,
    height: 50,
    justifyContent: "center",
    marginVertical: 15,
    borderRadius: 50,
  },
  bonusInputContainerLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: 50,
    height: 50,
    justifyContent: "center",
    marginVertical: 15,
    borderRadius: 50,
  },
  bonusInputContainerLargeDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: 70,
    height: 70,
    justifyContent: "center",
    marginVertical: 15,
    borderRadius: 50,
  },
  bonusInputContainerLargeLightMode: {
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

  bonusInputTextDarkMode: {
    fontSize: 16,
    color: Colors.accentColorDarkMode,
    textAlign: "center",
  },
  bonusInputTextLightMode: {
    fontSize: 16,
    color: Colors.accentColorLightMode,
    textAlign: "center",
  },
  bonusInputTextLargeDarkMode: {
    fontSize: 25,
    color: Colors.accentColorDarkMode,
    textAlign: "center",
  },
  bonusInputTextLargeLightMode: {
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

export default Proficiency;
