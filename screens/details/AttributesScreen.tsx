import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useSelector, RootStateOrAny } from "react-redux";

import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";

const AttributesDetailsScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const [character, setCharacter] = useState(
    useSelector((state: RootStateOrAny) => state.character)
  );

  return (
    <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
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
          Strength:
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
          {character.strength}
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
          Reflex:
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
          {character.reflex}
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
          Intelligence:
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
          {character.intelligence}
        </DefaultText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenDarkMode: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.primaryColorDarkMode,
    paddingBottom: 150,
  },
  screenLightMode: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.primaryColorLightMode,
    paddingBottom: 150,
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
    marginBottom: 30,
  },
  sectionTextLightMode: {
    fontSize: 30,
    color: Colors.accentColorLightMode,
    marginBottom: 30,
  },
  sectionTextLargeDarkMode: {
    fontSize: 55,
    color: Colors.accentColorDarkMode,
    marginBottom: 30,
  },
  sectionTextLargeLightMode: {
    fontSize: 55,
    color: Colors.accentColorLightMode,
    marginBottom: 30,
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
});

export default AttributesDetailsScreen;
