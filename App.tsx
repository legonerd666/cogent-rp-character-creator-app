import * as Font from "expo-font";
import { createStore, combineReducers } from "redux";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";

import modeReducer from "./store/reducers/mode";
import CharacterNavigator from "./navigation/CharacterNavigator";
import currentCharacterReducer from "./store/reducers/currentCharacter";
import { NavigationContainer } from "@react-navigation/native";
import blankCharacter from "./constants/characterTemplate";

const rootReducer = combineReducers({
  mode: modeReducer,
  character: currentCharacterReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "lora": require("./assets/fonts/Lora-Regular.ttf"),
    "lora-bold": require("./assets/fonts/Lora-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <CharacterNavigator />
      </NavigationContainer>
    </Provider>
  );
}
