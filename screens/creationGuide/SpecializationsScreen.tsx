import React, { useEffect, useRef, useState } from "react";
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
import { ICharacter, ISpecialization } from "../../constants/characterTemplate";
import {
  setNumberStat,
  setSpecialization,
  setSpecializations,
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

  const renderSpecialization = (specializations: any) => {
    var specialization: ISpecialization = specializations.item;
    if (specialization.type === "v") {
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
                placeholder="Enter Governing Vocation..."
                placeholderTextColor={
                  isDarkMode
                    ? Colors.accentColorDarkMode
                    : Colors.accentColorLightMode
                }
                onChangeText={(text: string) => {
                  specialization.parentName = text;
                  dispatch(
                    setSpecialization(specialization.id, specialization)
                  );
                }}
                defaultValue={specialization.parentName}
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
                Vocational:
              </DefaultText>
              <RadioButton
                value="v"
                status={"checked"}
                onPress={() => {
                  specialization.type = "v";
                  dispatch(
                    setSpecialization(specialization.id, specialization)
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
                Combat:
              </DefaultText>
              <RadioButton
                value="c"
                status={"unchecked"}
                onPress={() => {
                  specialization.type = "c";
                  dispatch(
                    setSpecialization(specialization.id, specialization)
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
              placeholder="Enter Vocational Skill Name..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text: string) => {
                specialization.name = text;
                dispatch(setSpecialization(specialization.id, specialization));
              }}
              defaultValue={specialization.name}
            />
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
                status={specialization.stat === "str" ? "checked" : "unchecked"}
                onPress={() => {
                  specialization.stat = "str";
                  dispatch(
                    setSpecialization(specialization.id, specialization)
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
                status={specialization.stat === "ref" ? "checked" : "unchecked"}
                onPress={() => {
                  specialization.stat = "ref";
                  dispatch(
                    setSpecialization(specialization.id, specialization)
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
                status={specialization.stat === "int" ? "checked" : "unchecked"}
                onPress={() => {
                  specialization.stat = "int";
                  dispatch(
                    setSpecialization(specialization.id, specialization)
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
          <View style={styles.bonus}>
            <DefaultText
              style={
                isDarkMode
                  ? styles.textBlockDarkMode
                  : styles.textBlockLightMode
              }
            >
              Bonus:
            </DefaultText>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                onPress={() => {
                  if (specialization.bonus >= 1) {
                    specialization.bonus = specialization.bonus - 1;
                    dispatch(
                      setSpecialization(specialization.id, specialization)
                    );

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
                {specialization.bonus}
              </DefaultText>
              <TouchableNativeFeedback
                onPress={() => {
                  if (character.skillPoints >= 1) {
                    specialization.bonus += 1;
                    dispatch(
                      setSpecialization(specialization.id, specialization)
                    );

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
                const specializationToDeleteIndex =
                  character.specializations.findIndex(
                    (specializationById: ISpecialization) =>
                      specializationById.id === specialization.id
                  );
                character.specializations.splice(
                  specializationToDeleteIndex,
                  1
                );
                dispatch(setSpecializations(character.specializations));
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
    }

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
              placeholder="Enter Governing Vocation..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text: string) => {
                specialization.parentName = text;
                dispatch(setSpecialization(specialization.id, specialization));
              }}
              defaultValue={specialization.parentName}
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
              Vocational:
            </DefaultText>
            <RadioButton
              value="v"
              status={"unchecked"}
              onPress={() => {
                specialization.type = "v";
                dispatch(setSpecialization(specialization.id, specialization));
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
              Combat:
            </DefaultText>
            <RadioButton
              value="c"
              status={"checked"}
              onPress={() => {
                specialization.type = "c";
                dispatch(setSpecialization(specialization.id, specialization));
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
            placeholder="Enter Combat Skill Name..."
            placeholderTextColor={
              isDarkMode
                ? Colors.accentColorDarkMode
                : Colors.accentColorLightMode
            }
            onChangeText={(text: string) => {
              specialization.name = text;
              dispatch(setSpecialization(specialization.id, specialization));
            }}
            defaultValue={specialization.name}
          />
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
              status={specialization.stat === "cbt" ? "checked" : "unchecked"}
              onPress={() => {
                specialization.stat = "cbt";
                dispatch(setSpecialization(specialization.id, specialization));
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
              Str:
            </DefaultText>
            <RadioButton
              value="str"
              status={specialization.stat === "str" ? "checked" : "unchecked"}
              onPress={() => {
                specialization.stat = "str";
                dispatch(setSpecialization(specialization.id, specialization));
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
              Ref:
            </DefaultText>
            <RadioButton
              value="ref"
              status={specialization.stat === "ref" ? "checked" : "unchecked"}
              onPress={() => {
                specialization.stat = "ref";
                dispatch(setSpecialization(specialization.id, specialization));
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
              status={specialization.stat === "int" ? "checked" : "unchecked"}
              onPress={() => {
                specialization.stat = "int";
                dispatch(setSpecialization(specialization.id, specialization));
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
                if (specialization.bonus >= 1) {
                  specialization.bonus = specialization.bonus - 1;
                  dispatch(
                    setSpecialization(specialization.id, specialization)
                  );

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
              {specialization.bonus}
            </DefaultText>
            <TouchableNativeFeedback
              onPress={() => {
                if (character.skillPoints >= 1) {
                  specialization.bonus += 1;
                  dispatch(
                    setSpecialization(specialization.id, specialization)
                  );

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

        <View style={styles.bonus}>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Damage Bonus:
          </DefaultText>
          <View style={styles.buttons}>
            <TouchableNativeFeedback
              onPress={() => {
                if (specialization.dmgBonus >= 0) {
                  specialization.dmgBonus -= 1;
                  dispatch(
                    setSpecialization(specialization.id, specialization)
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
              {specialization.dmgBonus}
            </DefaultText>
            <TouchableNativeFeedback
              onPress={() => {
                specialization.dmgBonus += 1;
                dispatch(setSpecialization(specialization.id, specialization));
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
        <View style={styles.bonus}>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Armor Penetration:
          </DefaultText>
          <View style={styles.buttons}>
            <TouchableNativeFeedback
              onPress={() => {
                if (specialization.armorPen >= 1) {
                  specialization.armorPen -= 1;
                  dispatch(
                    setSpecialization(specialization.id, specialization)
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
              {specialization.armorPen}
            </DefaultText>
            <TouchableNativeFeedback
              onPress={() => {
                specialization.armorPen += 1;
                dispatch(setSpecialization(specialization.id, specialization));
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
              const specializationToDeleteIndex =
                character.specializations.findIndex(
                  (specializationById: ISpecialization) =>
                    specializationById.id === specialization.id
                );
              character.specializations.splice(specializationToDeleteIndex, 1);
              dispatch(setSpecializations(character.specializations));
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

  const renderSpecializationHeader = () => {
    return (
      <View style={styles.container}>
        <DefaultText
          style={
            isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
          }
        >
          Time to pick your specializations!
        </DefaultText>
        <DefaultText
          style={
            isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
          }
        >
          Specializations are split into 2 categories: Vocational and Combat
          skills. Vocational skills represent a facet of a vocation that doesn't
          do damage. eg. "Chef" might have the vocational skill "Cooking". In
          contrast, Combat Skills can do damage and unless your setting includes
          magic, are restricted to specific categories. eg. "Chef" might have
          the combat skill "Small Weapons" to represent their skill with knives
          in the kitchen.
        </DefaultText>
        <DefaultText
          style={
            isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
          }
        >
          Unless your narrator says otherwise, each vocation can have up to 4
          specializations under it. Also make sure your specializations make
          sense within the confines of its governing vocation. (for more visit
          cogentroleplay.com/rules)
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

  const renderSpecializationFooter = () => {
    return (
      <View>
        <View
          style={isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode}
        ></View>
        <View style={styles.container}>
          <TouchableNativeFeedback
            onPress={() => {
              character.specializations.push({
                parentName: "",
                id: uuid(),
                type: "v",
                name: "",
                stat: "",
                bonus: 0,
                dmgBonus: 0,
                armorPen: 0,
              });
              dispatch(setSpecializations(character.specializations));
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
            When you are satisfied with your specializations click next and
            you'll get to pick your equipment!
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
          renderItem={(item) => renderSpecialization(item)}
          data={character.specializations}
          extraData={character.specializations}
          ListHeaderComponent={renderSpecializationHeader}
          ListFooterComponent={renderSpecializationFooter}
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
