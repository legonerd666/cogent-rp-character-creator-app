import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CharacteristicsDetailsScreen from "../screens/details/CharacteristicsScreen";
import AttributesDetailsScreen from "../screens/details/AttributesScreen";
import SkillsDetailsScreen from "../screens/details/SkillsScreen";
import StateDetailsScreen from "../screens/details/StateScreen";
import NotesDetailsScreen from "../screens/details/NotesScreen";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

const CharacterDetailsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Characteristics"
        component={CharacteristicsDetailsScreen}
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
        name="Attributes"
        component={AttributesDetailsScreen}
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
        component={SkillsDetailsScreen}
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
        component={StateDetailsScreen}
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
        component={NotesDetailsScreen}
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

export default CharacterDetailsNavigator;
