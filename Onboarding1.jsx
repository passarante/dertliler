import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>The World's</Text>
          <Text style={styles.heading}>First Platform</Text>
          <Text style={styles.desc}>Empowering all your needs</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./src/assets/imgs/boy-11.png")}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.radius} />
        <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
          <Text style={styles.btnText}>Get Started Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  skip: {
    fontWeight: "600",
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
    backgroundColor: "#ffde00",

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
