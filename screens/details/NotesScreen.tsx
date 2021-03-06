import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";
import { useSelector, RootStateOrAny } from "react-redux";
import BoldText from "../../components/BoldText";

import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const NotesScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const character = useSelector((state: RootStateOrAny) => state.character);

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
          <BoldText
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
            Notes:
          </BoldText>
        </View>
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
        <TouchableNativeFeedback
          onPress={() => {
            props.navigation.navigate("Export");
          }}
        >
          <View style={styles.exportButton}>
            <View>
              <DefaultText
                style={isDarkMode ? styles.infoDarkMode : styles.infoLightMode}
              >
                Export Character
              </DefaultText>
            </View>
            <View>
              <Ionicons
                name="cloud-upload-outline"
                size={20}
                color={
                  isDarkMode
                    ? Colors.accentColorDarkMode
                    : Colors.accentColorLightMode
                }
              />
            </View>
          </View>
        </TouchableNativeFeedback>
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
  exportButton: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 50,
  },
});

export default NotesScreen;
