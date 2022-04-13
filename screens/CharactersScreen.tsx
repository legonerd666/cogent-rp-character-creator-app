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
    return (
      <View
        style={
          isDarkMode ? styles.separatorDarkMode : styles.separatorLightMode
        }
      />
    );
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

  if (dataManipulation.getData().length == 0) {
    return (
      <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
        <View
          style={
            Dimensions.get("window").width > 600
              ? styles.noticeContainerLarge
              : styles.noticeContainer
          }
        >
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.noticeLargeDarkMode
                  : styles.noticeLargeLightMode
                : isDarkMode
                ? styles.noticeDarkMode
                : styles.noticeLightMode
            }
          >
            You don't seem to have any characters, how about making a new one?
          </DefaultText>
          <TouchableNativeFeedback
            onPress={() => {
              props.navigation.navigate("Add");
            }}
          >
            <View
              style={
                Dimensions.get("window").width > 600
                  ? styles.addButtonContainerLarge
                  : styles.addButtonContainer
              }
            >
              <DefaultText
                style={
                  Dimensions.get("window").width > 600
                    ? styles.addButtonTextLarge
                    : styles.addButtonText
                }
              >
                Add New
              </DefaultText>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }

  if (filteredCharacters.length == 0) {
    return (
      <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
        <View
          style={
            Dimensions.get("window").width > 600
              ? isDarkMode
                ? styles.searchBarContainerLargeDarkMode
                : styles.searchBarContainerLargeLightMode
              : isDarkMode
              ? styles.searchBarContainerDarkMode
              : styles.searchBarContainerLightMode
          }
        >
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
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.largeTextInputDarkMode
                  : styles.largeTextInputLightMode
                : isDarkMode
                ? styles.textInputDarkMode
                : styles.textInputLightMode
            }
          />
        </View>
        <View
          style={
            Dimensions.get("window").width > 600
              ? styles.noticeContainerLarge
              : styles.noticeContainer
          }
        >
          <DefaultText
            style={
              Dimensions.get("window").width > 600
                ? isDarkMode
                  ? styles.noticeLargeDarkMode
                  : styles.noticeLargeLightMode
                : isDarkMode
                ? styles.noticeDarkMode
                : styles.noticeLightMode
            }
          >
            You don't seem to have any characters that match your search, how
            about making a new character or checking your search for typos?
          </DefaultText>
          <TouchableNativeFeedback
            onPress={() => {
              props.navigation.navigate("Add");
            }}
          >
            <View
              style={
                Dimensions.get("window").width > 600
                  ? styles.addButtonContainerLarge
                  : styles.addButtonContainer
              }
            >
              <DefaultText
                style={
                  Dimensions.get("window").width > 600
                    ? styles.addButtonTextLarge
                    : styles.addButtonText
                }
              >
                Add New
              </DefaultText>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }

  return (
    <View style={isDarkMode ? styles.screenDarkMode : styles.screenLightMode}>
      <View
        style={
          Dimensions.get("window").width > 600
            ? isDarkMode
              ? styles.searchBarContainerLargeDarkMode
              : styles.searchBarContainerLargeLightMode
            : isDarkMode
            ? styles.searchBarContainerDarkMode
            : styles.searchBarContainerLightMode
        }
      >
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
          style={
            Dimensions.get("window").width > 600
              ? isDarkMode
                ? styles.largeTextInputDarkMode
                : styles.largeTextInputLightMode
              : isDarkMode
              ? styles.textInputDarkMode
              : styles.textInputLightMode
          }
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

const styles = StyleSheet.create({
  list: {
    width: "80%",
    alignSelf: "center",
    paddingBottom: 80,
  },
  separatorDarkMode: {
    height: 1,
    width: "90%",
    backgroundColor: Colors.dividerColorDarkMode,
    alignSelf: "center",
  },
  separatorLightMode: {
    height: 1,
    width: "90%",
    backgroundColor: Colors.dividerColorLightMode,
    alignSelf: "center",
  },
  largeTextInputDarkMode: {
    fontSize: 25,
    marginLeft: 20,
    color: Colors.accentColorDarkMode,
  },
  largeTextInputLightMode: {
    fontSize: 25,
    marginLeft: 20,
    color: Colors.accentColorLightMode,
  },
  textInputDarkMode: {
    color: Colors.accentColorDarkMode,
  },
  textInputLightMode: {
    color: Colors.accentColorLightMode,
  },
  noticeLargeDarkMode: {
    textAlign: "center",
    fontSize: 40,
    color: Colors.accentColorDarkMode,
    marginVertical: 10,
  },
  noticeLargeLightMode: {
    textAlign: "center",
    fontSize: 40,
    color: Colors.accentColorLightMode,
    marginVertical: 10,
  },
  noticeDarkMode: {
    textAlign: "center",
    color: Colors.accentColorDarkMode,
    marginVertical: 10,
  },
  noticeLightMode: {
    textAlign: "center",
    color: Colors.accentColorLightMode,
    marginVertical: 10,
  },
  noticeContainerLarge: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 200,
    width: "80%",
  },
  noticeContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 50,
  },
  addButtonContainerLarge: {
    backgroundColor: "#107aeb",
    borderRadius: 10,
    elevation: 3,
    padding: 5,
    marginTop: 10,
  },
  addButtonContainer: {
    backgroundColor: "#107aeb",
    borderRadius: 10,
    elevation: 3,
    padding: 5,
    marginTop: 10,
    overflow: "hidden",
  },
  addButtonTextLarge: {
    fontSize: 40,
  },
  addButtonText: {},
});

export default CharactersScreen;
