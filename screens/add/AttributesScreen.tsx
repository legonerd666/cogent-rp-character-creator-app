import React, { useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";

import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import { setNumberStat } from "../../store/actions/currentCharacter";

const AttributesScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  const character = useSelector((state: RootStateOrAny) => state.character);

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
              dispatch(
                setNumberStat(
                  "strength",
                  isNaN(parseInt(text)) ? 0 : parseInt(text)
                )
              );
            }}
            keyboardType={"number-pad"}
            defaultValue={character.strength.toString()}
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
              dispatch(
                setNumberStat(
                  "reflex",
                  isNaN(parseInt(text)) ? 0 : parseInt(text)
                )
              );
            }}
            keyboardType={"number-pad"}
            defaultValue={character.reflex.toString()}
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
              dispatch(
                setNumberStat(
                  "intelligence",
                  isNaN(parseInt(text)) ? 0 : parseInt(text)
                )
              );
            }}
            keyboardType={"number-pad"}
            defaultValue={character.intelligence.toString()}
          />
        </View>
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
  largestatTitleDarkMode: {
    color: Colors.accentColorDarkMode,
    textAlign: "center",
    fontSize: 50,
  },
  largestatTitleLightMode: {
    color: Colors.accentColorLightMode,
    textAlign: "center",
    fontSize: 50,
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

  bonusInputContainerDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: 50,
    height: 50,
    marginVertical: 5,
    justifyContent: "center",
    borderRadius: 50,
  },
  bonusInputContainerLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: 50,
    height: 50,
    marginVertical: 5,
    justifyContent: "center",
    borderRadius: 50,
  },
  bonusInputContainerLargeDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: 70,
    height: 70,
    justifyContent: "center",
    borderRadius: 50,
  },
  bonusInputContainerLargeLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: 70,
    height: 70,
    justifyContent: "center",
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

export default AttributesScreen;
