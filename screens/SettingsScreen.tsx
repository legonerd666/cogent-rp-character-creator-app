import React, { useState } from "react";
import { View, Switch, StyleSheet, Dimensions } from "react-native";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { toggleMode } from "../store/actions/mode";

import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import * as styleOptions from "../constants/styles";

const SettingsScreen = (props: any) => {
  const toggleModeHandler = () => {
    dispatch(toggleMode());
  };

  const dispatch = useDispatch();

  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode, setIsDarkMode] = useState(mode === "dark" ? true : false);

  const styles = isDarkMode
    ? styleOptions.darkModeStandard
    : styleOptions.lightModeStandard;

  return (
    <View style={styles.screenItemsTop}>
      <View style={styles.settingContainer}>
        <DefaultText style={styles.text}>Dark Mode:</DefaultText>
        <View>
          <Switch
            trackColor={{
              true: Colors.textBoxColorDarkMode,
              false: "#e8e8e8",
            }}
            thumbColor={"gray"}
            value={isDarkMode}
            onValueChange={(newValue) => {
              toggleModeHandler();
              setIsDarkMode(newValue);
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
