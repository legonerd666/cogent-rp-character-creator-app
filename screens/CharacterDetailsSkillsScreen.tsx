import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import AppLoading from "expo-app-loading";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, RootStateOrAny } from "react-redux";

import DefaultText from "../components/DefaultText";
import DataManipulation from "../functions/DataManipulation";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import Vocation from "../components/Vocation";
import Proficiency from "../components/Proficiency";

const SkillsDetailsScreen = (props: any) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: characterName,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Edit"
            iconName="create"
            onPress={() => {
              props.navigation.navigate("Edit");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dataManipulation = new DataManipulation();

  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const fetchData = () => {
    return dataManipulation.storeLoadedData();
  };

  const [character, setCharacter] = useState({
    name: "Failed to read",
    age: "Failed to read",
    race: "Failed to read",
    bodyType: "Failed to read",
    disablingCharacteristics: "Failed to read",
    strength: "Failed to read",
    reflex: "Failed to read",
    intelligence: "Failed to read",
    endurance: "Failed to read",
    athletics: "Failed to read",
    grip: "Failed to read",
    swim: "Failed to read",
    skillThrow: "Failed to read",
    perception: "Failed to read",
    acrobatics: "Failed to read",
    ridePilot: "Failed to read",
    sleightOfHand: "Failed to read",
    stealth: "Failed to read",
    generalKnowledge: "Failed to read",
    deception: "Failed to read",
    infiltration: "Failed to read",
    persuasion: "Failed to read",
    survival: "Failed to read",
    vocations: [],
    proficiencies: [],
    injuries: "Failed to read",
    lingeringInjuries: [],
    destinyPoints: "Failed to read",
    commercePoints: "Failed to read",
    equipment: "Failed to read",
    notes: "Failed to read",
    bgColor: "Failed to read",
  });

  const characterId = useSelector(
    (state: RootStateOrAny) => state.character.id
  );
  const characterName = useSelector(
    (state: RootStateOrAny) => state.character.name
  );

  const vocationComponents = character.vocations.map((item: any) => {
    return <Vocation key={item.id} itemData={item} />;
  });

  const proficiencyComponents = character.proficiencies.map((item: any) => {
    return <Proficiency key={item.id} itemData={item} />;
  });

  const Vocations = (props: any) => {
    if (vocationComponents.length === 0) {
      return (
        <View style={styles.customSkill}>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTitleDarkMode
                  : styles.largeTitleLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            You Have No Vocations
          </DefaultText>
        </View>
      );
    }
    return <View style={styles.customSkill}>{vocationComponents}</View>;
  };

  const Proficiencies = (props: any) => {
    if (proficiencyComponents.length === 0) {
      return (
        <View style={styles.customSkill}>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTitleDarkMode
                  : styles.largeTitleLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            You Have No Proficiencies
          </DefaultText>
        </View>
      );
    }
    return <View style={styles.customSkill}>{proficiencyComponents}</View>;
  };

  const finishHandler = () => {
    setCharacter(
      dataManipulation
        .getData()
        .find((characterById) => characterById.id === characterId)
    );
    setDataIsLoaded(true);
  };

  if (!dataIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchData}
        onFinish={finishHandler}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
      <ScrollView>
        <View style={styles.container}>
          <View>
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
                    ? styles.statTitleLargeDarkMode
                    : styles.statTitleLargeLightMode
                  : isDarkMode
                  ? styles.statTitleDarkMode
                  : styles.statTitleLightMode
              }
            >
              Athletics:
            </DefaultText>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.athletics}
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
              Endurance:
            </DefaultText>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.endurance}
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
              Grip:
            </DefaultText>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.grip}
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
              Swim:
            </DefaultText>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.swim}
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
              Throw:
            </DefaultText>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.skillThrow}
            </DefaultText>
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
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.acrobatics}
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
              Perception:
            </DefaultText>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.perception}
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
              Ride/Pilot:
            </DefaultText>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.ridePilot}
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
              Sleight of Hand:
            </DefaultText>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.sleightOfHand}
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
              Stealth:
            </DefaultText>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.stealth}
            </DefaultText>
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
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.deception}
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
              General Knowledge:
            </DefaultText>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.generalKnowledge}
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
              Infiltration:
            </DefaultText>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.infiltration}
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
              Persuasion:
            </DefaultText>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.persuasion}
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
              Survival:
            </DefaultText>
            <DefaultText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
            >
              {character.survival}
            </DefaultText>
          </View>

          <View
            style={
              isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode
            }
          ></View>

          <View>
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

          <View>
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
    paddingTop: 30,
  },
  screenLightMode: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.primaryColorLightMode,
    paddingTop: 30,
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
  },
});

export default SkillsDetailsScreen;
