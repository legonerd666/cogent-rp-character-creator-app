import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  ScrollView,
  Alert,
  StyleSheet,
  Dimensions,
} from "react-native";
import AppLoading from "expo-app-loading";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ColorPicker from "react-native-wheel-color-picker";
import { useSelector, RootStateOrAny } from "react-redux";

import DefaultText from "../components/DefaultText";
import BoldText from "../components/BoldText";
import Colors from "../constants/Colors";
import DataManipulation from "../functions/DataManipulation";
import CustomHeaderButton from "../components/HeaderButton";

const EditCharacterScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const [dataManipulation] = useState(new DataManipulation());

  const [name, setName] = useState("Unknown");
  const [dangerLevel, setDangerLevel] = useState("Unknown");
  const [species, setSpecies] = useState("Unknown");
  const [color, setColor] = useState("Unknown");
  const [appearance, setAppearance] = useState("Unknown");
  const [size, setSize] = useState("Unknown");
  const [statistics, setStatistics] = useState("Unknown");
  const [abilities, setAbilities] = useState("Unknown");
  const [description, setDescription] = useState("Unknown");
  const [habitat, setHabitat] = useState("Unknown");
  const [notes, setNotes] = useState("No Notes");
  const [bgcolor, setBgcolor] = useState("#fff");
  const [picture] = useState("N/A");

  const [character, setCharacter] = useState({
    id: "-1",
    name: "Failed to read",
    dangerLevel: "Failed to read",
    species: "Failed to read",
    color: "Failed to read",
    appearance: "Failed to read",
    size: "Failed to read",
    statistics: "Failed to read",
    abilities: "Failed to read",
    description: "Failed to read",
    habitat: "Failed to read",
    notes: "Failed to read",
    bgcolor: "#ffffff",
  });

  const characterId = props.navigation.getParam("characterId");

  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const fetchData = () => {
    return dataManipulation.storeLoadedData();
  };

  const finishHandler = () => {
    setCharacter(
      dataManipulation
        .getData()
        .find((characterById) => characterById.id === characterId)
    );
    setDataIsLoaded(true);
  };

  const saveHandler = () => {
    Alert.alert(
      "Save Edits?",
      "Are you sure you want to save your edited character?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            const newCharacters = dataManipulation.getData();

            const editedCharacter = {
              id: character.id,
              name: name,
              dangerLevel: dangerLevel,
              species: species,
              color: color,
              appearance: appearance,
              size: size,
              statistics: statistics,
              abilities: abilities,
              description: description,
              habitat: habitat,
              notes: notes,
              picture: picture,
              bgcolor: bgcolor,
            };

            const characterToReplaceIndex = newCharacters.findIndex(
              (characterById) => characterById.id === characterId
            );
            newCharacters[characterToReplaceIndex] = editedCharacter;
            dataManipulation.setData(newCharacters);
            dataManipulation.saveData();
            props.navigation.popToTop();
          },
        },
      ]
    );
  };

  const deleteHandler = () => {
    Alert.alert(
      "Delete Character?",
      "Are you sure you want to delete this character?\nIt will be permanently deleted from your characters.",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            const newCharacters = dataManipulation.getData();
            const characterToDeleteIndex = newCharacters.findIndex(
              (characterById) => characterById.id === characterId
            );
            newCharacters.splice(characterToDeleteIndex, 1);
            dataManipulation.setData(newCharacters);
            dataManipulation.saveData();
            props.navigation.popToTop();
          },
        },
      ]
    );
  };

  useEffect(() => {
    props.navigation.setParams({ save: () => saveHandler() });
  }, [
    name,
    dangerLevel,
    species,
    color,
    appearance,
    size,
    statistics,
    abilities,
    description,
    habitat,
    notes,
    bgcolor,
  ]);

  useEffect(() => {
    props.navigation.setParams({ delete: () => deleteHandler() });
    setName(character.name);
    setDangerLevel(character.dangerLevel);
    setSpecies(character.species);
    setColor(character.color);
    setAppearance(character.appearance);
    setSize(character.size);
    setStatistics(character.statistics);
    setAbilities(character.abilities);
    setDescription(character.description);
    setHabitat(character.habitat);
    setNotes(character.notes);
    setBgcolor(character.bgcolor);
  }, [dataIsLoaded]);

  if (!dataIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchData}
        onFinish={finishHandler}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View>
      <ScrollView>
        <View
          style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}
        >
          <View style={styles.introContainer}>
            <BoldText
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.introLargeDarkMode
                    : styles.introLargeLightMode
                  : isDarkMode
                  ? styles.introDarkMode
                  : styles.introLightMode
              }
            >
              Edit Character:
            </BoldText>
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Name:
          </DefaultText>
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
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.inputTextLargeDarkMode
                    : styles.inputTextLargeLightMode
                  : isDarkMode
                  ? styles.inputTextDarkMode
                  : styles.inputTextLightMode
              }
              placeholder="Enter Name..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setName(text);
              }}
              defaultValue={character.name}
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Danger Level:
          </DefaultText>
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
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.inputTextLargeDarkMode
                    : styles.inputTextLargeLightMode
                  : isDarkMode
                  ? styles.inputTextDarkMode
                  : styles.inputTextLightMode
              }
              placeholder="Enter Danger Level..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setDangerLevel(text);
              }}
              defaultValue={character.dangerLevel}
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Species:
          </DefaultText>
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
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.inputTextLargeDarkMode
                    : styles.inputTextLargeLightMode
                  : isDarkMode
                  ? styles.inputTextDarkMode
                  : styles.inputTextLightMode
              }
              placeholder="Enter Species..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setSpecies(text);
              }}
              defaultValue={character.species}
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Color:
          </DefaultText>
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
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.inputTextLargeDarkMode
                    : styles.inputTextLargeLightMode
                  : isDarkMode
                  ? styles.inputTextDarkMode
                  : styles.inputTextLightMode
              }
              placeholder="Enter Color..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setColor(text);
              }}
              defaultValue={character.color}
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Size:
          </DefaultText>
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
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.inputTextLargeDarkMode
                    : styles.inputTextLargeLightMode
                  : isDarkMode
                  ? styles.inputTextDarkMode
                  : styles.inputTextLightMode
              }
              placeholder="Enter Size..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setSize(text);
              }}
              defaultValue={character.size}
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Known Habitat:
          </DefaultText>
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
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.inputTextLargeDarkMode
                    : styles.inputTextLargeLightMode
                  : isDarkMode
                  ? styles.inputTextDarkMode
                  : styles.inputTextLightMode
              }
              placeholder="Enter Known Habitat..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setHabitat(text);
              }}
              defaultValue={character.habitat}
            />
          </View>
          <View
            style={
              isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode
            }
          ></View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Stats:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.inputContainerMultilineLargeDarkMode
                  : styles.inputContainerMultilineLargeLightMode
                : isDarkMode
                ? styles.inputContainerMultilineDarkMode
                : styles.inputContainerMultilineLightMode
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.inputTextLargeDarkMode
                    : styles.inputTextLargeLightMode
                  : isDarkMode
                  ? styles.inputTextDarkMode
                  : styles.inputTextLightMode
              }
              placeholder="Enter Stats..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setStatistics(text);
              }}
              defaultValue={character.statistics}
              multiline={true}
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Abilities:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.inputContainerMultilineLargeDarkMode
                  : styles.inputContainerMultilineLargeLightMode
                : isDarkMode
                ? styles.inputContainerMultilineDarkMode
                : styles.inputContainerMultilineLightMode
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.inputTextLargeDarkMode
                    : styles.inputTextLargeLightMode
                  : isDarkMode
                  ? styles.inputTextDarkMode
                  : styles.inputTextLightMode
              }
              placeholder="Enter Abilities..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setAbilities(text);
              }}
              defaultValue={character.abilities}
              multiline={true}
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Appearance:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.inputContainerMultilineLargeDarkMode
                  : styles.inputContainerMultilineLargeLightMode
                : isDarkMode
                ? styles.inputContainerMultilineDarkMode
                : styles.inputContainerMultilineLightMode
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.inputTextLargeDarkMode
                    : styles.inputTextLargeLightMode
                  : isDarkMode
                  ? styles.inputTextDarkMode
                  : styles.inputTextLightMode
              }
              placeholder="Enter Appearance..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setAppearance(text);
              }}
              defaultValue={character.appearance}
              multiline={true}
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Description:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.inputContainerMultilineLargeDarkMode
                  : styles.inputContainerMultilineLargeLightMode
                : isDarkMode
                ? styles.inputContainerMultilineDarkMode
                : styles.inputContainerMultilineLightMode
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.inputTextLargeDarkMode
                    : styles.inputTextLargeLightMode
                  : isDarkMode
                  ? styles.inputTextDarkMode
                  : styles.inputTextLightMode
              }
              placeholder="Enter Description..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setDescription(text);
              }}
              defaultValue={character.description}
              multiline={true}
            />
          </View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Notes:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.inputContainerMultilineLargeDarkMode
                  : styles.inputContainerMultilineLargeLightMode
                : isDarkMode
                ? styles.inputContainerMultilineDarkMode
                : styles.inputContainerMultilineLightMode
            }
          >
            <TextInput
              style={
                Dimensions.get("window").width > 600
                  ? isDarkMode
                    ? styles.inputTextLargeDarkMode
                    : styles.inputTextLargeLightMode
                  : isDarkMode
                  ? styles.inputTextDarkMode
                  : styles.inputTextLightMode
              }
              placeholder="Enter Notes..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                setNotes(text);
              }}
              defaultValue={character.notes}
              multiline={true}
            />
          </View>
          <View
            style={
              isDarkMode ? styles.dividerDarkMode : styles.dividerLightMode
            }
          ></View>
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.titleLargeDarkMode
                  : styles.titleLargeLightMode
                : isDarkMode
                ? styles.titleDarkMode
                : styles.titleLightMode
            }
          >
            Background Color:
          </DefaultText>
          <View
            style={
              Dimensions.get("window").width > 600
                ? styles.colorPickerLarge
                : styles.colorPicker
            }
          >
            <ColorPicker
              color={character.bgcolor}
              onColorChangeComplete={(color) => {
                setBgcolor(color);
              }}
              thumbSize={30}
              sliderSize={40}
              noSnap={true}
              row={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

EditCharacterScreen.navigationOptions = (navigationData: any) => {
  const name = navigationData.navigation.getParam("characterName");
  return {
    headerTitle: name,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="save-sharp"
          onPress={() => {
            navigationData.navigation.getParam("save")();
          }}
        />
        <Item
          title="Delete"
          iconName="trash"
          onPress={() => {
            navigationData.navigation.getParam("delete")();
          }}
        />
      </HeaderButtons>
    ),
  };
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
  introDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 30,
  },
  introLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 30,
  },
  introLargeDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 55,
  },
  introLargeLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 55,
  },
  inputContainerDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: "70%",
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
    marginVertical: 15,
    borderRadius: 20,
  },
  inputContainerLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: "70%",
    height: 50,
    justifyContent: "center",
    paddingLeft: 10,
    marginVertical: 15,
    borderRadius: 20,
  },
  inputContainerLargeDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: "70%",
    height: 70,
    justifyContent: "center",
    paddingLeft: 10,
    marginVertical: 15,
    borderRadius: 20,
  },
  inputContainerLargeLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: "70%",
    height: 70,
    justifyContent: "center",
    paddingLeft: 10,
    marginVertical: 15,
    borderRadius: 20,
  },
  colorPicker: {
    height: 200,
    width: "70%",
    marginBottom: 100,
  },
  colorPickerLarge: {
    height: 200,
    width: "40%",
    marginBottom: 100,
  },
  inputContainerMultilineDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: "70%",
    height: 120,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  inputContainerMultilineLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: "70%",
    height: 120,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  inputContainerMultilineLargeDarkMode: {
    backgroundColor: Colors.textBoxColorDarkMode,
    width: "70%",
    height: 200,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  inputContainerMultilineLargeLightMode: {
    backgroundColor: Colors.textBoxColorLightMode,
    width: "70%",
    height: 200,
    justifyContent: "flex-start",
    paddingLeft: 10,
    marginVertical: 15,
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
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
  introContainer: {
    marginBottom: 20,
  },
  titleDarkMode: {
    color: Colors.accentColorDarkMode,
  },
  titleLightMode: {
    color: Colors.accentColorLightMode,
  },
  titleLargeDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 50,
  },
  titleLargeLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 50,
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
});

export default EditCharacterScreen;
