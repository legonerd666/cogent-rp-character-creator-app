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
  smallSeparator: {
    height: 1,
    width: "70%",
    alignSelf: "center",
    marginBottom: 40,
    marginTop: 30,
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
    alignSelf: "center",
  },
  border: {
    borderWidth: 3,
  },
  stat: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    alignSelf: "center",
  },
  bonusInputContainer: {
    justifyContent: "center",
    borderRadius: 50,
  },
  inputContainer: {
    justifyContent: "center",
    alignSelf: "center",
  },
  multilineInputContainer: {
    width: "70%",
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: "center",
  },
  colorPicker: {
    alignSelf: "center",
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
    color: Colors.accentColorLightMode,
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
  contrastingBorder: {
    borderColor: Colors.accentColorDarkMode,
  },
  textInputBackground: {
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
    backgroundColor: Colors.textBoxColorLightMode,
    borderColor: Colors.accentColorLightMode,
  },
  contrastingBorder: {
    borderColor: Colors.accentColorLightMode,
  },
  textInputBackground: {
    backgroundColor: Colors.textBoxColorLightMode,
  },
});

const standard = StyleSheet.create({
  extraSmallText: {
    fontSize: 10,
  },
  smallText: {
    fontSize: 15,
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
  addButtonContainer: {
    width: 80,
  },
  addButton: {
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  attributeScreenSpacing: {
    paddingBottom: 150,
  },
  title: {
    marginBottom: 15,
  },
  bonusInputContainer: {
    width: 50,
    height: 50,
    marginVertical: 5,
  },
  inputContainer: {
    width: "70%",
    height: 50,
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 20,
  },
  multilineInputContainer: {
    height: 300,
  },

  colorPicker: {
    height: 200,
    width: "70%",
    marginBottom: 100,
  },

  skillSection: {
    margin: 15,
    marginTop: 23,
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

  screenItemsCenterBottomPadded: {
    ...darkMode.screen,
    ...general.screen,
    ...general.screenItemsCenter,
    ...standard.attributeScreenSpacing,
  },

  screenItemsTop: { ...darkMode.screen, ...general.screen },

  smallNotice: { ...darkMode.text, ...standard.extraSmallText },

  centeredStandardText: {
    ...darkMode.text,
    ...standard.text,
    ...general.centeredText,
  },

  text: { ...darkMode.text, ...standard.text },

  smallText: { ...darkMode.text, ...standard.smallText },

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

  smallSeparator: {
    ...general.smallSeparator,
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
    ...standard.addButtonContainer,
  },

  addButton: {
    ...general.centeredText,
    ...standard.text,
    ...standard.addButton,
    ...darkMode.text,
  },

  contrastingBorder: {
    ...general.border,
    ...darkMode.contrastingBorder,
  },

  title: {
    ...standard.largeText,
    ...darkMode.text,
    ...standard.title,
    ...general.centeredText,
  },

  stat: {
    ...general.stat,
  },

  bonusInputContainer: {
    ...general.bonusInputContainer,
    ...darkMode.textInputBackground,
    ...standard.bonusInputContainer,
  },

  inputContainer: {
    ...general.inputContainer,
    ...darkMode.textInputBackground,
    ...standard.inputContainer,
  },

  multilineInputContainer: {
    ...general.multilineInputContainer,
    ...darkMode.textInputBackground,
    ...standard.multilineInputContainer,
  },

  colorPicker: {
    ...standard.colorPicker,
    ...general.colorPicker,
  },

  skillSection: {
    ...standard.skillSection,
  },
};

export const lightModeStandard = {
  screenItemsCenter: {
    ...lightMode.screen,
    ...general.screen,
    ...general.screenItemsCenter,
  },

  screenItemsCenterBottomPadded: {
    ...lightMode.screen,
    ...general.screen,
    ...general.screenItemsCenter,
    ...standard.attributeScreenSpacing,
  },

  screenItemsTop: { ...lightMode.screen, ...general.screen },

  smallNotice: { ...lightMode.text, ...standard.extraSmallText },

  centeredStandardText: {
    ...lightMode.text,
    ...standard.text,
    ...general.centeredText,
  },

  text: { ...lightMode.text, ...standard.text },

  smallText: { ...lightMode.text, ...standard.smallText },

  title: {
    ...standard.largeText,
    ...lightMode.text,
    ...standard.title,
    ...general.centeredText,
  },

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

  smallSeparator: {
    ...general.smallSeparator,
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
    ...standard.addButtonContainer,
  },

  addButton: {
    ...general.centeredText,
    ...standard.text,
    ...standard.addButton,
    ...lightMode.text,
  },

  contrastingBorder: {
    ...general.border,
    ...lightMode.contrastingBorder,
  },

  bonusInputContainer: {
    ...general.bonusInputContainer,
    ...lightMode.textInputBackground,
    ...standard.bonusInputContainer,
  },

  stat: {
    ...general.stat,
  },

  inputContainer: {
    ...general.inputContainer,
    ...lightMode.textInputBackground,
    ...standard.inputContainer,
  },

  multilineInputContainer: {
    ...general.multilineInputContainer,
    ...lightMode.textInputBackground,
    ...standard.multilineInputContainer,
  },

  colorPicker: {
    ...standard.colorPicker,
    ...general.colorPicker,
  },

  skillSection: {
    ...standard.skillSection,
  },
};
