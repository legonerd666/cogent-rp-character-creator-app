import React from "react";
import { Text, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const DefaultText = (props: any) => {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      style={{ ...styles.text, ...props.style }}
    >
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "lora",
  },
});

export default DefaultText;
