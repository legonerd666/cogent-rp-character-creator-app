import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Dimensions,
  TextInput,
} from "react-native";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ICharacter, IVocation } from "../../constants/characterTemplate";
import {
  setNumberStat,
  setVocation,
  setVocations,
} from "../../store/actions/currentCharacter";
import { RadioButton } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import { v4 as uuid } from "uuid";

const VocationsScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  const character: ICharacter = useSelector(
    (state: RootStateOrAny) => state.character
  );

  let totalVocationBonus = 0;
  character.vocations.forEach((tempVocation: IVocation) => {
    totalVocationBonus += tempVocation.bonus;
  });

  const renderVocation = (vocations: any) => {
    var vocation: IVocation = vocations.item;
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
                if (vocation.bonus >= 1 && totalVocationBonus >= 2) {
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
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              {vocation.bonus}
            </DefaultText>
            <TouchableNativeFeedback
              onPress={() => {
                if (character.skillPoints >= 1 && vocation.bonus <= 3) {
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
              if (character.vocations.length > 1) {
                const vocationToDeleteIndex = character.vocations.findIndex(
                  (vocationById: IVocation) => vocationById.id === vocation.id
                );
                character.vocations.splice(vocationToDeleteIndex, 1);

                totalVocationBonus = 0;
                character.vocations.forEach((tempVocation: IVocation) => {
                  totalVocationBonus += tempVocation.bonus;
                });

                if (totalVocationBonus < 1) {
                  var newVocation = character.vocations[0];
                  newVocation.bonus = 1;
                  dispatch(setVocation(newVocation.id, newVocation));
                }
              }
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
      </View>
    );
  };

  const renderVocationHeader = () => {
    return (
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
          Vocations represent the path your character has walked up until the
          beginning of the game. They may continue to travel down that path, or
          may change going forward, but these vocations reflect the life they
          led and the career they chose.
        </DefaultText>
        <DefaultText
          style={
            isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
          }
        >
          By default you will have 1 vocation with a singlular free point in it,
          this is mandatory, if you want your character to be unemployed you can
          simply name it "Drifter" or "Murderer" or something else suitable.
        </DefaultText>
        <DefaultText
          style={
            isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
          }
        >
          Vocations are similar to classes in other rp systems, so when choosing
          try to name it something specific but not overly specific, eg. "Chef"
          not "Cooking" or "God", and make sure to confirm vocation choices with
          your narrator/dm/storyteller (for more visit cogentroleplay.com/rules)
        </DefaultText>
        <DefaultText
          style={
            isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
          }
        >
          Skill Points: {character.skillPoints}
        </DefaultText>

        <View
          style={isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode}
        ></View>
      </View>
    );
  };

  const renderVocationFooter = () => {
    return (
      <View style={styles.container}>
        <View
          style={isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode}
        ></View>
        <TouchableNativeFeedback
          onPress={() => {
            character.vocations.push({
              id: uuid(),
              name: "",
              stat: "",
              bonus: 0,
            });
            dispatch(setVocations(character.vocations));
          }}
        >
          <View style={styles.addButtonContainer}>
            <DefaultText style={styles.addButtonText}>New</DefaultText>
          </View>
        </TouchableNativeFeedback>

        <DefaultText
          style={
            isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
          }
        >
          When you are satisfied with your vocations click next and you'll get
          to pick your specializations within your vocations! If you forget the
          name of the vocation you want it under you can always return to this
          page.
        </DefaultText>
        <TouchableNativeFeedback
          onPress={() => {
            props.navigation.navigate("Specializations");
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
    );
  };

  const renderSeparator = () => {
    return (
      <View
        style={isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode}
      ></View>
    );
  };

  return (
    <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
      <View style={{ width: "100%" }}>
        <FlatList
          renderItem={(item) => renderVocation(item)}
          data={character.vocations}
          extraData={character.vocations}
          ListHeaderComponent={renderVocationHeader}
          ListFooterComponent={renderVocationFooter}
          ItemSeparatorComponent={renderSeparator}
          showsVerticalScrollIndicator={false}
        />
      </View>
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

  addButtonContainer: {
    padding: 8,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  addButtonText: {
    color: Colors.accentColorDarkMode,
  },
});

export default VocationsScreen;
