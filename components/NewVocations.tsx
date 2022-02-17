import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from "react-native";

import Vocation from "./NewVocation";
import DefaultText from "./DefaultText";

const Vocations = (props: any) => {
  const [vocations, setVocations] = useState(
    props.data.map((item: any) => {
      return <Vocation key={item.id} itemData={item} />;
    })
  );
  return (
    <View style={styles.vocations}>
      {vocations}
      <View
        style={
          Dimensions.get("window").width > 600
            ? styles.addButtonContainerLarge
            : styles.addButtonContainer
        }
      >
        <TouchableNativeFeedback
          onPress={() => {
            props.onSelect;
            setVocations(
              props.data.map((item: any) => {
                return <Vocation key={item.id} itemData={item} />;
              })
            );
            console.log(vocations);
          }}
        >
          <View>
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
};

const styles = StyleSheet.create({
  vocations: {
    justifyContent: "center",
    alignItems: "center",
  },

  addButtonContainerLarge: {
    backgroundColor: "#107aeb",
    borderRadius: 10,
    elevation: 3,
    padding: 5,
    marginTop: 10,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    alignSelf: "center",
  },
  addButtonContainer: {
    backgroundColor: "#107aeb",
    borderRadius: 10,
    elevation: 3,
    padding: 5,
    marginTop: 10,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    alignSelf: "center",
  },
  addButtonTextLarge: {
    fontSize: 40,
  },
  addButtonText: {},
});

export default Vocations;
