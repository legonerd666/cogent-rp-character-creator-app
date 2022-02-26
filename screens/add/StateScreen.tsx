import React, { useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import Injury from "../../components/EditInjury";
import { setStat } from "../../store/actions/currentCharacter";

const StateScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  let loadedInjuries = useSelector(
    (state: RootStateOrAny) => state.character.lingeringInjuries
  );

  const [injuries, setInjuries] = useState(
    useSelector((state: RootStateOrAny) => state.character.injuries)
  );
  const [lingeringInjuries, setLingeringInjuries]: any =
    useState(loadedInjuries);
  const [injuryComponents, setInjuryComponents] = useState(
    lingeringInjuries.map((item: any) => {
      return <Injury key={item.id} itemData={item} />;
    })
  );
  const [destinyPoints, setDestinyPoints] = useState(
    useSelector((state: RootStateOrAny) => state.character.destinyPoints)
  );
  const [commercePoints, setCommercePoints] = useState(
    useSelector((state: RootStateOrAny) => state.character.commercePoints)
  );
  const [equipment, setEquipment] = useState(
    useSelector((state: RootStateOrAny) => state.character.equipment)
  );

  const LingeringInjuries = (props: any) => {
    return (
      <View style={styles.customSkill}>
        {injuryComponents}
        <View
          style={
            Dimensions.get("window").width > 600
              ? styles.addButtonContainerLarge
              : styles.addButtonContainer
          }
        >
          <TouchableNativeFeedback
            onPress={() => {
              let tempInjuries = lingeringInjuries;
              tempInjuries.push({
                id: uuid(),
                name: "",
                penalty: 0,
              });
              setLingeringInjuries(tempInjuries);
              setInjuryComponents(
                lingeringInjuries.map((item: any) => {
                  return <Injury key={item.id} itemData={item} />;
                })
              );
            }}
          >
            <View>
              <DefaultText
                style={
                  Dimensions.get("window").width > 600
                    ? styles.addButtonTextLarge
                    : styles.addButtonText
                }
              >
                Add New
              </DefaultText>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  };

  return (
    <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
      <ScrollView>
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
            Current State:
          </DefaultText>
          <View style={styles.stat}>
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
              Injury Level:
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
                  setInjuries(isNaN(parseInt(text)) ? 0 : parseInt(text));
                  dispatch(
                    setStat(
                      "injuries",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
                }}
                keyboardType={"number-pad"}
                defaultValue={injuries.toString()}
              />
            </View>
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
                  ? styles.skillSectionTextLargeDarkMode
                  : styles.skillSectionTextLargeLightMode
                : isDarkMode
                ? styles.skillSectionTextDarkMode
                : styles.skillSectionTextLightMode
            }
          >
            Lingering Injuries:
          </DefaultText>
          <LingeringInjuries />

          <View
            style={
              isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode
            }
          ></View>

          <View style={styles.stat}>
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
              Destiny Points:
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
                  setDestinyPoints(isNaN(parseInt(text)) ? 0 : parseInt(text));
                  dispatch(
                    setStat(
                      "destinyPoints",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
                }}
                keyboardType={"number-pad"}
                defaultValue={destinyPoints.toString()}
              />
            </View>
          </View>

          <View style={styles.stat}>
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
              Commerce Points:
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
                  setCommercePoints(isNaN(parseInt(text)) ? 0 : parseInt(text));
                  dispatch(
                    setStat(
                      "commercePoints",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
                }}
                keyboardType={"number-pad"}
                defaultValue={commercePoints.toString()}
              />
            </View>
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
                  ? styles.textLargeDarkMode
                  : styles.textLargeLightMode
                : isDarkMode
                ? styles.textDarkMode
                : styles.textLightMode
            }
          >
            Equipment:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.inputContainerMultilineLargeDarkMode
                  : styles.inputContainerMultilineLargeLightMode
                : isDarkMode
                ? styles.inputContainerMultilineDarkMode
                : styles.inputContainerMultilineLightMode
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
                setEquipment(text);
                dispatch(setStat("equipment", text));
              }}
              multiline={true}
              defaultValue={equipment != "None" ? equipment : ""}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenDarkMode: {
    backgroundColor: Colors.primaryColorLightMode,
    flex: 1,
  },
  screenLightMode: {
    backgroundColor: Colors.primaryColorLightMode,
    flex: 1,
  },
  textDarkMode: {
    color: Colors.accentColorDarkMode,
    textAlign: "center",
  },
  textLightMode: {
    color: Colors.accentColorLightMode,
    textAlign: "center",
  },
  textLargeDarkMode: {
    color: Colors.accentColorDarkMode,
    textAlign: "center",
  },
  textLargeLightMode: {
    color: Colors.accentColorLightMode,
    textAlign: "center",
  },
  stat: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    width: "70%",
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
  inputContainerMultilineDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: "70%",
    height: 120,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  inputContainerMultilineLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: "70%",
    height: 120,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  inputContainerMultilineLargeDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: "70%",
    height: 200,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  inputContainerMultilineLargeLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: "70%",
    height: 200,
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

  sectionTextDarkMode: {
    fontSize: 30,
    color: Colors.accentColorDarkMode,
  },
  sectionTextLightMode: {
    fontSize: 30,
    color: Colors.accentColorLightMode,
  },
  sectionTextLargeDarkMode: {
    fontSize: 55,
    color: Colors.accentColorDarkMode,
  },
  sectionTextLargeLightMode: {
    fontSize: 55,
    color: Colors.accentColorLightMode,
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

  customSkill: {
    justifyContent: "center",
    alignItems: "center",
  },

  addButtonContainerLarge: {
    backgroundColor: "#107aeb",
    borderRadius: 10,
    elevation: 3,
    padding: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonContainer: {
    backgroundColor: "#107aeb",
    borderRadius: 10,
    elevation: 3,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonTextLarge: {
    fontSize: 40,
  },
  addButtonText: {},

  container: {
    alignItems: "center",
    width: "92%",
    alignSelf: "center",
    paddingTop: 30,
  },
});

export default StateScreen;
