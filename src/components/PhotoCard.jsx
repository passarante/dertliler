import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const PhotoCard = (props) => {
  const { title, id, url } = props.item;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title.substring(0, 20) + "..."}</Text>
      </View>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhotoCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    position: "relative",
  },
  imageContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 2,
    flexWrap: "wrap",
  },
  text: {},
  image: {
    width: 80,
    height: 80,
  },
  btnContainer: {
    width: 60,
    height: 30,
    backgroundColor: "black",
    padding: 5,
    borderRadius: 5,
    zIndex: 99,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 12,
    color: "white",
  },
});
