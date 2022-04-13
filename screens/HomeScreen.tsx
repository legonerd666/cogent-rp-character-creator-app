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
import { newCurrentCharacter } from "../store/actions/currentCharacter";
import { ICharacter } from "../constants/characterTemplate";
import blankCharacter from "../constants/characterTemplate";
import * as styleOptions from "../constants/styles";

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

  const styles = isDarkMode
    ? styleOptions.darkModeStandard
    : styleOptions.lightModeStandard;

  return (
    <TouchableNativeFeedback
      onPress={() => {
        const tempBlankCharacter: ICharacter = blankCharacter();
        dispatch(newCurrentCharacter(tempBlankCharacter));
        props.navigation.navigate("Characters");
      }}
    >
      <View style={styles.screenItemsCenter}>
        <BoldText style={styles.text}>
          Cogent Roleplay Character Creator
        </BoldText>
        <DefaultText style={styles.smallNotice}>(Tap to Open)</DefaultText>
      </View>
    </TouchableNativeFeedback>
  );
};

export default HomeScreen;
