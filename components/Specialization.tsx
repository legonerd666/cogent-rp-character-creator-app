import React, { useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { RadioButton } from "react-native-paper";
import { RootStateOrAny, useSelector } from "react-redux";

import DefaultText from "./DefaultText";
import Colors from "../constants/Colors";
import BoldText from "./BoldText";

const Specialization = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);
  const [isDarkMode] = useState(mode === "dark" ? true : false);

  if (props.itemData.type === "v") {
    return (
      <View style={styles.specialization}>
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
            numberOfLines={1}
          >
            Governing Vocation:
          </DefaultText>
        </View>
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
                  ? styles.largeInfoDarkMode
                  : styles.largeInfoLightMode
                : isDarkMode
                ? styles.infoDarkMode
                : styles.infoLightMode
            }
            numberOfLines={1}
          >
            {props.itemData.parentName}
          </BoldText>
        </View>
        <View style={styles.checkboxes}>
          <View style={styles.checkbox}>
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
              Vocational:
            </DefaultText>
            <RadioButton
              value="v"
              status={props.itemData.type === "v" ? "checked" : "unchecked"}
              color={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              uncheckedColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>
          <View style={styles.checkbox}>
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
              Combat:
            </DefaultText>
            <RadioButton
              value="c"
              status={props.itemData.type === "c" ? "checked" : "unchecked"}
              color={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              uncheckedColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>
        </View>
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
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
              numberOfLines={1}
            >
              {props.itemData.name}
            </BoldText>
          </View>
        </View>
        <View style={styles.checkboxes}>
          <View style={styles.checkbox}>
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
              Str:
            </DefaultText>
            <RadioButton
              value="str"
              status={props.itemData.stat === "str" ? "checked" : "unchecked"}
              color={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              uncheckedColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>
          <View style={styles.checkbox}>
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
              Ref:
            </DefaultText>
            <RadioButton
              value="ref"
              status={props.itemData.stat === "ref" ? "checked" : "unchecked"}
              color={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              uncheckedColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>

          <View style={styles.checkbox}>
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
              Int:
            </DefaultText>
            <RadioButton
              value="int"
              status={props.itemDatastat === "int" ? "checked" : "unchecked"}
              color={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              uncheckedColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>
        </View>
        <View style={styles.bonus}>
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
            Bonus:
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
              {props.itemData.bonus}
            </DefaultText>
          </View>
        </View>
        <View
          style={isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode}
        ></View>
      </View>
    );
  } else {
    return (
      <View style={styles.specialization}>
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
            numberOfLines={1}
          >
            Governing Vocation:
          </DefaultText>
        </View>
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
                  ? styles.largeInfoDarkMode
                  : styles.largeInfoLightMode
                : isDarkMode
                ? styles.infoDarkMode
                : styles.infoLightMode
            }
            numberOfLines={1}
          >
            {props.itemData.parentName}
          </BoldText>
        </View>
        <View style={styles.checkboxes}>
          <View style={styles.checkbox}>
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
              Vocational:
            </DefaultText>
            <RadioButton
              value="v"
              status={props.itemData.type === "v" ? "checked" : "unchecked"}
              color={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              uncheckedColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>
          <View style={styles.checkbox}>
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
              Combat:
            </DefaultText>
            <RadioButton
              value="c"
              status={props.itemData.type === "c" ? "checked" : "unchecked"}
              color={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              uncheckedColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>
        </View>
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
                    ? styles.largeInfoDarkMode
                    : styles.largeInfoLightMode
                  : isDarkMode
                  ? styles.infoDarkMode
                  : styles.infoLightMode
              }
              numberOfLines={1}
            >
              {props.itemData.name}
            </BoldText>
          </View>
        </View>
        <View style={styles.checkboxes}>
          <View style={styles.checkbox}>
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
              Cbt:
            </DefaultText>
            <RadioButton
              value="cbt"
              status={props.itemData.stat === "cbt" ? "checked" : "unchecked"}
              color={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              uncheckedColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>
          <View style={styles.checkbox}>
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
              Str:
            </DefaultText>
            <RadioButton
              value="str"
              status={props.itemData.stat === "str" ? "checked" : "unchecked"}
              color={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              uncheckedColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>
        </View>
        <View style={styles.checkboxes}>
          <View style={styles.checkbox}>
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
              Ref:
            </DefaultText>
            <RadioButton
              value="ref"
              status={props.itemData.stat === "ref" ? "checked" : "unchecked"}
              color={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              uncheckedColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>

          <View style={styles.checkbox}>
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
              Int:
            </DefaultText>
            <RadioButton
              value="int"
              status={props.itemDatastat === "int" ? "checked" : "unchecked"}
              color={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              uncheckedColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
            />
          </View>
        </View>
        <View style={styles.bonus}>
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
            Bonus:
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
              {props.itemData.bonus}
            </DefaultText>
          </View>
        </View>
        <View style={styles.bonus}>
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
            Damage Bonus:
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
              {props.itemData.dmgBonus}
            </DefaultText>
          </View>
        </View>
        <View style={styles.bonus}>
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
            Armor Penetration:
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
              {props.itemData.armorPen}
            </DefaultText>
          </View>
        </View>
        <View
          style={isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode}
        ></View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  specialization: {
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
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  bonus: {
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
  },
  inputContainerLightMode: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  inputContainerLargeDarkMode: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  inputContainerLargeLightMode: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },

  bonusInputContainerDarkMode: {
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  bonusInputContainerLightMode: {
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  bonusInputContainerLargeDarkMode: {
    width: 70,
    height: 70,
    justifyContent: "center",
  },
  bonusInputContainerLargeLightMode: {
    width: 70,
    height: 70,
    justifyContent: "center",
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
    paddingRight: 2,
    textAlign: "center",
    color: Colors.accentColorDarkMode,
  },
  largeInfoLightMode: {
    fontSize: 35,
    paddingRight: 2,
    textAlign: "center",
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

export default Specialization;
