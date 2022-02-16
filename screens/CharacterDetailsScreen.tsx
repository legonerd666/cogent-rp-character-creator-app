import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import AppLoading from "expo-app-loading";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, RootStateOrAny } from "react-redux";

import DefaultText from "../components/DefaultText";
import BoldText from "../components/BoldText";
import DataManipulation from "../functions/DataManipulation";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const CharacterDetailsScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dataManipulation = new DataManipulation();

  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const fetchData = () => {
    return dataManipulation.storeLoadedData();
  };

  const [character, setCharacter] = useState({
    name: "Failed to read",
    dangerLevel: "Failed to read",
    species: "Failed to read",
    color: "Failed to read",
    appearance: "Failed to read",
    size: "Failed to read",
    statistics: "Failed to read",
    abilities: "Failed to read",
    description: "Failed to read",
    habitat: "Failed to read",
    notes: "Failed to read",
  });

  const characterId = props.navigation.getParam("characterId");

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
    <ScrollView>
      <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
        <View style={styles.infoBlockContainer}>
          <BoldText
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
          </BoldText>
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
          <BoldText
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
            Danger Level:
          </BoldText>
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
            {character.dangerLevel}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
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
            Species:
          </BoldText>
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
            {character.species}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
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
            Color:
          </BoldText>
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
            {character.color}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
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
            Size:
          </BoldText>
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
            {character.size}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
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
            Known Habitat:
          </BoldText>
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
            {character.habitat}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
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
            Stats:
          </BoldText>
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
            {character.statistics}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
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
            Abilities:
          </BoldText>
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
            {character.abilities}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
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
            Appearance:
          </BoldText>
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
            {character.appearance}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
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
            Description:
          </BoldText>
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
            {character.description}
          </DefaultText>
        </View>

        <View style={styles.infoBlockContainer}>
          <BoldText
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
            Notes:
          </BoldText>
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
            {character.notes}
          </DefaultText>
        </View>
      </View>
    </ScrollView>
  );
};

CharacterDetailsScreen.navigationOptions = (navigationData: any) => {
  const name = navigationData.navigation.getParam("characterName");
  const id = navigationData.navigation.getParam("characterId");
  return {
    headerTitle: name,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Edit"
          iconName="create"
          onPress={() => {
            navigationData.navigation.navigate({
              routeName: "Edit",
              params: {
                characterId: id,
                characterName: name,
              },
            });
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
  largeTitleDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 50,
  },
  largeTitleLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 50,
  },
  titleDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 30,
  },
  titleLightMode: {
    color: Colors.accentColorLightMode,
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
});

export default CharacterDetailsScreen;
