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
import Injury from "../components/Injury";

const StateDetailsScreen = (props: any) => {
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

  const injuryComponents = character.lingeringInjuries.map((item: any) => {
    return <Injury key={item.id} itemData={item} />;
  });

  const Injuries = (props: any) => {
    if (injuryComponents.length === 0) {
      return (
        <View>
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
            You Have No Lingering Injuries
          </DefaultText>
        </View>
      );
    }
    return <View>{injuryComponents}</View>;
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
        <View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleTextLargeDarkMode
                  : styles.titleTextLargeLightMode
                : isDarkMode
                ? styles.titleTextDarkMode
                : styles.titleTextLightMode
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
              {character.injuries}
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
                    ? styles.textLargeDarkMode
                    : styles.textLargeLightMode
                  : isDarkMode
                  ? styles.textDarkMode
                  : styles.textLightMode
              }
            >
              Lingering Injuries:
            </DefaultText>
            <Injuries />
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
              Destiny Points:
            </DefaultText>
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
              {character.destinyPoints}
            </DefaultText>
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
              {character.commercePoints}
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
                    ? styles.textLargeDarkMode
                    : styles.textLargeLightMode
                  : isDarkMode
                  ? styles.textDarkMode
                  : styles.textLightMode
              }
            >
              Equipment:
            </DefaultText>
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
              {character.equipment}
            </DefaultText>
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
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 5,
  },
  titleTextDarkMode: {
    color: Colors.accentColorDarkMode,
    textAlign: "center",
    fontSize: 30,
    marginBottom: 30,
  },
  titleTextLightMode: {
    color: Colors.accentColorLightMode,
    textAlign: "center",
    fontSize: 30,
    marginBottom: 30,
  },
  titleTextLargeDarkMode: {
    color: Colors.accentColorDarkMode,
    textAlign: "center",
    fontSize: 55,
    marginBottom: 30,
  },
  titleTextLargeLightMode: {
    color: Colors.accentColorLightMode,
    textAlign: "center",
    fontSize: 55,
    marginBottom: 30,
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
});

export default StateDetailsScreen;
