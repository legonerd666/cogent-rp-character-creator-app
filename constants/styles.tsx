import { StyleSheet } from "react-native";
import Colors from "./Colors";

const general = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  screenItemsCenter: {
    justifyContent: "center",
  },
  settingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    height: 100,
  },
  searchBarContainer: {
    borderRadius: 50,
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 5,
  },
});

const darkMode = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primaryColorDarkMode,
  },
  text: {
    color: Colors.accentColorDarkMode,
  },
  textBox: {
    backgroundColor: Colors.textBoxColorDarkMode,
  },
});

const lightMode = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primaryColorLightMode,
  },
  text: {
    color: Colors.accentColorLightMode,
  },
  textBox: {
    backgroundColor: Colors.textBoxColorLightMode,
  },
});

const standard = StyleSheet.create({
  extraSmallText: {
    fontSize: 10,
  },
  text: {
    fontSize: 20,
  },
  largeText: {
    fontSize: 30,
  },
  searchBarContainer: {
    height: 50,
    width: "73%",
  },
});

const sevenInch = StyleSheet.create({});

const tenInch = StyleSheet.create({});

export const darkModeStandard = {
  screenItemsCenter: {
    ...darkMode.screen,
    ...general.screen,
    ...general.screenItemsCenter,
  },

  screenItemsTop: { ...darkMode.screen, ...general.screen },

  smallNotice: { ...darkMode.text, ...standard.extraSmallText },

  text: { ...darkMode.text, ...standard.text },

  settingContainer: { ...general.settingContainer },

  searchBarContainer: {
    ...general.searchBarContainer,
    ...darkMode.textBox,
    ...standard.searchBarContainer,
  },
};

export const lightModeStandard = {
  screenItemsCenter: {
    ...lightMode.screen,
    ...general.screen,
    ...general.screenItemsCenter,
  },

  screenItemsTop: { ...lightMode.screen, ...general.screen },

  smallNotice: { ...lightMode.text, ...standard.extraSmallText },

  text: { ...lightMode.text, ...standard.text },

  settingContainer: { ...general.settingContainer },

  searchBarContainer: {
    ...general.searchBarContainer,
    ...lightMode.textBox,
    ...standard.searchBarContainer,
  },
};
