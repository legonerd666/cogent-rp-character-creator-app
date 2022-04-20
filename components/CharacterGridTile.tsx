import React from "react";
import { View, StyleSheet, TouchableNativeFeedback } from "react-native";

import Colors from "../constants/Colors";
import DefaultText from "./DefaultText";

const CharacterGridTile = (props: any) => {
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback
        onPress={props.onSelect}
        onLongPress={props.onLongPress}
      >
        <View
          style={{
            ...styles.container,
            ...{ backgroundColor: props.bgcolor },
            ...props.border,
          }}
        >
          <DefaultText style={styles.text} numberOfLines={1}>
            {props.name}
          </DefaultText>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "flex-end",
    elevation: 5,
    padding: 15,
    width: "100%",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: Colors.primaryColorDarkMode,
  },
});

export default CharacterGridTile;
