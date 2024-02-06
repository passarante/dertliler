import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const TodoCard = (props) => {
  const { title, id, completed } = props.item;

  const [isCompleted, setIsCompleted] = useState(completed);

  const toggleCompleted = () => {
    setIsCompleted((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.check]} onPress={toggleCompleted}>
        <View
          style={[
            isCompleted && { backgroundColor: "black", width: 10, height: 10 },
          ]}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.text,
          isCompleted && {
            textDecorationLine: "line-through",
            color: "lightgray",
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e7e7e7",
    padding: 10,
    marginVertical: 10,
    elevation: 5,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
  },
  check: {
    height: 20,
    width: 20,
    backgroundColor: "#dfdfdf",
    borderColor: "coral",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "600",
    textTransform: "capitalize",
  },
});
