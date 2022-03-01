import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  Dimensions,
  TextInput,
} from "react-native";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { IVocation } from "../../constants/characterTemplate";
import {
  setNumberStat,
  setVocation,
  setVocations,
} from "../../store/actions/currentCharacter";
import { RadioButton } from "react-native-paper";

const VocationsScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  const character = useSelector((state: RootStateOrAny) => state.character);

  const Vocations = character.vocations.map((vocation: IVocation) => {
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
            onChangeText={(text: string) => {
              vocation.name = text;
              dispatch(setVocation(vocation.id, vocation));
            }}
            defaultValue={vocation.name}
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
            status={vocation.stat === "str" ? "checked" : "unchecked"}
            onPress={() => {
              vocation.stat = "str";
              dispatch(setVocation(vocation.id, vocation));
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
            status={vocation.stat === "ref" ? "checked" : "unchecked"}
            onPress={() => {
              vocation.stat = "ref";
              dispatch(setVocation(vocation.id, vocation));
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
            status={vocation.stat === "int" ? "checked" : "unchecked"}
            onPress={() => {
              vocation.stat = "int";
              dispatch(setVocation(vocation.id, vocation));
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
      <View style={styles.bonus}>
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
              if (vocation.bonus >= 1) {
                vocation.bonus = vocation.bonus - 1;
                dispatch(setVocation(vocation.id, vocation));

                dispatch(
                  setNumberStat("skillPoints", character.skillPoints + 1)
                );
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
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            {vocation.bonus}
          </DefaultText>
          <TouchableNativeFeedback
            onPress={() => {
              if (character.skillPoints >= 1) {
                vocation.bonus = vocation.bonus + 1;
                dispatch(setVocation(vocation.id, vocation));

                dispatch(
                  setNumberStat("skillPoints", character.skillPoints - 1)
                );
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
            let vocations = character.vocations;
            const vocationToDeleteIndex = vocations.findIndex(
              (vocationById: IVocation) => vocationById.id === vocation.id
            );
            vocations.splice(vocationToDeleteIndex, 1);
            dispatch(setVocations(vocations));
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
    </View>;
  });

  return (
    <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.container}>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Time to pick your vocations!
          </DefaultText>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            By default, in One-Shots or short games, player characters will be
            given 2 Attribute points they may assign to their character during
            character creation. If you are playing in a campaign it is
            recommended to use less as you will gain more as your game
            progresses.
          </DefaultText>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Pick which attribute(s) you'd like to increase, keep in mind 0 is
            average, 1 is trained professional, and 2 is world class in a given
            attribute or skill (for more visit cogentroleplay.com/rules)
          </DefaultText>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Skill Points: {character.skillPoints}
          </DefaultText>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            When you are satisfied with your vocations click next and you get to
            pick your vocational and combat skills!
          </DefaultText>
          <TouchableNativeFeedback
            onPress={() => {
              props.navigation.navigate("Vocation");
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

  //   attribute: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     width: "70%",
  //   },

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

  vocation: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
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

  bonus: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default VocationsScreen;
