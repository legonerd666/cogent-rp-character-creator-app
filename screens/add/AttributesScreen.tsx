import React, { useState } from "react";
import { View, TextInput, Dimensions } from "react-native";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";

import DefaultText from "../../components/DefaultText";
import { setNumberStat } from "../../store/actions/currentCharacter";
import * as styleOptions from "../../constants/styles";

const AttributesScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  const character = useSelector((state: RootStateOrAny) => state.character);

  const styles = isDarkMode
    ? styleOptions.darkModeStandard
    : styleOptions.lightModeStandard;

  return (
    <View style={styles.screenItemsCenterBottomPadded}>
      <DefaultText style={styles.title}>Attributes:</DefaultText>

      <View style={styles.stat}>
        <DefaultText style={styles.centeredStandardText}>Strength:</DefaultText>
        <View style={styles.bonusInputContainer}>
          <TextInput
            style={styles.centeredStandardText}
            onChangeText={(text) => {
              dispatch(
                setNumberStat(
                  "strength",
                  isNaN(parseInt(text)) ? 0 : parseInt(text)
                )
              );
            }}
            keyboardType={"number-pad"}
            defaultValue={character.strength.toString()}
          />
        </View>
      </View>

      <View style={styles.stat}>
        <DefaultText style={styles.centeredStandardText}>Reflex:</DefaultText>
        <View style={styles.bonusInputContainer}>
          <TextInput
            style={styles.centeredStandardText}
            onChangeText={(text) => {
              dispatch(
                setNumberStat(
                  "reflex",
                  isNaN(parseInt(text)) ? 0 : parseInt(text)
                )
              );
            }}
            keyboardType={"number-pad"}
            defaultValue={character.reflex.toString()}
          />
        </View>
      </View>

      <View style={styles.stat}>
        <DefaultText style={styles.centeredStandardText}>
          Intelligence:
        </DefaultText>
        <View style={styles.bonusInputContainer}>
          <TextInput
            style={styles.centeredStandardText}
            onChangeText={(text) => {
              dispatch(
                setNumberStat(
                  "intelligence",
                  isNaN(parseInt(text)) ? 0 : parseInt(text)
                )
              );
            }}
            keyboardType={"number-pad"}
            defaultValue={character.intelligence.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default AttributesScreen;
