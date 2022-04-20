import React, { useState } from "react";
import { View, TextInput, ScrollView, Dimensions } from "react-native";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";

import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import { setStringStat } from "../../store/actions/currentCharacter";
import * as styleOptions from "../../constants/styles";
import BoldText from "../../components/BoldText";

const IdentityScreen = (props: any) => {
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
          <BoldText style={styles.title}>Identity:</BoldText>

          <DefaultText style={styles.title}>Disposition:</DefaultText>
          <View style={styles.multilineInputContainer}>
            <TextInput
              style={styles.smallText}
              placeholder="Enter Disposition..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                dispatch(setStringStat("disposition", text));
              }}
              multiline={true}
              defaultValue={
                character.disposition != "Unknown" ? character.disposition : ""
              }
            />
          </View>

          <DefaultText style={styles.title}>History:</DefaultText>
          <View style={styles.multilineInputContainer}>
            <TextInput
              style={styles.smallText}
              placeholder="Enter History..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                dispatch(setStringStat("history", text));
              }}
              multiline={true}
              defaultValue={
                character.history != "Lost to the ages" ? character.history : ""
              }
            />
          </View>

          <DefaultText style={styles.title}>Beliefs/Morality:</DefaultText>
          <View style={styles.multilineInputContainer}>
            <TextInput
              style={styles.smallText}
              placeholder="Enter Beliefs/Morality..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                dispatch(setStringStat("beliefsMorality", text));
              }}
              multiline={true}
              defaultValue={
                character.beliefsMorality != "A mystery"
                  ? character.beliefsMorality
                  : ""
              }
            />
          </View>

          <DefaultText style={styles.title}>Goals/Aspirations:</DefaultText>
          <View style={styles.multilineInputContainer}>
            <TextInput
              style={styles.smallText}
              placeholder="Enter Goals/Aspirations..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                dispatch(setStringStat("goalsAspirations", text));
              }}
              multiline={true}
              defaultValue={
                character.goalsAspirations != "Unknown"
                  ? character.goalsAspirations
                  : ""
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default IdentityScreen;
