import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";

import stickMan from "./src/assets/imgs/stick-man.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Kaykaycı</Text>
        <Image source={stickMan} style={styles.man} />
      </View>

      {/* body */}
      <View style={styles.body}>
        <ImageBackground
          source={require("./src/assets/imgs/bg.jpg")}
          style={styles.img}
          resizeMode="cover"
        >
          <Text style={styles.kText}>Kaykay güzeldir</Text>

          <Text style={styles.kDesc}>
            Kaykay dünyasındaki tüm yeniliklerden haberdar olmak için bizimle
            kalın
          </Text>
          <Button title="Hadi Başlayalım" color="red" />
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={() => alert("asds")}
          >
            <Text style={styles.btnText}>Hadi Başla</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      {/* footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>&copy; Dertli A.Ş.</Text>
      </View>
    </View>

    //DRY Don't repeat yourself
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: 50,
    padding: 10,

    //alignItems: "center",
    //justifyContent: "center",
  },
  man: {
    height: 95,
    width: 200,
  },
  headerText: {
    color: "black",
    fontSize: 32,
    margin: 10,
  },
  header: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  body: {
    backgroundColor: "red",
    flex: 7,
  },
  footer: {
    backgroundColor: "#6b7059",
    flex: 0.4,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
  img: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  kText: {
    fontSize: 40,
    color: "white",
    fontWeight: "900",
  },
  footerText: {
    fontStyle: "italic",
    fontSize: 12,
    color: "white",
  },
  kDesc: {
    fontSize: 14,
    color: "lightgray",
    textAlign: "justify",
  },
  btn: {
    backgroundColor: "red",
    marginTop: 10,
    padding: 10,
    width: 200,
    borderRadius: 10,
  },
  btnText: {
    color: "yellow",
    textAlign: "center",
  },
});
