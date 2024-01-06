import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Container = (props) => {
  return (
    <View
      style={{
        flex: props.flex,
        justifyContent: props.justify,
        alignItems: props.align,
        width: props.width,
        height: props.height,
        backgroundColor: props.bg,
      }}
    >
      {props.children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({});
