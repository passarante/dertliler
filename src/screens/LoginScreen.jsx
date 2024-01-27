import { Image, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import colors from "./../constants";
import ScreenButton from "../components/ScreenButton";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Header isLogin />
      <View style={styles.top}>
        <Image
          source={require("../assets/imgs/clamp.png")}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View style={styles.body}>
        <View style={styles.radius} />
        <View>
          <Text style={styles.headText}>Join us!</Text>
          <Text style={styles.text}>The world at your fingertips</Text>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.formControl}>
            <Fontisto
              name="email"
              size={18}
              color="black"
              style={styles.icon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor={"black"}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.formControl}>
            <MaterialIcons
              style={styles.icon}
              name="lock-outline"
              size={18}
              color="black"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor={"black"}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <View style={styles.links}>
            <Text style={styles.forgot}>Forgot password?</Text>
            <Text style={styles.signupText}>Signup</Text>
          </View>
          {/* <View style={styles.footer}>
            <ScreenButton
              btnText="Sign In"
              onPress={() => {
                console.log("email", email);
                console.log("password", password);
              }}
            />
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    display: "flex",
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: "80%",
  },
  body: {
    flex: 1,
    marginTop: 20,
    height: "65%",
    backgroundColor: colors.yellow,
    padding: 30,
    justifyContent: "space-between",
  },
  radius: {
    position: "absolute",
    backgroundColor: "white",
    width: "117%",
    height: 40,
    borderRadius: 100,
    top: -20,
    zIndex: 500,
  },
  formContainer: {
    flex: 1,
    marginTop: 40,
    gap: 20,
  },
  headText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
  footer: {
    position: "absolute",
    width: "120%",
    bottom: 10,
  },
  textInput: {
    backgroundColor: "white",
    width: "90%",
    padding: 10,
    paddingLeft: 40,
    borderRadius: 15,
  },
  formControl: {
    position: "relative",
  },
  icon: {
    position: "absolute",
    zIndex: 999,
    left: 15,
    top: 15,
  },
  links: {
    width: "90%",
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forgot: {
    fontWeight: "500",
  },
  signupText: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
