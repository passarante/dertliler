import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  ArchitectsDaughter_400Regular,
} from "@expo-google-fonts/architects-daughter";
import { mockTodos } from "../data/todos";
import TodoCategoryCard from "../components/TodoCategoryCard";

const HomeScreen = (props) => {
  const [todos, setTodos] = useState([]);
  const [todoCategories, setTodoCategories] = useState([]);

  useEffect(() => {
    const categories = [];

    mockTodos.forEach((mt) => {
      if (!categories.includes(mt.category)) {
        categories.push(mt.category);
      }
    });

    setTodoCategories(categories);

    setTodos(mockTodos);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.appTitle}>GnyNotes</Text>

        <FlatList
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
          data={todoCategories}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => (
            <TodoCategoryCard item={item} todos={todos} />
          )}
        />
        <Button
          title="Login"
          onPress={() => props.navigation.navigate("LoginScreen")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    padding: 20,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    fontFamily: "ArchitectsDaughter_400Regular",
    fontSize: 80,
    color: "#b1fd54",
  },
});

export default HomeScreen;
