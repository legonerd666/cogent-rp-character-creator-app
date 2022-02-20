import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Alert,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import AppLoading from "expo-app-loading";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ColorPicker from "react-native-wheel-color-picker";
import { v4 as uuid } from "uuid";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import DefaultText from "../components/DefaultText";
import BoldText from "../components/BoldText";
import Colors from "../constants/Colors";
import DataManipulation from "../functions/DataManipulation";
import CustomHeaderButton from "../components/HeaderButton";
import Vocation from "../components/NewVocation";
import Proficiency from "../components/NewProficiency";
import Injury from "../components/NewInjury";
import { setStat } from "../store/actions/currentCharacter";

const AddCharacterScreen = (props: any) => {
  const [dataManipulation] = useState(new DataManipulation());

  const dispatch = useDispatch();

  let loadedVocations = useSelector(
    (state: RootStateOrAny) => state.character.vocations
  );
  let loadedProficiencies = useSelector(
    (state: RootStateOrAny) => state.character.proficiencies
  );
  let loadedInjuries = useSelector(
    (state: RootStateOrAny) => state.character.lingeringInjuries
  );

  const [name, setName] = useState("Unknown");
  const [age, setAge] = useState("Unknown");
  const [race, setRace] = useState("Unknown");
  const [bodyType, setBodyType] = useState("Unknown");
  const [disablingCharacteristics, setDisablingCharacteristics] =
    useState("None");
  const [strength, setStrength] = useState(0);
  const [reflex, setReflex] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [endurance, setEndurance] = useState(0);
  const [athletics, setAthletics] = useState(0);
  const [grip, setGrip] = useState(0);
  const [swim, setSwim] = useState(0);
  const [skillThrow, setSkillThrow] = useState(0);
  const [perception, setPerception] = useState(0);
  const [acrobatics, setAcrobatics] = useState(0);
  const [ridePilot, setRidePilot] = useState(0);
  const [sleightOfHand, setSleightOfHand] = useState(0);
  const [stealth, setStealth] = useState(0);
  const [generalKnowledge, setGeneralKnowledge] = useState(0);
  const [deception, setDeception] = useState(0);
  const [infiltration, setInfiltration] = useState(0);
  const [persuasion, setPersuasion] = useState(0);
  const [survival, setSurvival] = useState(0);
  const [vocations, setVocations] = useState(loadedVocations);
  const [vocationComponents, setVocationComponents] = useState(
    vocations.map((item: any) => {
      return <Vocation key={item.id} itemData={item} />;
    })
  );
  const [proficiencies, setProficiencies] = useState(loadedProficiencies);
  const [proficiencyComponents, setProficiencyComponents] = useState(
    proficiencies.map((item: any) => {
      return <Proficiency key={item.id} itemData={item} />;
    })
  );
  const [injuries, setInjuries] = useState(0);
  const [lingeringInjuries, setLingeringInjuries]: any =
    useState(loadedInjuries);
  const [injuryComponents, setInjuryComponents] = useState(
    lingeringInjuries.map((item: any) => {
      return <Injury key={item.id} itemData={item} />;
    })
  );
  const [destinyPoints, setDestinyPoints] = useState(0);
  const [commercePoints, setCommercePoints] = useState(0);
  const [equipment, setEquipment] = useState("None");
  const [notes, setNotes] = useState("No Notes");
  const [bgColor, setBgColor] = useState("black");

  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const Vocations = (props: any) => {
    return (
      <View style={styles.customSkill}>
        {vocationComponents}
        <View
          style={
            Dimensions.get("window").width > 600
              ? styles.addButtonContainerLarge
              : styles.addButtonContainer
          }
        >
          <TouchableNativeFeedback
            onPress={() => {
              let tempVocations = vocations;
              tempVocations.push({
                id: uuid(),
                name: "",
                stat: "",
                bonus: 0,
              });
              setVocations(tempVocations);
              setVocationComponents(
                vocations.map((item: any) => {
                  return <Vocation key={item.id} itemData={item} />;
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

  const Proficiencies = (props: any) => {
    return (
      <View style={styles.customSkill}>
        {proficiencyComponents}
        <View
          style={
            Dimensions.get("window").width > 600
              ? styles.addButtonContainerLarge
              : styles.addButtonContainer
          }
        >
          <TouchableNativeFeedback
            onPress={() => {
              let tempProficiencies = proficiencies;
              tempProficiencies.push({
                id: uuid(),
                name: "",
                stat: "",
                bonus: 0,
              });
              setProficiencies(tempProficiencies);
              setProficiencyComponents(
                proficiencies.map((item: any) => {
                  return <Proficiency key={item.id} itemData={item} />;
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

  const fetchData = () => {
    return dataManipulation.storeLoadedData();
  };

  const saveHandler = () => {
    Alert.alert(
      "Save New Character?",
      "Are you sure you want to save your new character?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            const newCharacters = dataManipulation.getData();

            if (
              loadedVocations[0].stat === "" &&
              loadedVocations[0].name === "" &&
              loadedVocations[0].bonus === 0 &&
              loadedVocations.length === 1
            ) {
              loadedVocations = [];
            }
            if (
              loadedProficiencies[0].stat === "" &&
              loadedProficiencies[0].name === "" &&
              loadedProficiencies[0].bonus === 0 &&
              loadedProficiencies.length === 1
            ) {
              loadedProficiencies = [];
            }
            if (
              loadedInjuries[0].name === "" &&
              loadedInjuries[0].penalty === 0 &&
              loadedInjuries.length === 1
            ) {
              loadedInjuries = [];
            }

            const newCharacter = {
              id: uuid(),
              name: name,
              age: age,
              race: race,
              bodyType: bodyType,
              disablingCharacteristics: disablingCharacteristics,
              strength: strength,
              reflex: reflex,
              intelligence: intelligence,
              endurance: endurance,
              athletics: athletics,
              grip: grip,
              swim: swim,
              skillThrow: skillThrow,
              perception: perception,
              acrobatics: acrobatics,
              ridePilot: ridePilot,
              sleightOfHand: sleightOfHand,
              stealth: stealth,
              generalKnowledge: generalKnowledge,
              deception: deception,
              infiltration: infiltration,
              persuasion: persuasion,
              survival: survival,
              vocations: loadedVocations,
              proficiencies: loadedProficiencies,
              injuries: injuries,
              lingeringInjuries: loadedInjuries,
              destinyPoints: destinyPoints,
              commercePoints: commercePoints,
              equipment: equipment,
              notes: notes,
              bgColor: bgColor,
            };

            newCharacters.push(newCharacter);

            dataManipulation.setData(newCharacters);
            dataManipulation.saveData();
            dispatch(
              setStat("vocations", [
                { id: uuid(), name: "", stat: "", bonus: 0 },
              ])
            );
            dispatch(
              setStat("proficiencies", [
                { id: uuid(), name: "", stat: "", bonus: 0 },
              ])
            );
            dispatch(
              setStat("lingeringInjuries", [
                { id: uuid(), name: "", penalty: 0 },
              ])
            );
            props.navigation.popToTop();
          },
        },
      ]
    );
  };

  useEffect(() => {
    props.navigation.setParams({ save: () => saveHandler() });
  }, [
    name,
    age,
    race,
    bodyType,
    disablingCharacteristics,
    strength,
    reflex,
    intelligence,
    endurance,
    athletics,
    grip,
    swim,
    skillThrow,
    perception,
    acrobatics,
    ridePilot,
    sleightOfHand,
    stealth,
    generalKnowledge,
    deception,
    infiltration,
    persuasion,
    survival,
    vocations,
    proficiencies,
    injuries,
    lingeringInjuries,
    destinyPoints,
    commercePoints,
    equipment,
    notes,
    bgColor,
  ]);

  if (!dataIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchData}
        onFinish={() => {
          setDataIsLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View>
      <ScrollView>
        <View
          style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}
        >
          <View style={styles.introContainer}>
            <BoldText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.introLargeDarkMode
                    : styles.introLargeLightMode
                  : isDarkMode
                  ? styles.introDarkMode
                  : styles.introLightMode
              }
            >
              Enter New Character:
            </BoldText>
          </View>

          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.sectionContainerLargeDarkMode
                  : styles.sectionContainerLargeLightMode
                : isDarkMode
                ? styles.sectionContainerDarkMode
                : styles.sectionContainerLightMode
            }
          >
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
              Characteristics:
            </DefaultText>
          </View>

          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Name:
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
              placeholder="Enter Name..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setName(text);
              }}
              defaultValue=""
            />
          </View>

          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Age:
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
              placeholder="Enter Age..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setAge(text);
              }}
              defaultValue=""
            />
          </View>

          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Race:
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
              placeholder="Enter Race..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setRace(text);
              }}
              defaultValue=""
            />
          </View>

          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Body Type:
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
              placeholder="Enter Body Type..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setBodyType(text);
              }}
              defaultValue=""
            />
          </View>

          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Disabling Characteristics:
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
              placeholder="Enter Disabling Characteristics..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setDisablingCharacteristics(text);
              }}
              defaultValue=""
            />
          </View>

          <View
            style={
              isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode
            }
          ></View>

          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.sectionContainerLargeDarkMode
                  : styles.sectionContainerLargeLightMode
                : isDarkMode
                ? styles.sectionContainerDarkMode
                : styles.sectionContainerLightMode
            }
          >
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
              Attributes:
            </DefaultText>
          </View>

          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Strength:
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
                  setStrength(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={strength.toString()}
              />
            </View>
          </View>

          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Reflex:
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
                  setReflex(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={reflex.toString()}
              />
            </View>
          </View>

          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Intelligence:
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
                  setIntelligence(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={intelligence.toString()}
              />
            </View>
          </View>

          <View
            style={
              isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode
            }
          ></View>

          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.sectionContainerLargeDarkMode
                  : styles.sectionContainerLargeLightMode
                : isDarkMode
                ? styles.sectionContainerDarkMode
                : styles.sectionContainerLightMode
            }
          >
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
              Skills:
            </DefaultText>
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
              Strength Based:
            </DefaultText>
          </View>

          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Athletics:
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
                  setAthletics(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={athletics.toString()}
              />
            </View>
          </View>
          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Endurance:
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
                  setEndurance(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={endurance.toString()}
              />
            </View>
          </View>
          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Grip:
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
                  setGrip(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={grip.toString()}
              />
            </View>
          </View>
          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Swim:
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
                  setSwim(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={swim.toString()}
              />
            </View>
          </View>
          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Throw:
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
                  setSkillThrow(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={skillThrow.toString()}
              />
            </View>
          </View>

          <View
            style={
              isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode
            }
          ></View>

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

          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Acrobatics:
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
                  setAcrobatics(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={acrobatics.toString()}
              />
            </View>
          </View>
          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Perception:
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
                  setPerception(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={perception.toString()}
              />
            </View>
          </View>
          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Ride/Pilot:
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
                  setRidePilot(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={ridePilot.toString()}
              />
            </View>
          </View>
          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Sleight of Hand:
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
                  setSleightOfHand(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={sleightOfHand.toString()}
              />
            </View>
          </View>
          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Stealth:
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
                  setStealth(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={stealth.toString()}
              />
            </View>
          </View>

          <View
            style={
              isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode
            }
          ></View>

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

          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Deception:
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
                  setDeception(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={deception.toString()}
              />
            </View>
          </View>
          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              General Knowledge:
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
                  setGeneralKnowledge(
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  );
                }}
                keyboardType={"number-pad"}
                defaultValue={generalKnowledge.toString()}
              />
            </View>
          </View>
          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Infiltration:
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
                  setInfiltration(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={infiltration.toString()}
              />
            </View>
          </View>
          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Persuasion:
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
                  setPersuasion(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={persuasion.toString()}
              />
            </View>
          </View>
          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
              }
            >
              Survival:
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
                  setSurvival(isNaN(parseInt(text)) ? 0 : parseInt(text));
                }}
                keyboardType={"number-pad"}
                defaultValue={survival.toString()}
              />
            </View>
          </View>

          <View
            style={
              isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode
            }
          ></View>

          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.sectionContainerLargeDarkMode
                  : styles.sectionContainerLargeLightMode
                : isDarkMode
                ? styles.sectionContainerDarkMode
                : styles.sectionContainerLightMode
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
              Vocations:
            </DefaultText>
            <Vocations />
          </View>

          <View
            style={
              isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode
            }
          ></View>

          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.sectionContainerLargeDarkMode
                  : styles.sectionContainerLargeLightMode
                : isDarkMode
                ? styles.sectionContainerDarkMode
                : styles.sectionContainerLightMode
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
              Proficiencies:
            </DefaultText>
            <Proficiencies />
          </View>

          <View
            style={
              isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode
            }
          ></View>

          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.sectionContainerLargeDarkMode
                  : styles.sectionContainerLargeLightMode
                : isDarkMode
                ? styles.sectionContainerDarkMode
                : styles.sectionContainerLightMode
            }
          >
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
          </View>
          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
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
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
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
                    ? styles.titleLargeDarkMode
                    : styles.titleLargeLightMode
                  : isDarkMode
                  ? styles.titleDarkMode
                  : styles.titleLightMode
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
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
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
              }}
              defaultValue={equipment}
              multiline={true}
            />
          </View>

          <View
            style={
              isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode
            }
          ></View>

          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.sectionContainerLargeDarkMode
                  : styles.sectionContainerLargeLightMode
                : isDarkMode
                ? styles.sectionContainerDarkMode
                : styles.sectionContainerLightMode
            }
          >
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
              Notes:
            </DefaultText>
          </View>
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
              placeholder="Enter Notes..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setNotes(text);
              }}
              defaultValue={notes}
              multiline={true}
            />
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
                  ? styles.sectionTextLargeDarkMode
                  : styles.sectionTextLargeLightMode
                : isDarkMode
                ? styles.sectionTextDarkMode
                : styles.sectionTextLightMode
            }
          >
            Background Color:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.colorPickerLarge
                : styles.colorPicker
            }
          >
            <ColorPicker
              onColorChangeComplete={(color) => {
                setBgColor(color);
              }}
              thumbSize={30}
              sliderSize={40}
              noSnap={true}
              row={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

AddCharacterScreen.navigationOptions = (navigationData: any) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="save-sharp"
          onPress={() => {
            navigationData.navigation.getParam("save")();
          }}
        />
      </HeaderButtons>
    ),
  };
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

  introDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 30,
  },
  introLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 30,
  },
  introLargeDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 55,
  },
  introLargeLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 55,
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

  colorPicker: {
    height: 200,
    width: "70%",
    marginBottom: 100,
  },
  colorPickerLarge: {
    height: 200,
    width: "40%",
    marginBottom: 100,
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

  inputContainerLongMultilineDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: "70%",
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
    width: "70%",
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
    width: "70%",
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
    width: "70%",
    height: 500,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
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

  introContainer: {
    marginBottom: 20,
  },

  titleDarkMode: {
    color: Colors.accentColorDarkMode,
  },
  titleLightMode: {
    color: Colors.accentColorLightMode,
  },
  titleLargeDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 50,
  },
  titleLargeLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 50,
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

  sectionContainerDarkMode: {
    justifyContent: "center",
    alignItems: "center",
  },
  sectionContainerLightMode: {
    justifyContent: "center",
    alignItems: "center",
  },
  sectionContainerLargeDarkMode: {
    justifyContent: "center",
    alignItems: "center",
  },
  sectionContainerLargeLightMode: {
    justifyContent: "center",
    alignItems: "center",
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
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    alignSelf: "center",
  },
  addButtonContainer: {
    backgroundColor: "#107aeb",
    borderRadius: 10,
    elevation: 3,
    padding: 5,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    alignSelf: "center",
  },
  addButtonTextLarge: {
    fontSize: 40,
  },
  addButtonText: {},

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
  stat: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
  },
});

export default AddCharacterScreen;
