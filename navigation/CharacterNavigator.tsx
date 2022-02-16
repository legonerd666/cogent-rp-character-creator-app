import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import CharactersScreen from "../screens/CharactersScreen";
import CharacterDetailsScreen from "../screens/CharacterDetailsScreen";
import AddCharacterScreen from "../screens/AddEntryScreen";
import EditCharacterScreen from "../screens/EditCharacterScreen";
import SettingsScreen from "../screens/SettingsScreen";

const CharacterNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: "Character Creator",
      },
    },
    Characters: {
      screen: CharactersScreen,
      navigationOptions: {
        headerTitle: "Characters",
      },
    },
    CharacterDetails: {
      screen: CharacterDetailsScreen,
    },
    Add: {
      screen: AddCharacterScreen,
      navigationOptions: {
        headerTitle: "Add New Character",
      },
    },
    Edit: {
      screen: EditCharacterScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "black",
      },
      headerTintColor: Colors.accentColorDarkMode,
      headerTitleStyle: {
        fontFamily: "caveat-bold",
        fontSize: 30,
        marginRight: 30,
        textAlign: "center",
      },
    },
  }
);

export default createAppContainer(CharacterNavigator);
