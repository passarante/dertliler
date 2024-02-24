import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { mockTodos } from "../data/todos";
import TodoCard from "../components/TodoCard";

const TodoCategory = (props) => {
  const route = useRoute();
  // const navigation = useNavigation();
  // const category = route.params.todo;

  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   navigation.setOptions({ title: category });
  //   setTodos(mockTodos.filter((t) => t.category == category));
  // }, []);

  return (
    <View>
      {/* <FlatList
        data={todos}
        renderItem={({ item }) => <TodoCard item={item} />}
      /> */}
      <Text>TodoCategory</Text>
    </View>
  );
};

export default TodoCategory;
