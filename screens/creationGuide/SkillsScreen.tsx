import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableNativeFeedback,
} from "react-native";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import { setStat } from "../../store/actions/currentCharacter";
import { Ionicons } from "@expo/vector-icons";

const SkillsScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  const character = useSelector((state: RootStateOrAny) => state.character);

  const skillPoints = useSelector(
    (state: RootStateOrAny) => state.character.skillPoints
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
            Now the fun part, Skills!
          </DefaultText>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            By default, in One-Shots or short games, player characters will be
            given 12 Skill points they may assign to their character during
            character creation. Any points you have in intelligence will add 3
            skill points to your total. If you are playing in a campaign it is
            recommended to use less as you will gain more as your game
            progresses.
          </DefaultText>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Pick which skills you'd like to increase! Remember that you can't
            increase a core skill past 4 and make sure to save some skill points
            for vocations and vocational and combat skills, but don't worry too
            much as you can always come back and adjust them! (to learn more
            about skills visit cogentroleplay.com/rules/)
          </DefaultText>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Skill Points: {skillPoints}
          </DefaultText>

          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.skillSectionContainerLargeDarkMode
                  : styles.skillSectionContainerLargeLightMode
                : isDarkMode
                ? styles.skillSectionContainerDarkMode
                : styles.skillSectionContainerLightMode
            }
          >
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.skillSectionTextLargeDarkMode
                    : styles.skillSectionTextLargeLightMode
                  : isDarkMode
                  ? styles.skillSectionTextDarkMode
                  : styles.skillSectionTextLightMode
              }
            >
              Strength Based:
            </DefaultText>
          </View>

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Athletics:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.athletics >= 0) {
                    dispatch(setStat("athletics", character.athletics - 1));
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.athletics}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.athletics <= 3 && skillPoints >= 1) {
                    dispatch(setStat("athletics", character.athletics + 1));
                    dispatch(setStat("skillPoints", skillPoints - 1));
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

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Endurance:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.endurance >= 0) {
                    dispatch(setStat("endurance", character.endurance - 1));
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.endurance}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.endurance <= 3 && skillPoints >= 1) {
                    dispatch(setStat("endurance", character.endurance + 1));
                    dispatch(setStat("skillPoints", skillPoints - 1));
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

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Grip:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.grip >= 0) {
                    dispatch(setStat("grip", character.grip - 1));
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.grip}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.grip <= 3 && skillPoints >= 1) {
                    dispatch(setStat("grip", character.grip + 1));
                    dispatch(setStat("skillPoints", skillPoints - 1));
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

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Swim:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.swim >= 0) {
                    dispatch(setStat("swim", character.swim - 1));
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.swim}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.swim <= 3 && skillPoints >= 1) {
                    dispatch(setStat("swim", character.swim + 1));
                    dispatch(setStat("skillPoints", skillPoints - 1));
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

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Throw:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.skillThrow >= 0) {
                    dispatch(setStat("skillThrow", character.skillThrow - 1));
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.skillThrow}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.skillThrow <= 3 && skillPoints >= 1) {
                    dispatch(setStat("skillThrow", character.skillThrow + 1));
                    dispatch(setStat("skillPoints", skillPoints - 1));
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
                ? isDarkMode
                  ? styles.skillSectionContainerLargeDarkMode
                  : styles.skillSectionContainerLargeLightMode
                : isDarkMode
                ? styles.skillSectionContainerDarkMode
                : styles.skillSectionContainerLightMode
            }
          >
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.skillSectionTextLargeDarkMode
                    : styles.skillSectionTextLargeLightMode
                  : isDarkMode
                  ? styles.skillSectionTextDarkMode
                  : styles.skillSectionTextLightMode
              }
            >
              Reflex Based:
            </DefaultText>
          </View>

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Acrobatics:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.acrobatics >= 0) {
                    dispatch(setStat("acrobatics", character.acrobatics - 1));
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.acrobatics}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.acrobatics <= 3 && skillPoints >= 1) {
                    dispatch(setStat("acrobatics", character.acrobatics + 1));
                    dispatch(setStat("skillPoints", skillPoints - 1));
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

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Perception:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.perception >= 0) {
                    dispatch(setStat("perception", character.perception - 1));
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.perception}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.perception <= 3 && skillPoints >= 1) {
                    dispatch(setStat("perception", character.perception + 1));
                    dispatch(setStat("skillPoints", skillPoints - 1));
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

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Ride/Pilot:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.ridePilot >= 0) {
                    dispatch(setStat("ridePilot", character.ridePilot - 1));
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.ridePilot}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.ridePilot <= 3 && skillPoints >= 1) {
                    dispatch(setStat("ridePilot", character.ridePilot + 1));
                    dispatch(setStat("skillPoints", skillPoints - 1));
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

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Sleight of Hand:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.sleightOfHand >= 0) {
                    dispatch(
                      setStat("sleightOfHand", character.sleightOfHand - 1)
                    );
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.sleightOfHand}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.sleightOfHand <= 3 && skillPoints >= 1) {
                    dispatch(
                      setStat("sleightOfHand", character.sleightOfHand + 1)
                    );
                    dispatch(setStat("skillPoints", skillPoints - 1));
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

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Stealth:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.stealth >= 0) {
                    dispatch(setStat("stealth", character.stealth - 1));
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.stealth}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.stealth <= 3 && skillPoints >= 1) {
                    dispatch(setStat("stealth", character.stealth + 1));
                    dispatch(setStat("skillPoints", skillPoints - 1));
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
                ? isDarkMode
                  ? styles.skillSectionContainerLargeDarkMode
                  : styles.skillSectionContainerLargeLightMode
                : isDarkMode
                ? styles.skillSectionContainerDarkMode
                : styles.skillSectionContainerLightMode
            }
          >
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.skillSectionTextLargeDarkMode
                    : styles.skillSectionTextLargeLightMode
                  : isDarkMode
                  ? styles.skillSectionTextDarkMode
                  : styles.skillSectionTextLightMode
              }
            >
              Intelligence Based:
            </DefaultText>
          </View>

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Deception:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.deception >= 0) {
                    dispatch(setStat("deception", character.deception - 1));
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.deception}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.deception <= 3 && skillPoints >= 1) {
                    dispatch(setStat("deception", character.deception + 1));
                    dispatch(setStat("skillPoints", skillPoints - 1));
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

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockLeftAlignDarkMode
                  : styles.textBlockLeftAlignLightMode
              }
            >
              General{"\n"}Knowledge:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.generalKnowledge >= 0) {
                    dispatch(
                      setStat(
                        "generalKnowledge",
                        character.generalKnowledge - 1
                      )
                    );
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.generalKnowledge}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.generalKnowledge <= 3 && skillPoints >= 1) {
                    dispatch(
                      setStat(
                        "generalKnowledge",
                        character.generalKnowledge + 1
                      )
                    );
                    dispatch(setStat("skillPoints", skillPoints - 1));
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

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Infiltration:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.infiltration >= 0) {
                    dispatch(
                      setStat("infiltration", character.infiltration - 1)
                    );
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.infiltration}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.infiltration <= 3 && skillPoints >= 1) {
                    dispatch(
                      setStat("infiltration", character.infiltration + 1)
                    );
                    dispatch(setStat("skillPoints", skillPoints - 1));
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

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Persuasion:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.persuasion >= 0) {
                    dispatch(setStat("persuasion", character.persuasion - 1));
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.persuasion}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.persuasion <= 3 && skillPoints >= 1) {
                    dispatch(setStat("persuasion", character.persuasion + 1));
                    dispatch(setStat("skillPoints", skillPoints - 1));
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

          <View style={styles.skill}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Survival:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.survival >= 0) {
                    dispatch(setStat("survival", character.survival - 1));
                    dispatch(setStat("skillPoints", skillPoints + 1));
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
                {character.survival}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.survival <= 3 && skillPoints >= 1) {
                    dispatch(setStat("survival", character.survival + 1));
                    dispatch(setStat("skillPoints", skillPoints - 1));
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
            Once you're done choosing your skills click next and we will move on
            to Vocations, Vocational Skills, and Combat Skills!
          </DefaultText>
          <TouchableNativeFeedback
            onPress={() => {
              props.navigation.navigate("Vocations");
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

  textBlockLeftAlignDarkMode: {
    color: Colors.accentColorDarkMode,
    marginVertical: 10,
  },
  textBlockLeftAlignLightMode: {
    color: Colors.accentColorLightMode,
    marginVertical: 10,
  },

  skill: {
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
  skillSectionTextDarkMode: {
    fontSize: 22,
    color: Colors.accentColorDarkMode,
  },
  skillSectionTextLightMode: {
    fontSize: 22,
    color: Colors.accentColorLightMode,
  },
  skillSectionTextLargeDarkMode: {
    fontSize: 40,
    color: Colors.accentColorDarkMode,
  },
  skillSectionTextLargeLightMode: {
    fontSize: 40,
    color: Colors.accentColorLightMode,
  },

  skillSectionContainerDarkMode: {
    margin: 15,
    marginTop: 23,
  },
  skillSectionContainerLightMode: {
    margin: 15,
    marginTop: 23,
  },
  skillSectionContainerLargeDarkMode: {
    margin: 15,
    marginTop: 23,
  },
  skillSectionContainerLargeLightMode: {
    margin: 15,
    marginTop: 23,
  },
});

export default SkillsScreen;
