import HomeScreen from "../screens/HomeScreen";
import CharactersScreen from "../screens/CharactersScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CharacterDetailsNavigator from "./CharacterDetailsNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { Alert, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import DataManipulation from "../functions/DataManipulation";
import CharacterEditNavigator from "./CharacterEditNavigator";
import CharacterAddNavigator from "./AddCharacterNavigator";
import { newCurrentCharacter } from "../store/actions/currentCharacter";
import IdentityScreen from "../screens/creationGuide/IdentityScreen";
import AttributesScreen from "../screens/creationGuide/AttributesScreen";
import SkillsScreen from "../screens/creationGuide/SkillsScreen";
import blankCharacter, { ICharacter } from "../constants/characterTemplate";
import VocationsScreen from "../screens/creationGuide/VocationsScreen";
import SpecializationsScreen from "../screens/creationGuide/SpecializationsScreen";
import EquipmentScreen from "../screens/creationGuide/EquipmentScreen";
import NotesScreen from "../screens/creationGuide/Notes";
import ExportScreen from "../screens/details/ExportScreen";
import ImportScreen from "../screens/details/ImportScreen";
import ModalDropdown from "react-native-modal-dropdown";
import DefaultText from "../components/DefaultText";

const Stack = createStackNavigator();

export default function CharacterNavigator() {
  const currentCharacter = useSelector(
    (state: RootStateOrAny) => state.character
  );

  const dataManipulation = new DataManipulation();

  const dispatch = useDispatch();

  const newSaveHandler = (navigation: any) => {
    Alert.alert(
      "Save New Character?",
      "Are you sure you want to save your new character?",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            await dataManipulation.storeLoadedData();
            const newCharacters = dataManipulation.getData();

            newCharacters.push(currentCharacter);

            dataManipulation.setData(newCharacters);
            dataManipulation.saveData();

            dispatch(newCurrentCharacter(blankCharacter()));
            navigation.popToTop();
          },
        },
      ]
    );
  };

  const saveHandler = (navigation: any) => {
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
            await dataManipulation.storeLoadedData();
            const newCharacters = dataManipulation.getData();

            const characterToReplaceIndex = newCharacters.findIndex(
              (characterById: ICharacter) =>
                characterById.id === currentCharacter.id
            );
            newCharacters[characterToReplaceIndex] = currentCharacter;
            dataManipulation.setData(newCharacters);
            dataManipulation.saveData();
            navigation.popToTop();
          },
        },
      ]
    );
  };

  const deleteHandler = (navigation: any) => {
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
            await dataManipulation.storeLoadedData();
            const newCharacters = dataManipulation.getData();
            const characterToDeleteIndex = newCharacters.findIndex(
              (characterById) => characterById.id === currentCharacter.id
            );
            newCharacters.splice(characterToDeleteIndex, 1);
            dataManipulation.setData(newCharacters);
            dataManipulation.saveData();
            navigation.popToTop();
          },
        },
      ]
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.accentColorLightMode,
        headerTitleStyle: {
          fontFamily: "lora-bold",
          fontSize: 30,
          marginRight: 30,
          textAlign: "center",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Character Creator" }}
      />
      <Stack.Screen
        name="Characters"
        component={CharactersScreen}
        options={{ headerTitle: "Characters" }}
      />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetailsNavigator}
        options={({ navigation }) => ({
          headerTitle: currentCharacter.name,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Edit"
                iconName="create"
                onPress={async () => {
                  navigation.navigate("Edit");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="Add"
        component={CharacterAddNavigator}
        options={({ navigation }) => ({
          headerTitle: "Add New",
          headerRight: () => (
            <ModalDropdown
              style={{ marginRight: 10 }}
              dropdownStyle={{ height: 107 }}
              options={["Import", "Assisted Creation", "Save"]}
              onSelect={(index: string, option: string) => {
                if (option === "Import") {
                  navigation.navigate("Import");
                } else if (option === "Assisted Creation") {
                  navigation.navigate("Identity");
                } else {
                  newSaveHandler(navigation);
                }
              }}
            >
              <Ionicons
                name="menu-outline"
                size={40}
                color={Colors.accentColorLightMode}
              />
            </ModalDropdown>
          ),
        })}
      />
      <Stack.Screen
        name="Edit"
        component={CharacterEditNavigator}
        options={({ navigation }) => ({
          headerTitle: currentCharacter.name,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Save"
                iconName="save-sharp"
                onPress={() => {
                  saveHandler(navigation);
                }}
              />
              <Item
                title="Delete"
                iconName="trash"
                onPress={() => {
                  deleteHandler(navigation);
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Identity" component={IdentityScreen} />
      <Stack.Screen name="Attributes" component={AttributesScreen} />
      <Stack.Screen name="Skills" component={SkillsScreen} />
      <Stack.Screen name="Vocations" component={VocationsScreen} />
      <Stack.Screen name="Specializations" component={SpecializationsScreen} />
      <Stack.Screen name="Equipment" component={EquipmentScreen} />
      <Stack.Screen name="Notes" component={NotesScreen} />
      <Stack.Screen name="Export" component={ExportScreen} />
      <Stack.Screen name="Import" component={ImportScreen} />
    </Stack.Navigator>
  );
}
