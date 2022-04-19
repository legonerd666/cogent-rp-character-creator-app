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
  list: {
    width: "80%",
    alignSelf: "center",
  },
  separator: {
    height: 1,
    width: "90%",
    alignSelf: "center",
  },
  fullScreenNoticeContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  centeredText: {
    textAlign: "center",
  },
  addButtonContainer: {
    borderRadius: 10,
    elevation: 3,
    padding: 5,
    marginTop: 10,
    borderWidth: 3,
  },
});

const darkMode = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primaryColorDarkMode,
  },
  text: {
    color: Colors.accentColorDarkMode,
  },
  invertedText: {
    color: Colors.primaryColorLightMode,
  },
  textBox: {
    backgroundColor: Colors.textBoxColorDarkMode,
  },
  separator: {
    backgroundColor: Colors.dividerColorDarkMode,
  },
  addButtonContainer: {
    backgroundColor: Colors.textBoxColorDarkMode,
    borderColor: Colors.accentColorDarkMode,
  },
});

const lightMode = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primaryColorLightMode,
  },
  text: {
    color: Colors.accentColorLightMode,
  },
  invertedText: {
    color: Colors.primaryColorLightMode,
  },
  textBox: {
    backgroundColor: Colors.textBoxColorLightMode,
  },
  separator: {
    backgroundColor: Colors.dividerColorLightMode,
  },
  addButtonContainer: {
    backgroundColor: Colors.textBoxColorDarkMode,
    borderColor: Colors.accentColorDarkMode,
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
  list: {
    paddingBottom: 80,
  },
  fullScreenNoticeContainer: {
    marginHorizontal: 50,
  },
  addButton: {
    paddingHorizontal: 5,
    paddingVertical: 3,
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

  standardNotice: {
    ...darkMode.text,
    ...standard.text,
    ...general.centeredText,
  },

  text: { ...darkMode.text, ...standard.text },

  settingContainer: { ...general.settingContainer },

  searchBarContainer: {
    ...general.searchBarContainer,
    ...darkMode.textBox,
    ...standard.searchBarContainer,
  },

  list: {
    ...general.list,
    ...standard.list,
  },

  separator: {
    ...general.separator,
    ...darkMode.separator,
  },

  textInput: {
    ...darkMode.textBox,
  },

  fullScreenNoticeContainer: {
    ...general.fullScreenNoticeContainer,
    ...standard.fullScreenNoticeContainer,
  },

  addButtonContainer: {
    ...general.addButtonContainer,
    ...darkMode.addButtonContainer,
  },

  addButton: {
    ...standard.text,
    ...standard.addButton,
    ...darkMode.invertedText,
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

  standardNotice: {
    ...lightMode.text,
    ...standard.text,
  },

  text: { ...lightMode.text, ...standard.text },

  settingContainer: { ...general.settingContainer },

  searchBarContainer: {
    ...general.searchBarContainer,
    ...lightMode.textBox,
    ...standard.searchBarContainer,
  },

  list: {
    ...general.list,
    ...standard.list,
  },

  separator: {
    ...general.separator,
    ...lightMode.separator,
  },

  textInput: {
    ...lightMode.textBox,
  },

  fullScreenNoticeContainer: {
    ...general.fullScreenNoticeContainer,
    ...standard.fullScreenNoticeContainer,
  },

  addButtonContainer: {
    ...general.addButtonContainer,
    ...lightMode.addButtonContainer,
  },

  addButton: {
    ...standard.text,
    ...standard.addButton,
    ...lightMode.invertedText,
  },
};
