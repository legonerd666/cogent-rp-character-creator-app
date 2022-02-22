import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  TextInput,
  TouchableNativeFeedback,
  StyleSheet,
  Dimensions,
} from "react-native";
import AppLoading from "expo-app-loading";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

import CharacterGridTile from "../components/CharacterGridTile";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import DataManipulation from "../functions/DataManipulation";
import {
  setStat,
  newCurrentCharacter,
} from "../store/actions/currentCharacter";

const CharactersScreen = (props: any) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Add New"
            iconName="add"
            onPress={() => {
              dispatch(
                newCurrentCharacter({
                  id: uuid(),
                  name: "Unknown",
                  age: "Unknown",
                  race: "Unknown",
                  bodyType: "Unknown",
                  disablingCharacteristics: "None",
                  strength: 0,
                  reflex: 0,
                  intelligence: 0,
                  endurance: 0,
                  athletics: 0,
                  grip: 0,
                  swim: 0,
                  skillThrow: 0,
                  perception: 0,
                  acrobatics: 0,
                  ridePilot: 0,
                  sleightOfHand: 0,
                  stealth: 0,
                  generalKnowledge: 0,
                  deception: 0,
                  infiltration: 0,
                  persuasion: 0,
                  survival: 0,
                  vocations: [{ id: uuid(), name: "", stat: "", bonus: 0 }],
                  proficiencies: [{ id: uuid(), name: "", stat: "", bonus: 0 }],
                  injuries: 0,
                  lingeringInjuries: [{ id: uuid(), name: "", penalty: 0 }],
                  destinyPoints: 0,
                  commercePoints: 0,
                  equipment: "None",
                  notes: "No Notes",
                  bgColor: "#ffffff",
                })
              );
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
        onSelect={() => {
          dispatch(setStat("id", itemData.item.id));
          dispatch(setStat("name", itemData.item.name));
          props.navigation.navigate("CharacterDetails", {
            screen: "Characteristics",
            params: {
              characterId: itemData.item.id,
              characterName: itemData.item.name,
            },
          });
        }}
      />
    );
  };

  const Filter = (text: string) => {
    if (text === "") {
      setFilteredCharacters(dataManipulation.getData);
      return;
    }
    const tempCharacters: any[] = [];

    dataManipulation.getData().forEach((character: any) => {
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

// CharactersScreen.navigationOptions = (navigationData: any) => {
//   return {
//     headerRight: () => (
//       <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//         <Item
//           title="Add New"
//           iconName="add"
//           onPress={() => {
//             navigationData.navigation.navigate("Add");
//           }}
//         />
//       </HeaderButtons>
//     ),
//   };
// };

const styles = StyleSheet.create({
  screenDarkMode: {
    width: "100%",
    flex: 1,
    paddingBottom: 120,
    backgroundColor: Colors.primaryColorDarkMode,
    alignItems: "center",
  },
  screenLightMode: {
    width: "100%",
    flex: 1,
    paddingBottom: 120,
    backgroundColor: Colors.primaryColorLightMode,
    alignItems: "center",
  },
  searchBarContainerLargeDarkMode: {
    height: 80,
    borderRadius: 50,
    width: "78%",
    backgroundColor: Colors.textBoxColorDarkMode,
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 5,
  },
  searchBarContainerLargeLightMode: {
    height: 80,
    borderRadius: 50,
    width: "78%",
    backgroundColor: Colors.textBoxColorLightMode,
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 5,
  },
  searchBarContainerDarkMode: {
    height: 50,
    borderRadius: 50,
    width: "73%",
    backgroundColor: Colors.textBoxColorDarkMode,
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 5,
  },
  searchBarContainerLightMode: {
    height: 50,
    borderRadius: 50,
    width: "73%",
    backgroundColor: Colors.textBoxColorLightMode,
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 10,
    marginVertical: 10,
    elevation: 5,
  },
  list: {
    width: "80%",
    alignSelf: "center",
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
