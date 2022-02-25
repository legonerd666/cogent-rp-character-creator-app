import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { useSelector, RootStateOrAny } from "react-redux";

import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import Injury from "../../components/Injury";
import BoldText from "../../components/BoldText";

const StateScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const character = useSelector((state: RootStateOrAny) => state.character);

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

  return (
    <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
      <ScrollView>
        <View>
          <BoldText
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
          </BoldText>

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

export default StateScreen;
