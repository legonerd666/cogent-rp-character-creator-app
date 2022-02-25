import React, { useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";

import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import { setStat } from "../store/actions/currentCharacter";

const EditAttributesScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  const [strength, setStrength] = useState(
    useSelector((state: RootStateOrAny) => state.character.strength)
  );
  const [reflex, setReflex] = useState(
    useSelector((state: RootStateOrAny) => state.character.reflex)
  );
  const [intelligence, setIntelligence] = useState(
    useSelector((state: RootStateOrAny) => state.character.intelligence)
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
              setStrength(isNaN(parseInt(text)) ? 0 : parseInt(text));
              dispatch(
                setStat("strength", isNaN(parseInt(text)) ? 0 : parseInt(text))
              );
            }}
            keyboardType={"number-pad"}
            defaultValue={strength.toString()}
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
              setReflex(isNaN(parseInt(text)) ? 0 : parseInt(text));
              dispatch(
                setStat("reflex", isNaN(parseInt(text)) ? 0 : parseInt(text))
              );
            }}
            keyboardType={"number-pad"}
            defaultValue={reflex.toString()}
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
              setIntelligence(isNaN(parseInt(text)) ? 0 : parseInt(text));
              dispatch(
                setStat(
                  "intelligence",
                  isNaN(parseInt(text)) ? 0 : parseInt(text)
                )
              );
            }}
            keyboardType={"number-pad"}
            defaultValue={intelligence.toString()}
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
  //   screenDarkMode: {
  //     alignItems: "center",
  //     flex: 1,
  //     backgroundColor: Colors.primaryColorDarkMode,
  //   },
  //   screenLightMode: {
  //     alignItems: "center",
  //     flex: 1,
  //     backgroundColor: Colors.primaryColorLightMode,
  //   },

  //   introDarkMode: {
  //     color: Colors.accentColorDarkMode,
  //     fontSize: 30,
  //   },
  //   introLightMode: {
  //     color: Colors.accentColorLightMode,
  //     fontSize: 30,
  //   },
  //   introLargeDarkMode: {
  //     color: Colors.accentColorDarkMode,
  //     fontSize: 55,
  //   },
  //   introLargeLightMode: {
  //     color: Colors.accentColorLightMode,
  //     fontSize: 55,
  //   },

  //   inputContainerDarkMode: {
  //     backgroundColor: Colors.textBoxColorDarkMode,
  //     width: "70%",
  //     height: 50,
  //     justifyContent: "center",
  //     paddingLeft: 10,
  //     marginVertical: 15,
  //     borderRadius: 20,
  //   },
  //   inputContainerLightMode: {
  //     backgroundColor: Colors.textBoxColorLightMode,
  //     width: "70%",
  //     height: 50,
  //     justifyContent: "center",
  //     paddingLeft: 10,
  //     marginVertical: 15,
  //     borderRadius: 20,
  //   },
  //   inputContainerLargeDarkMode: {
  //     backgroundColor: Colors.textBoxColorDarkMode,
  //     width: "70%",
  //     height: 70,
  //     justifyContent: "center",
  //     paddingLeft: 10,
  //     marginVertical: 15,
  //     borderRadius: 20,
  //   },
  //   inputContainerLargeLightMode: {
  //     backgroundColor: Colors.textBoxColorLightMode,
  //     width: "70%",
  //     height: 70,
  //     justifyContent: "center",
  //     paddingLeft: 10,
  //     marginVertical: 15,
  //     borderRadius: 20,
  //   },

  //   colorPicker: {
  //     height: 200,
  //     width: "70%",
  //     marginBottom: 100,
  //   },
  //   colorPickerLarge: {
  //     height: 200,
  //     width: "40%",
  //     marginBottom: 100,
  //   },

  //   inputContainerMultilineDarkMode: {
  //     backgroundColor: Colors.textBoxColorDarkMode,
  //     width: "70%",
  //     height: 120,
  //     justifyContent: "flex-start",
  //     paddingLeft: 10,
  //     marginVertical: 15,
  //     padding: 8,
  //     paddingHorizontal: 12,
  //     borderRadius: 20,
  //   },
  //   inputContainerMultilineLightMode: {
  //     backgroundColor: Colors.textBoxColorLightMode,
  //     width: "70%",
  //     height: 120,
  //     justifyContent: "flex-start",
  //     paddingLeft: 10,
  //     marginVertical: 15,
  //     padding: 8,
  //     paddingHorizontal: 12,
  //     borderRadius: 20,
  //   },
  //   inputContainerMultilineLargeDarkMode: {
  //     backgroundColor: Colors.textBoxColorDarkMode,
  //     width: "70%",
  //     height: 200,
  //     justifyContent: "flex-start",
  //     paddingLeft: 10,
  //     marginVertical: 15,
  //     padding: 8,
  //     paddingHorizontal: 12,
  //     borderRadius: 20,
  //   },
  //   inputContainerMultilineLargeLightMode: {
  //     backgroundColor: Colors.textBoxColorLightMode,
  //     width: "70%",
  //     height: 200,
  //     justifyContent: "flex-start",
  //     paddingLeft: 10,
  //     marginVertical: 15,
  //     padding: 8,
  //     paddingHorizontal: 12,
  //     borderRadius: 20,
  //   },

  //   inputContainerLongMultilineDarkMode: {
  //     backgroundColor: Colors.textBoxColorDarkMode,
  //     width: "70%",
  //     height: 300,
  //     justifyContent: "flex-start",
  //     paddingLeft: 10,
  //     marginVertical: 15,
  //     padding: 8,
  //     paddingHorizontal: 12,
  //     borderRadius: 20,
  //   },
  //   inputContainerLongMultilineLightMode: {
  //     backgroundColor: Colors.textBoxColorLightMode,
  //     width: "70%",
  //     height: 300,
  //     justifyContent: "flex-start",
  //     paddingLeft: 10,
  //     marginVertical: 15,
  //     padding: 8,
  //     paddingHorizontal: 12,
  //     borderRadius: 20,
  //   },
  //   inputContainerLongMultilineLargeDarkMode: {
  //     backgroundColor: Colors.textBoxColorDarkMode,
  //     width: "70%",
  //     height: 500,
  //     justifyContent: "flex-start",
  //     paddingLeft: 10,
  //     marginVertical: 15,
  //     padding: 8,
  //     paddingHorizontal: 12,
  //     borderRadius: 20,
  //   },
  //   inputContainerLongMultilineLargeLightMode: {
  //     backgroundColor: Colors.textBoxColorLightMode,
  //     width: "70%",
  //     height: 500,
  //     justifyContent: "flex-start",
  //     paddingLeft: 10,
  //     marginVertical: 15,
  //     padding: 8,
  //     paddingHorizontal: 12,
  //     borderRadius: 20,
  //   },

  //   dividerDarkMode: {
  //     height: 1,
  //     width: "70%",
  //     backgroundColor: Colors.dividerColorDarkMode,
  //     alignSelf: "center",
  //     marginBottom: 40,
  //     marginTop: 30,
  //   },
  //   dividerLightMode: {
  //     height: 1,
  //     width: "70%",
  //     backgroundColor: Colors.dividerColorLightMode,
  //     alignSelf: "center",
  //     marginBottom: 40,
  //     marginTop: 30,
  //   },

  //   introContainer: {
  //     marginBottom: 20,
  //   },

  //   statTitleDarkMode: {
  //     fontSize: 18,
  //     color: Colors.accentColorDarkMode,
  //   },
  //   statTitleLightMode: {
  //     fontSize: 18,
  //     color: Colors.accentColorLightMode,
  //   },
  //   statTitleLargeDarkMode: {
  //     color: Colors.accentColorDarkMode,
  //     fontSize: 40,
  //   },
  //   statTitleLargeLightMode: {
  //     color: Colors.accentColorLightMode,
  //     fontSize: 40,
  //   },

  //   inputTextDarkMode: {
  //     fontSize: 16,
  //     color: Colors.accentColorDarkMode,
  //   },
  //   inputTextLightMode: {
  //     fontSize: 16,
  //     color: Colors.accentColorLightMode,
  //   },
  //   inputTextLargeDarkMode: {
  //     fontSize: 25,
  //     color: Colors.accentColorDarkMode,
  //   },
  //   inputTextLargeLightMode: {
  //     fontSize: 25,
  //     color: Colors.accentColorLightMode,
  //   },

  //   sectionTextDarkMode: {
  //     fontSize: 30,
  //     color: Colors.accentColorDarkMode,
  //   },
  //   sectionTextLightMode: {
  //     fontSize: 30,
  //     color: Colors.accentColorLightMode,
  //   },
  //   sectionTextLargeDarkMode: {
  //     fontSize: 55,
  //     color: Colors.accentColorDarkMode,
  //   },
  //   sectionTextLargeLightMode: {
  //     fontSize: 55,
  //     color: Colors.accentColorLightMode,
  //   },

  //   sectionContainerDarkMode: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  //   sectionContainerLightMode: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  //   sectionContainerLargeDarkMode: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  //   sectionContainerLargeLightMode: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },

  //   skillSectionTextDarkMode: {
  //     fontSize: 22,
  //     color: Colors.accentColorDarkMode,
  //   },
  //   skillSectionTextLightMode: {
  //     fontSize: 22,
  //     color: Colors.accentColorLightMode,
  //   },
  //   skillSectionTextLargeDarkMode: {
  //     fontSize: 40,
  //     color: Colors.accentColorDarkMode,
  //   },
  //   skillSectionTextLargeLightMode: {
  //     fontSize: 40,
  //     color: Colors.accentColorLightMode,
  //   },

  //   skillSectionContainerDarkMode: {
  //     margin: 15,
  //     marginTop: 23,
  //   },
  //   skillSectionContainerLightMode: {
  //     margin: 15,
  //     marginTop: 23,
  //   },
  //   skillSectionContainerLargeDarkMode: {
  //     margin: 15,
  //     marginTop: 23,
  //   },
  //   skillSectionContainerLargeLightMode: {
  //     margin: 15,
  //     marginTop: 23,
  //   },

  //   customSkill: {
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },

  //   addButtonContainerLarge: {
  //     backgroundColor: "#107aeb",
  //     borderRadius: 10,
  //     elevation: 3,
  //     padding: 5,
  //     marginTop: 10,
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  //   addButtonContainer: {
  //     backgroundColor: "#107aeb",
  //     borderRadius: 10,
  //     elevation: 3,
  //     padding: 5,
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  //   addButtonTextLarge: {
  //     fontSize: 40,
  //   },
  //   addButtonText: {},

  //   bonusInputContainerDarkMode: {
  //     backgroundColor: Colors.textBoxColorDarkMode,
  //     width: 50,
  //     height: 50,
  //     justifyContent: "center",
  //     marginVertical: 15,
  //     borderRadius: 50,
  //   },
  //   bonusInputContainerLightMode: {
  //     backgroundColor: Colors.textBoxColorLightMode,
  //     width: 50,
  //     height: 50,
  //     justifyContent: "center",
  //     marginVertical: 15,
  //     borderRadius: 50,
  //   },
  //   bonusInputContainerLargeDarkMode: {
  //     backgroundColor: Colors.textBoxColorDarkMode,
  //     width: 70,
  //     height: 70,
  //     justifyContent: "center",
  //     marginVertical: 15,
  //     borderRadius: 50,
  //   },
  //   bonusInputContainerLargeLightMode: {
  //     backgroundColor: Colors.textBoxColorLightMode,
  //     width: 70,
  //     height: 70,
  //     justifyContent: "center",
  //     marginVertical: 15,
  //     borderRadius: 50,
  //   },

  //   bonusInputTextDarkMode: {
  //     fontSize: 16,
  //     color: Colors.accentColorDarkMode,
  //     textAlign: "center",
  //   },
  //   bonusInputTextLightMode: {
  //     fontSize: 16,
  //     color: Colors.accentColorLightMode,
  //     textAlign: "center",
  //   },
  //   bonusInputTextLargeDarkMode: {
  //     fontSize: 25,
  //     color: Colors.accentColorDarkMode,
  //     textAlign: "center",
  //   },
  //   bonusInputTextLargeLightMode: {
  //     fontSize: 25,
  //     color: Colors.accentColorLightMode,
  //     textAlign: "center",
  //   },
  //   stat: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     width: "60%",
  //   },
});

export default EditAttributesScreen;
