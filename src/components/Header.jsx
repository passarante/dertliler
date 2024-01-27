import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.logoText}>PRIMZEE</Text>

      {!props.isLogin && (
        <TouchableOpacity>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
});
