import HomeScreen from "../screens/HomeScreen";
import CharactersScreen from "../screens/CharactersScreen";
import AddCharacterScreen from "../screens/AddEntryScreen";
import EditCharacterScreen from "../screens/EditCharacterScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CharacterDetailsNavigator from "./CharacterDetailsNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import { RootStateOrAny, useSelector } from "react-redux";
import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const Stack = createStackNavigator();

export default function CharacterNavigator() {
  const characterName = useSelector(
    (state: RootStateOrAny) => state.character.name
  );

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
          headerTitle: characterName,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Edit"
                iconName="create"
                onPress={() => {
                  navigation.navigate("Edit");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="Add"
        component={AddCharacterScreen}
        options={{ headerTitle: "Add New" }}
      />
      <Stack.Screen name="Edit" component={EditCharacterScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
