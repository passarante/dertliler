import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const App = () => {
  const users = ["Guney", "Berat", "Fatih", "Leyla", "Merve"];
  const id = 3;
  const [data, setData] = useState({
    counter: 0,
    message: "",
  });

  const [name, setName] = useState("");
  const [cond, setCond] = useState("");

  useEffect(() => {
    setName(users[data.counter]);
  }, []);

  const decrement = () => {
    if (data.counter == 0) {
    } else {
      setData({ counter: data.counter - 1, message: "Hebele hübele" });
    }
  };

  const increment = () => {
    setData({ counter: data.counter + 1, message: "Hebele hübele" });
    if (data.counter > 0) {
    }
  };

  return (
    <View style={styles.container}>
      <Text>Merhabalar, eşi güzel kendi güzel kardeşimiz ,{name}</Text>
      <Text>{data.message}</Text>
      <Text>{data.counter}</Text>

      <View style={styles.btnContainer}>
        <Button onPress={decrement} title="-" />
        <Button onPress={increment} title="+" />
      </View>
      <Button title="Set Condition" onPress={() => setCond("true")} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 20,
  },
});
