import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const TodoCard = (props) => {
  const { title, id, completed } = props.item;
  const toggleTodoStatus = props.toggleTodoStatus;
  const deleteTodo = props.deleteTodo;

  const [isCompleted, setIsCompleted] = useState(completed);

  const toggleCompleted = () => {
    setIsCompleted((prev) => !prev);
    toggleTodoStatus(id);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity style={[styles.check]} onPress={toggleCompleted}>
          <View
            style={[
              isCompleted && {
                backgroundColor: "black",
                width: 10,
                height: 10,
              },
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
      <TouchableOpacity onPress={() => deleteTodo(id)}>
        <AntDesign name="delete" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 10,
    elevation: 5,
    borderRadius: 10,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
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
