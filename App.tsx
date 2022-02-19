import * as Font from "expo-font";
import { createStore, combineReducers } from "redux";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";

import modeReducer from "./store/reducers/mode";
import CharacterNavigator from "./navigation/CharacterNavigator";
import currentCharacterReducer from "./store/reducers/currentCharacter";

const rootReducer = combineReducers({
  mode: modeReducer,
  character: currentCharacterReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "caveat": require("./assets/fonts/Caveat-Regular.ttf"),
    "caveat-bold": require("./assets/fonts/Caveat-Bold.ttf"),
    "caveat-medium": require("./assets/fonts/Caveat-Medium.ttf"),
    "caveat-semi-bold": require("./assets/fonts/Caveat-SemiBold.ttf"),
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
      <CharacterNavigator />
    </Provider>
  );
}
