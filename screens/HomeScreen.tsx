import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import {
  View,
  TouchableNativeFeedback,
  Dimensions,
  StyleSheet,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import * as Font from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuid } from "uuid";

import DefaultText from "../components/DefaultText";
import CustomHeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { toggleMode } from "../store/actions/mode";
import BoldText from "../components/BoldText";
import {
  newCurrentCharacter,
  setStat,
} from "../store/actions/currentCharacter";
import characterTemplate from "../constants/characterTemplate";

const HomeScreen = (props: any) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            style={{ marginLeft: 8 }}
            title="Settings"
            iconName="settings-outline"
            onPress={() => {
              props.navigation.navigate("Settings");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);

  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode, setIsDarkMode] = useState(mode === "dark" ? true : false);

  useEffect(() => {
    setIsDarkMode(mode === "dark" ? true : false);
  });

  const [isModeLoaded, setIsModeLoaded] = useState(false);

  const dummyFetch = () => {
    return Font.loadAsync({
      "lora": require("../assets/fonts/Lora-Regular.ttf"),
    });
  };

  const toggleModeHandler = () => {
    dispatch(toggleMode());
  };

  const dispatch = useDispatch();

  const modeHandler = async () => {
    let settings = { mode: "-1" };
    try {
      const jsonValue = await AsyncStorage.getItem("SettingsCCC");
      if (jsonValue != null) {
        settings = JSON.parse(jsonValue);
      } else {
        try {
          const jsonValue = JSON.stringify({ mode: "dark" });
          await AsyncStorage.setItem("SettingsCCC", jsonValue);
        } catch (e) {
          alert(e);
        }
        modeHandler();
      }
    } catch (e) {
      alert(e);
    }

    if (settings.mode === "light") {
      await toggleModeHandler();
      await toggleModeHandler();
    } else {
      await toggleModeHandler();
    }

    await setIsModeLoaded(true);
  };

  if (!isModeLoaded) {
    return (
      <AppLoading
        startAsync={dummyFetch}
        onFinish={() => {
          modeHandler();
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <TouchableNativeFeedback
      onPress={() => {
        dispatch(newCurrentCharacter({ ...characterTemplate.blankCharacter }));
        dispatch(setStat("id", uuid()));
        props.navigation.navigate("Characters");
      }}
    >
      <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
        <BoldText
          style={
            Dimensions.get("window").width > 600
              ? isDarkMode
                ? styles.largeIntroDarkMode
                : styles.largeIntroLightMode
              : isDarkMode
              ? styles.introDarkMode
              : styles.introLightMode
          }
        >
          Cogent Roleplay Character Creator
        </BoldText>
        <DefaultText
          style={
            Dimensions.get("window").width > 600
              ? isDarkMode
                ? styles.largeNoticeDarkMode
                : styles.largeNoticeLightMode
              : isDarkMode
              ? styles.noticeDarkMode
              : styles.noticeLightMode
          }
        >
          (Tap to Open)
        </DefaultText>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  screenDarkMode: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryColorDarkMode,
  },
  screenLightMode: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryColorLightMode,
  },
  largeNoticeDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 30,
  },
  largeNoticeLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 30,
  },
  noticeDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 10,
  },
  noticeLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 10,
  },
  largeIntroDarkMode: {
    color: Colors.accentColorDarkMode,
    fontSize: 50,
    textAlign: "center",
  },
  largeIntroLightMode: {
    color: Colors.accentColorLightMode,
    fontSize: 50,
    textAlign: "center",
  },
  introDarkMode: {
    color: Colors.accentColorDarkMode,
    textAlign: "center",
  },
  introLightMode: {
    color: Colors.accentColorLightMode,
    textAlign: "center",
  },
});

export default HomeScreen;
