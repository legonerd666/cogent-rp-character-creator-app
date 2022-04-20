import React, { useState } from "react";
import {
  View,
  TextInput,
  Dimensions,
  TouchableNativeFeedback,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import DefaultText from "../../components/DefaultText";
import EditableSpecialization from "../../components/EditableSpecialization";
import EditableVocation from "../../components/EditableVocation";
import { ICharacter } from "../../constants/characterTemplate";
import {
  setNumberStat,
  setSpecializations,
  setVocations,
} from "../../store/actions/currentCharacter";

import * as styleOptions from "../../constants/styles";
import BoldText from "../../components/BoldText";

const SkillsScreen = (props: any) => {
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const dispatch = useDispatch();

  let character: ICharacter = useSelector(
    (state: RootStateOrAny) => state.character
  );

  const renderVocation = (vocations: any) => {
    return <EditableVocation item={vocations.item} />;
  };

  const renderSpecialization = (specializations: any) => {
    return <EditableSpecialization item={specializations.item} />;
  };

  const styles = isDarkMode
    ? styleOptions.darkModeStandard
    : styleOptions.lightModeStandard;

  const renderVocationHeader = () => {
    return (
      <View>
        <BoldText style={styles.title}>Skills:</BoldText>

        <View style={styles.skillSection}>
          <DefaultText style={styles.title}>Strength Based:</DefaultText>
        </View>

        <View style={styles.stat}>
          <DefaultText style={styles.text}>Athletics:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "athletics",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.athletics.toString()}
            />
          </View>
        </View>
        <View style={styles.stat}>
          <DefaultText style={styles.text}>Endurance:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "endurance",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.endurance.toString()}
            />
          </View>
        </View>
        <View style={styles.stat}>
          <DefaultText style={styles.text}>Grip:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "grip",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.grip.toString()}
            />
          </View>
        </View>
        <View style={styles.stat}>
          <DefaultText style={styles.text}>Swim:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "swim",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.swim.toString()}
            />
          </View>
        </View>
        <View style={styles.stat}>
          <DefaultText style={styles.text}>Throw:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "skillThrow",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.skillThrow.toString()}
            />
          </View>
        </View>

        <View style={styles.smallSeparator}></View>

        <View style={styles.skillSection}>
          <DefaultText style={styles.title}>Reflex Based:</DefaultText>
        </View>

        <View style={styles.stat}>
          <DefaultText style={styles.text}>Acrobatics:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "acrobatics",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.acrobatics.toString()}
            />
          </View>
        </View>
        <View style={styles.stat}>
          <DefaultText style={styles.text}>Perception:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "perception",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.perception.toString()}
            />
          </View>
        </View>
        <View style={styles.stat}>
          <DefaultText style={styles.text}>Ride/Pilot:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "ridePilot",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.ridePilot.toString()}
            />
          </View>
        </View>
        <View style={styles.stat}>
          <DefaultText style={styles.text}>Sleight of Hand:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "sleightOfHand",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.sleightOfHand.toString()}
            />
          </View>
        </View>
        <View style={styles.stat}>
          <DefaultText style={styles.text}>Stealth:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "stealth",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.stealth.toString()}
            />
          </View>
        </View>

        <View style={styles.smallSeparator}></View>

        <View style={styles.skillSection}>
          <DefaultText style={styles.title}>Intelligence Based:</DefaultText>
        </View>

        <View style={styles.stat}>
          <DefaultText style={styles.text}>Deception:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "deception",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.deception.toString()}
            />
          </View>
        </View>
        <View style={styles.stat}>
          <DefaultText style={styles.text}>General Knowledge:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "generalKnowledge",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.generalKnowledge.toString()}
            />
          </View>
        </View>
        <View style={styles.stat}>
          <DefaultText style={styles.text}>Infiltration:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "infiltration",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.infiltration.toString()}
            />
          </View>
        </View>
        <View style={styles.stat}>
          <DefaultText style={styles.text}>Persuasion:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "persuasion",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.persuasion.toString()}
            />
          </View>
        </View>
        <View style={styles.stat}>
          <DefaultText style={styles.text}>Survival:</DefaultText>
          <View style={styles.bonusInputContainer}>
            <TextInput
              style={styles.centeredStandardText}
              onChangeText={(text) => {
                dispatch(
                  setNumberStat(
                    "survival",
                    isNaN(parseInt(text)) ? 0 : parseInt(text)
                  )
                );
              }}
              keyboardType={"number-pad"}
              defaultValue={character.survival.toString()}
            />
          </View>
        </View>

        <View style={styles.smallSeparator}></View>

        <DefaultText style={styles.title}>Vocations:</DefaultText>
      </View>
    );
  };

  const renderVocationFooter = () => {
    return (
      <View>
        <View style={styles.smallSeparator}></View>

        <TouchableNativeFeedback
          onPress={() => {
            character.vocations.push({
              id: uuid(),
              name: "",
              stat: "",
              bonus: 0,
            });
            dispatch(setVocations(character.vocations));
          }}
        >
          <View style={styles.addButtonContainer}>
            <DefaultText style={styles.addButton}>New</DefaultText>
          </View>
        </TouchableNativeFeedback>
        <View style={styles.smallSeparator}></View>

        <DefaultText style={styles.title}>
          Vocational and Combat Skills:
        </DefaultText>

        <View style={{ width: "100%" }}>
          <FlatList
            renderItem={(item) => renderSpecialization(item)}
            data={character.specializations}
            extraData={character.specializations}
            ListFooterComponent={renderSpecializationFooter}
            ItemSeparatorComponent={renderSeparator}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.smallSeparator}></View>
      </View>
    );
  };

  const renderSpecializationFooter = () => {
    return (
      <View>
        <View style={styles.smallSeparator}></View>
        <TouchableNativeFeedback
          onPress={() => {
            character.specializations.push({
              parentName: "",
              id: uuid(),
              type: "v",
              name: "",
              stat: "",
              bonus: 0,
              dmgBonus: 0,
              armorPen: 0,
            });
            dispatch(setSpecializations(character.specializations));
          }}
        >
          <View style={styles.addButtonContainer}>
            <DefaultText style={styles.addButton}>New</DefaultText>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  const renderSeparator = () => {
    return <View style={styles.smallSeparator}></View>;
  };

  return (
    <View style={styles.screenItemsTop}>
      <View style={{ width: "100%" }}>
        <FlatList
          renderItem={(item) => renderVocation(item)}
          data={character.vocations}
          extraData={character.vocations}
          ListHeaderComponent={renderVocationHeader}
          ListFooterComponent={renderVocationFooter}
          ItemSeparatorComponent={renderSeparator}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default SkillsScreen;
