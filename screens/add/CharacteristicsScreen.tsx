import React, { useEffect, useState } from "react";
import { View, TextInput, ScrollView, Dimensions } from "react-native";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";

import DefaultText from "../../components/DefaultText";
import Colors from "../../constants/Colors";
import { setStringStat } from "../../store/actions/currentCharacter";
import * as styleOptions from "../../constants/styles";
import BoldText from "../../components/BoldText";

const CharacteristicsScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  const character = useSelector((state: RootStateOrAny) => state.character);

  const styles = isDarkMode
    ? styleOptions.darkModeStandard
    : styleOptions.lightModeStandard;

  return (
    <View style={styles.screenItemsCenter}>
      <ScrollView>
        <View>
          <BoldText style={styles.title}>Characteristics:</BoldText>

          <DefaultText style={styles.title}>Name:</DefaultText>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.smallText}
              placeholder="Enter Name..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                dispatch(setStringStat("name", text));
              }}
              defaultValue={character.name != "Unknown" ? character.name : ""}
            />
          </View>

          <DefaultText style={styles.title}>Age:</DefaultText>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.smallText}
              placeholder="Enter Age..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                dispatch(setStringStat("age", text));
              }}
              defaultValue={character.age != "Unknown" ? character.age : ""}
            />
          </View>

          <DefaultText style={styles.title}>Race:</DefaultText>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.smallText}
              placeholder="Enter Race..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                dispatch(setStringStat("race", text));
              }}
              defaultValue={character.race != "Unknown" ? character.race : ""}
            />
          </View>

          <DefaultText style={styles.title}>Body Type:</DefaultText>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.smallText}
              placeholder="Enter Body Type..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                dispatch(setStringStat("bodyType", text));
              }}
              defaultValue={
                character.bodyType != "Unknown" ? character.bodyType : ""
              }
            />
          </View>

          <DefaultText style={styles.title}>
            Disabling Characteristics:
          </DefaultText>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.smallText}
              placeholder="Enter Disabling Characteristics..."
              placeholderTextColor={
                isDarkMode
                  ? Colors.accentColorDarkMode
                  : Colors.accentColorLightMode
              }
              onChangeText={(text) => {
                dispatch(setStringStat("disablingCharacteristics", text));
              }}
              defaultValue={
                character.disablingCharacteristics != "None"
                  ? character.disablingCharacteristics
                  : ""
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CharacteristicsScreen;
