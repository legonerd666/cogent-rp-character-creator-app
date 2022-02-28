import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  Dimensions,
} from "react-native";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Vocation from "../../components/GuidedVocation";
import { setStat } from "../../store/actions/currentCharacter";
import { v4 as uuid } from "uuid";

const VocationsScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  const character = useSelector((state: RootStateOrAny) => state.character);

  const [vocationComponents, setVocationComponents] = useState(
    character.vocations.map((item: any) => {
      return <Vocation key={item.id} itemData={item} />;
    })
  );

  const Vocations = (props: any) => {
    return (
      <View>
        {vocationComponents}
        <View
          style={
            Dimensions.get("window").width > 600
              ? styles.addButtonContainerLarge
              : styles.addButtonContainer
          }
        >
          <TouchableNativeFeedback
            onPress={() => {
              let tempVocations = character.vocations;
              tempVocations.push({
                id: uuid(),
                name: "",
                stat: "",
                bonus: 0,
              });
              dispatch(setStat("vocations", tempVocations));
              setVocationComponents(
                character.vocations.map((item: any) => {
                  return <Vocation key={item.id} itemData={item} />;
                })
              );
            }}
          >
            <View>
              <DefaultText
                style={
                  Dimensions.get("window").width > 600
                    ? styles.addButtonTextLarge
                    : {}
                }
              >
                Add New
              </DefaultText>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  };

  const skillPoints = useSelector(
    (state: RootStateOrAny) => state.character.skillPoints
  );

  return (
    <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.container}>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Time to choose your vocations!
          </DefaultText>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Think of vocations as focusses of interest for your character, be it
            a hobby or a career, and make sure your vocations are named
            something relatively general, such as Chef, Blacksmith, or Warrior,
            not something specific like Cooking, Armor Smithing, or Two-Handed
            Sword Wielding. These will be your characters main focuses of
            interest, and you are required to have at least 1, so you get 1 free
            skill point to spend on vocations!
          </DefaultText>
          <DefaultText
            style={
              isDarkMode ? styles.textBlockDarkMode : styles.textBlockLightMode
            }
          >
            Skill Points: {skillPoints}
          </DefaultText>
          <View>
            <Vocations />
          </View>
          <TouchableNativeFeedback
            onPress={() => {
              props.navigation.navigate("Vocations");
            }}
          >
            <View style={styles.nextButton}>
              <DefaultText
                style={
                  isDarkMode
                    ? styles.textBlockDarkMode
                    : styles.textBlockLightMode
                }
              >
                Next
              </DefaultText>
              <Ionicons
                name="arrow-forward-outline"
                size={20}
                color={
                  isDarkMode
                    ? Colors.accentColorDarkMode
                    : Colors.accentColorLightMode
                }
              />
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenDarkMode: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.primaryColorDarkMode,
  },
  screenLightMode: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.primaryColorLightMode,
  },

  container: {
    alignItems: "center",
    width: "85%",
    alignSelf: "center",
    paddingVertical: 30,
  },

  textBlockDarkMode: {
    textAlign: "center",
    color: Colors.accentColorDarkMode,
    marginVertical: 10,
  },
  textBlockLightMode: {
    textAlign: "center",
    color: Colors.accentColorLightMode,
    marginVertical: 10,
  },

  textBlockLeftAlignDarkMode: {
    color: Colors.accentColorDarkMode,
    marginVertical: 10,
  },
  textBlockLeftAlignLightMode: {
    color: Colors.accentColorLightMode,
    marginVertical: 10,
  },

  skill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
  },

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  nextButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    height: 50,
    width: 100,
    backgroundColor: Colors.textBoxColorLightMode,
    paddingHorizontal: 10,
  },
  addButtonContainerLarge: {
    backgroundColor: "#107aeb",
    borderRadius: 10,
    elevation: 3,
    padding: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonContainer: {
    backgroundColor: "#107aeb",
    borderRadius: 10,
    elevation: 3,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonTextLarge: {
    fontSize: 40,
  },
});

export default VocationsScreen;
