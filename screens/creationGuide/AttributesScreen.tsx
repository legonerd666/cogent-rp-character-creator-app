import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableNativeFeedback,
  Alert,
} from "react-native";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import { setStat } from "../../store/actions/currentCharacter";
import { Ionicons } from "@expo/vector-icons";

const AttributeScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  const character = useSelector((state: RootStateOrAny) => state.character);

  const attributePoints = useSelector(
    (state: RootStateOrAny) => state.character.attributePoints
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
            Next up, Attributes!
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
            Attribute Points: {attributePoints}
          </DefaultText>

          <View style={styles.attribute}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Strength:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.strength >= 1) {
                    dispatch(setStat("strength", character.strength - 1));
                    dispatch(
                      setStat("attributePoints", character.attributePoints + 1)
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
                {character.strength}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (attributePoints >= 1) {
                    dispatch(setStat("strength", character.strength + 1));

                    dispatch(
                      setStat("attributePoints", character.attributePoints - 1)
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

          <View style={styles.attribute}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Reflex:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.reflex >= 1) {
                    dispatch(setStat("reflex", character.reflex - 1));

                    dispatch(
                      setStat("attributePoints", character.attributePoints + 1)
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
                {character.reflex}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (attributePoints >= 1) {
                    dispatch(setStat("reflex", character.reflex + 1));

                    dispatch(
                      setStat("attributePoints", character.attributePoints - 1)
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

          <View style={styles.attribute}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Intelligence:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.skillPoints < 3) {
                    Alert.alert(
                      "Using too many Skill Points",
                      "You are currently using Skill Points granted by high inteligence and are not allowed to reduce your intelligence until you refund some Skill Points."
                    );
                  } else {
                    if (character.intelligence >= 1) {
                      dispatch(
                        setStat("intelligence", character.intelligence - 1)
                      );
                      dispatch(
                        setStat(
                          "attributePoints",
                          character.attributePoints + 1
                        )
                      );
                      dispatch(
                        setStat("skillPoints", character.skillPoints - 3)
                      );
                    }
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
                {character.intelligence}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (attributePoints >= 1) {
                    dispatch(
                      setStat("intelligence", character.intelligence + 1)
                    );

                    dispatch(
                      setStat("attributePoints", character.attributePoints - 1)
                    );

                    dispatch(setStat("skillPoints", character.skillPoints + 3));
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
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Once you're done choosing your attributes click next and we will
            move on to Skills!
          </DefaultText>
          <TouchableNativeFeedback
            onPress={() => {
              props.navigation.navigate("Skills");
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

  attribute: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
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
});

export default AttributeScreen;
