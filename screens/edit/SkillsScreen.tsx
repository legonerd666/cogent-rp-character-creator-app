import React, { useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  Alert,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import Vocation from "../../components/EditVocation";
import { setNumberStat } from "../../store/actions/currentCharacter";
import Specialization from "../../components/EditSpecialization";
import { ISpecialization, IVocation } from "../../constants/characterTemplate";

const SkillsScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  let loadedVocations = useSelector(
    (state: RootStateOrAny) => state.character.vocations
  );
  let loadedProficiencies = useSelector(
    (state: RootStateOrAny) => state.character.proficiencies
  );

  const [endurance, setndurance] = useState(
    useSelector((state: RootStateOrAny) => state.character.endurance)
  );
  const [athletics, setAthletics] = useState(
    useSelector((state: RootStateOrAny) => state.character.athletics)
  );
  const [grip, setGrip] = useState(
    useSelector((state: RootStateOrAny) => state.character.grip)
  );
  const [swim, setSwim] = useState(
    useSelector((state: RootStateOrAny) => state.character.swim)
  );
  const [skillThrow, setSkillThrow] = useState(
    useSelector((state: RootStateOrAny) => state.character.skillThrow)
  );
  const [perception, setPerception] = useState(
    useSelector((state: RootStateOrAny) => state.character.perception)
  );
  const [acrobatics, setAcrobatics] = useState(
    useSelector((state: RootStateOrAny) => state.character.acrobatics)
  );
  const [ridePilot, setRidePilot] = useState(
    useSelector((state: RootStateOrAny) => state.character.ridePilot)
  );
  const [sleightOfHand, setSleightOfHand] = useState(
    useSelector((state: RootStateOrAny) => state.character.sleightOfHand)
  );
  const [stealth, setStealth] = useState(
    useSelector((state: RootStateOrAny) => state.character.stealth)
  );
  const [generalKnowledge, setGeneralKnowledge] = useState(
    useSelector((state: RootStateOrAny) => state.character.generalKnowledge)
  );
  const [deception, setDeception] = useState(
    useSelector((state: RootStateOrAny) => state.character.deception)
  );
  const [infiltration, setInfiltration] = useState(
    useSelector((state: RootStateOrAny) => state.character.infiltration)
  );
  const [persuasion, setPersuasion] = useState(
    useSelector((state: RootStateOrAny) => state.character.persuasion)
  );
  const [survival, setSurvival] = useState(
    useSelector((state: RootStateOrAny) => state.character.survival)
  );
  const [vocations, setVocations] = useState(loadedVocations);
  const [vocationComponents, setVocationComponents] = useState(
    vocations.map((item: IVocation) => {
      return <Vocation key={item.id} itemData={item} />;
    })
  );
  const [specializations, setSpecializations] = useState(
    useSelector((state: RootStateOrAny) => state.character.specializations)
  );
  const [specializationComponents, setSpecializationComponents] = useState(
    specializations.map((item: ISpecialization) => {
      return <Specialization key={item.id} itemData={item} />;
    })
  );

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
                vocations.map((item: IVocation) => {
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

  const Specializations = (props: any) => {
    return (
      <View style={styles.customSkill}>
        {specializationComponents}
        <View
          style={
            Dimensions.get("window").width > 600
              ? styles.addButtonContainerLarge
              : styles.addButtonContainer
          }
        >
          <TouchableNativeFeedback
            onPress={() => {
              let tempSpecializations = specializations;
              tempSpecializations.push({
                parentName: "",
                id: uuid(),
                type: "v",
                name: "",
                stat: "",
                bonus: 0,
                dmgBonus: 0,
                armorPen: 0,
              });
              setSpecializations(tempSpecializations);
              setSpecializationComponents(
                specializations.map((item: ISpecialization) => {
                  return <Specialization key={item.id} itemData={item} />;
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
            Skills:
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

          <View style={styles.stat}>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  dispatch(
                    setNumberStat(
                      "athletics",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  setndurance(isNaN(parseInt(text)) ? 0 : parseInt(text));
                  dispatch(
                    setNumberStat(
                      "endurance",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  dispatch(
                    setNumberStat(
                      "grip",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  dispatch(
                    setNumberStat(
                      "swim",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  dispatch(
                    setNumberStat(
                      "skillThrow",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  dispatch(
                    setNumberStat(
                      "acrobatics",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  dispatch(
                    setNumberStat(
                      "perception",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  dispatch(
                    setNumberStat(
                      "ridePilot",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  dispatch(
                    setNumberStat(
                      "sleightOfHand",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  dispatch(
                    setNumberStat(
                      "stealth",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  dispatch(
                    setNumberStat(
                      "deception",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  dispatch(
                    setNumberStat(
                      "generalKnowledge",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  dispatch(
                    setNumberStat(
                      "infiltration",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  dispatch(
                    setNumberStat(
                      "persuasion",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
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
                  dispatch(
                    setNumberStat(
                      "survival",
                      isNaN(parseInt(text)) ? 0 : parseInt(text)
                    )
                  );
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
            Vocational and Combat Skills:
          </DefaultText>

          <Specializations />

          <View
            style={
              isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode
            }
          ></View>
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
  largeTitleDarkMode: {
    color: Colors.accentColorDarkMode,
    textAlign: "center",
    fontSize: 50,
  },
  largeTitleLightMode: {
    color: Colors.accentColorLightMode,
    textAlign: "center",
    fontSize: 50,
  },
  titleDarkMode: {
    color: Colors.accentColorDarkMode,
    textAlign: "center",
    fontSize: 30,
  },
  titleLightMode: {
    color: Colors.accentColorLightMode,
    textAlign: "center",
    fontSize: 30,
  },
  infoBlockContainer: {
    alignItems: "center",
    marginVertical: 15,
    marginHorizontal: 30,
  },
  largeInfoDarkMode: {
    fontSize: 35,
    paddingRight: 2,
    textAlign: "center",
    marginVertical: 10,
    color: Colors.accentColorDarkMode,
  },
  largeInfoLightMode: {
    fontSize: 35,
    paddingRight: 2,
    textAlign: "center",
    marginVertical: 10,
    color: Colors.accentColorLightMode,
  },
  infoDarkMode: {
    fontSize: 22,
    paddingRight: 2,
    textAlign: "center",
    color: Colors.accentColorDarkMode,
  },
  infoLightMode: {
    fontSize: 22,
    paddingRight: 2,
    textAlign: "center",
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

  stat: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
  },

  statTitleDarkMode: {
    color: Colors.accentColorDarkMode,
  },
  statTitleLightMode: {
    color: Colors.accentColorLightMode,
  },
  statTitleLargeDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 50,
  },
  statTitleLargeLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 50,
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
  container: {
    alignItems: "center",
    width: "92%",
    alignSelf: "center",
    paddingTop: 30,
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
});

export default SkillsScreen;
