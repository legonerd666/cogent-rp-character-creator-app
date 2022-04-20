import React, { useState } from "react";
import { View, TextInput, ScrollView, Dimensions } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";

import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import { setStringStat } from "../../store/actions/currentCharacter";
import * as styleOptions from "../../constants/styles";
import BoldText from "../../components/BoldText";

const NotesScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  const character = useSelector((state: RootStateOrAny) => state.character);

  const styles = isDarkMode
    ? styleOptions.darkModeStandard
    : styleOptions.lightModeStandard;

  return (
    <View style={styles.screenItemsTop}>
      <ScrollView style={{ width: "100%" }}>
        <View>
          <BoldText style={styles.title}>Notes:</BoldText>
          <View style={styles.multilineInputContainer}>
            <TextInput
              style={styles.smallText}
              placeholder="Enter Notes..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                dispatch(setStringStat("notes", text));
              }}
              multiline={true}
              defaultValue={
                character.notes != "No Notes" ? character.notes : ""
              }
            />
          </View>

          <View style={styles.smallSeparator}></View>

          <BoldText style={styles.title}>Background Color:</BoldText>
          <View style={styles.colorPicker}>
            <ColorPicker
              color={character.bgColor}
              onColorChangeComplete={(color) => {
                dispatch(setStringStat("bgColor", color));
              }}
              thumbSize={30}
              sliderSize={40}
              noSnap={true}
              row={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NotesScreen;
