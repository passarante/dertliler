import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import ScreenButton from "./ScreenButton";

export default function OnboardingScreen(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{props.sloganText1}</Text>
          <Text style={styles.heading}>{props.sloganText2} </Text>

          <Text style={styles.desc}>{props.description}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={props.image}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={[styles.footer, { backgroundColor: props.color }]}>
        <View style={styles.radius} />
        <ScreenButton
          onPress={() => props.onPress()}
          btnText={"Get Started Now"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  body: {
    flex: 5,
    padding: 20,
    justifyContent: "flex-end",
    position: "relative",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "white",
  },
  textContainer: {
    position: "absolute",
    top: 120,
    left: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 18,
  },
  imageContainer: {
    position: "absolute",
    bottom: -100,
    right: 10,
  },
  image: {
    height: 550,
    width: 400,
  },
  radius: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    height: 30,
    borderRadius: 100,
    top: -20,
    zIndex: 500,
  },

  footer: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  borderLeftContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 20,
    top: -40,
  },
  borderRightContainer: {
    position: "absolute",
    top: -40,
    right: 0,
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 20,
  },
});
