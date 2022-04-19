import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableNativeFeedback,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import AppLoading from "expo-app-loading";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import CharacterGridTile from "../components/CharacterGridTile";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import DataManipulation from "../functions/DataManipulation";
import { newCurrentCharacter } from "../store/actions/currentCharacter";
import blankCharacter, { ICharacter } from "../constants/characterTemplate";
import CustomHeaderButton from "../components/HeaderButton";
import * as styleOptions from "../constants/styles";
import BoldText from "../components/BoldText";

const CharactersScreen = (props: any) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Add New"
            iconName="add"
            onPress={() => {
              dispatch(newCurrentCharacter(blankCharacter()));
              props.navigation.navigate("Add");
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [props.navigation]);
  const mode = useSelector((state: RootStateOrAny) => state.mode.mode);

  const [isDarkMode] = useState(mode === "dark" ? true : false);

  const [dataManipulation] = useState(new DataManipulation());

  const dispatch = useDispatch();

  const [filteredCharacters, setFilteredCharacters] = useState(
    dataManipulation.getData
  );

  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const [filterText, setFilterText] = useState("");

  const fetchData = () => {
    return dataManipulation.storeLoadedData();
  };

  const renderGridItem = (itemData: any) => {
    return (
      <CharacterGridTile
        name={itemData.item.name}
        bgcolor={itemData.item.bgColor}
        onSelect={async () => {
          await dispatch(newCurrentCharacter(itemData.item));
          props.navigation.navigate("CharacterDetails", {
            screen: "Characteristics",
          });
        }}
        onLongPress={() => {
          Alert.alert(
            "Delete Character?",
            "Are you sure you want to delete this character?\nIt will be permanently deleted from your characters.",
            [
              {
                text: "Cancel",
                onPress: () => {},
                style: "cancel",
              },
              {
                text: "Delete",
                onPress: async () => {
                  await dataManipulation.storeLoadedData();
                  const newCharacters = dataManipulation.getData();
                  const characterToDeleteIndex = newCharacters.findIndex(
                    (characterById) => characterById.id === itemData.item.id
                  );
                  newCharacters.splice(characterToDeleteIndex, 1);
                  dataManipulation.setData(newCharacters);
                  dataManipulation.saveData();
                  props.navigation.popToTop();
                },
              },
            ]
          );
        }}
      />
    );
  };

  const Filter = (text: string) => {
    if (text === "") {
      setFilteredCharacters(dataManipulation.getData);
      return;
    }
    const tempCharacters: ICharacter[] = [];

    dataManipulation.getData().forEach((character: ICharacter) => {
      if (character.name.toLowerCase().includes(text.toLowerCase())) {
        tempCharacters.push(character);
      }
    });

    setFilteredCharacters(tempCharacters);
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  useEffect(() => {
    dataManipulation.storeLoadedData();
  }, [dataManipulation, filteredCharacters]);

  if (!dataIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchData}
        onFinish={() => {
          setFilteredCharacters(dataManipulation.getData);
          setDataIsLoaded(true);
        }}
        onError={(err) => console.log(err)}
      />
    );
  }

  const styles = isDarkMode
    ? styleOptions.darkModeStandard
    : styleOptions.lightModeStandard;

  if (dataManipulation.getData().length == 0) {
    return (
      <View style={styles.screenItemsTop}>
        <View style={styles.fullScreenNoticeContainer}>
          <DefaultText style={styles.standardNotice}>
            You don't seem to have any characters, how about making a new one?
          </DefaultText>
          <TouchableNativeFeedback
            onPress={() => {
              props.navigation.navigate("Add");
            }}
          >
            <View style={styles.addButtonContainer}>
              <BoldText style={styles.addButton}>New</BoldText>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }

  if (filteredCharacters.length == 0) {
    return (
      <View style={styles.screenItemsTop}>
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Filter by Name..."
            onChangeText={(text) => {
              setFilterText(text);
              Filter(text);
            }}
            defaultValue={filterText}
            placeholderTextColor={
              isDarkMode
                ? Colors.accentColorDarkMode
                : Colors.accentColorLightMode
            }
            style={styles.textInput}
          />
        </View>
        <View style={styles.fullScreenNoticeContainer}>
          <DefaultText style={styles.standardNotice}>
            You don't seem to have any characters that match your search, how
            about making a new character or checking your search for typos?
          </DefaultText>
          <TouchableNativeFeedback
            onPress={() => {
              props.navigation.navigate("Add");
            }}
          >
            <View style={styles.addButtonContainer}>
              <BoldText style={styles.addButton}>New</BoldText>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screenItemsTop}>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Filter by Name..."
          onChangeText={(text) => {
            setFilterText(text);
            Filter(text);
          }}
          defaultValue={filterText}
          placeholderTextColor={
            isDarkMode
              ? Colors.accentColorDarkMode
              : Colors.accentColorLightMode
          }
          style={styles.textInput}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={filteredCharacters}
          renderItem={renderGridItem}
          numColumns={Dimensions.get("window").width > 600 ? 2 : 1}
          extraData={filteredCharacters}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </View>
  );
};

export default CharactersScreen;
