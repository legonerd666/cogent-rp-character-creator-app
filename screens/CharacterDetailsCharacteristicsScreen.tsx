import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import AppLoading from "expo-app-loading";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, RootStateOrAny } from "react-redux";

import DefaultText from "../components/DefaultText";
import DataManipulation from "../functions/DataManipulation";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const CharacteristicsDetailsScreen = (props: any) => {
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
        <View style={styles.infoBlockContainer}>
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
            Name:
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
            {character.name}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
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
            Age:
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
            {character.age}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
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
            Race:
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
            {character.race}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
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
            Body Type:
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
            {character.bodyType}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
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
            Disabling Characteristics:
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
            {character.disablingCharacteristics}
          </DefaultText>
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
});

export default CharacteristicsDetailsScreen;
