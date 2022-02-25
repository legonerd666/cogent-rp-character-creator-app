import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { RootStateOrAny, useSelector } from "react-redux";
import { Alert } from "react-native";
import DataManipulation from "../functions/DataManipulation";
import CharacteristicsScreen from "../screens/add/CharacteristicsScreen";
import AttributesScreen from "../screens/add/AttributesScreen";
import SkillsScreen from "../screens/add/SkillsScreen";
import StateScreen from "../screens/add/StateScreen";
import NotesScreen from "../screens/add/NotesScreen";
import IdentityScreen from "../screens/add/IdentityScreen";

const Tab = createBottomTabNavigator();

const CharacterAddNavigator = () => {
  const currentCharacter = useSelector(
    (state: RootStateOrAny) => state.character
  );

  const characterId = useSelector(
    (state: RootStateOrAny) => state.character.id
  );

  const characterName = useSelector(
    (state: RootStateOrAny) => state.character.name
  );

  const dataManipulation = new DataManipulation();

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
            const newCharacters = dataManipulation.getData();

            const characterToReplaceIndex = newCharacters.findIndex(
              (characterById: any) => characterById.id === characterId
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
            const newCharacters = dataManipulation.getData();
            const characterToDeleteIndex = newCharacters.findIndex(
              (characterById) => characterById.id === characterId
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
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Characteristics"
        component={CharacteristicsScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person-circle-outline" size={32} color="black" />
          ),
          tabBarActiveBackgroundColor: Colors.textBoxColorLightMode,
          tabBarActiveTintColor: Colors.accentColorLightMode,
          tabBarInactiveTintColor: Colors.accentColorLightMode,
        }}
      />
      <Tab.Screen
        name="Identity"
        component={IdentityScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="finger-print-outline" size={32} color="black" />
          ),
          tabBarActiveBackgroundColor: Colors.textBoxColorLightMode,
          tabBarActiveTintColor: Colors.accentColorLightMode,
          tabBarInactiveTintColor: Colors.accentColorLightMode,
        }}
      />
      <Tab.Screen
        name="Attributes"
        component={AttributesScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="body-outline" size={32} color="black" />
          ),
          tabBarActiveBackgroundColor: Colors.textBoxColorLightMode,
          tabBarActiveTintColor: Colors.accentColorLightMode,
          tabBarInactiveTintColor: Colors.accentColorLightMode,
        }}
      />
      <Tab.Screen
        name="Skills"
        component={SkillsScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="stats-chart" size={32} color="black" />
          ),
          tabBarActiveBackgroundColor: Colors.textBoxColorLightMode,
          tabBarActiveTintColor: Colors.accentColorLightMode,
          tabBarInactiveTintColor: Colors.accentColorLightMode,
        }}
      />
      <Tab.Screen
        name="State"
        component={StateScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="fitness-outline" size={32} color="black" />
          ),
          tabBarActiveBackgroundColor: Colors.textBoxColorLightMode,
          tabBarActiveTintColor: Colors.accentColorLightMode,
          tabBarInactiveTintColor: Colors.accentColorLightMode,
        }}
      />
      <Tab.Screen
        name="Notes"
        component={NotesScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="pencil-outline" size={32} color="black" />
          ),
          tabBarActiveBackgroundColor: Colors.textBoxColorLightMode,
          tabBarActiveTintColor: Colors.accentColorLightMode,
          tabBarInactiveTintColor: Colors.accentColorLightMode,
        }}
      />
    </Tab.Navigator>
  );
};

export default CharacterAddNavigator;
