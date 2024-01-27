import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const ScreenButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      activeOpacity={0.8}
      onPress={() => props.onPress()}
    >
      <Text style={styles.btnText}>{props.btnText}</Text>
    </TouchableOpacity>
  );
};

export default ScreenButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "black",
    height: 60,
    width: "80%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
});
