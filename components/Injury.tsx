import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { RootStateOrAny, useSelector } from "react-redux";

import DefaultText from "./DefaultText";
import Colors from "../constants/Colors";
import BoldText from "./BoldText";

const Injury = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);
  const [isDarkMode] = useState(mode === "dark" ? true : false);

  return (
    <View style={styles.injury}>
      <View style={styles.header}>
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
          <BoldText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeHeaderDarkMode
                  : styles.largeHeaderLightMode
                : isDarkMode
                ? styles.headerDarkMode
                : styles.headerLightMode
            }
            numberOfLines={1}
          >
            {props.itemData.name}
          </BoldText>
        </View>
      </View>

      <View style={styles.penalty}>
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
          Penalty:
        </DefaultText>
        <View
          style={
            Dimensions.get("window").width > 600
              ? isDarkMode
                ? styles.penaltyInputContainerLargeDarkMode
                : styles.penaltyInputContainerLargeLightMode
              : isDarkMode
              ? styles.penaltyInputContainerDarkMode
              : styles.penaltyInputContainerLightMode
          }
        >
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
            {props.itemData.penalty < 0
              ? props.itemData.penalty
              : "-" + props.itemData.penalty}
          </DefaultText>
        </View>
      </View>
      <View
        style={isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  injury: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  checkboxes: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  penalty: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainerDarkMode: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    marginVertical: 15,
  },
  inputContainerLightMode: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    marginVertical: 15,
  },
  inputContainerLargeDarkMode: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    marginVertical: 15,
  },
  inputContainerLargeLightMode: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    marginVertical: 15,
  },

  penaltyInputContainerDarkMode: {
    width: 50,
    height: 50,
    justifyContent: "center",
    marginVertical: 15,
  },
  penaltyInputContainerLightMode: {
    width: 50,
    height: 50,
    justifyContent: "center",
    marginVertical: 15,
  },
  penaltyInputContainerLargeDarkMode: {
    width: 70,
    height: 70,
    justifyContent: "center",
    marginVertical: 15,
  },
  penaltyInputContainerLargeLightMode: {
    width: 70,
    height: 70,
    justifyContent: "center",
    marginVertical: 15,
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

  penaltyInputTextDarkMode: {
    fontSize: 16,
    color: Colors.accentColorDarkMode,
    textAlign: "center",
  },
  penaltyInputTextLightMode: {
    fontSize: 16,
    color: Colors.accentColorLightMode,
    textAlign: "center",
  },
  penaltyInputTextLargeDarkMode: {
    fontSize: 25,
    color: Colors.accentColorDarkMode,
    textAlign: "center",
  },
  penaltyInputTextLargeLightMode: {
    fontSize: 25,
    color: Colors.accentColorLightMode,
    textAlign: "center",
  },

  textDarkMode: {
    color: Colors.accentColorDarkMode,
  },
  textLightMode: {
    color: Colors.accentColorLightMode,
  },
  textLargeDarkMode: {
    fontSize: 50,
    color: Colors.accentColorDarkMode,
  },
  textLargeLightMode: {
    fontSize: 50,
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

  largeInfoDarkMode: {
    fontSize: 35,
    textAlign: "center",
    marginVertical: 10,
    color: Colors.accentColorDarkMode,
  },
  largeInfoLightMode: {
    fontSize: 35,
    textAlign: "center",
    marginVertical: 10,
    color: Colors.accentColorLightMode,
  },
  infoDarkMode: {
    fontSize: 25,
    textAlign: "center",
    color: Colors.accentColorDarkMode,
  },
  infoLightMode: {
    fontSize: 25,
    textAlign: "center",
    color: Colors.accentColorLightMode,
  },

  largeHeaderDarkMode: {
    fontSize: 35,
    textAlign: "center",
    marginVertical: 10,
    color: Colors.accentColorDarkMode,
  },
  largeHeaderLightMode: {
    fontSize: 35,
    textAlign: "center",
    marginVertical: 10,
    color: Colors.accentColorLightMode,
  },
  headerDarkMode: {
    fontSize: 22,
    textAlign: "center",
    color: Colors.accentColorDarkMode,
  },
  headerLightMode: {
    fontSize: 22,
    textAlign: "center",
    color: Colors.accentColorLightMode,
  },
});

export default Injury;
