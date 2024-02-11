import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import TodoCard from "./src/components/TodoCard";

const App = () => {
  // const [name, setName] = useState("");
  // const [lastname, setLastname] = useState("");

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    // setStorageData("@appName", "DertlilerApp");
    //setStorageData("@appVersion", "1.0.0.1");
    // getStorageData("@appName");
    // getStorageData("@appVersion");
    // removeStorageData("name");
    // removeStorageData("lastname");
    // getStorageData("name").then((res) => setName(res));
    // getStorageData("lastname").then((res) => setLastname(res));
    // getStorageData("user").then((res) => {
    //   const user = JSON.parse(res);
    //   setName(user.name);
    //   setLastname(user.lastname);
    // });
    //removeStorageData("@todos");
    getStorageData("@todos").then((res) => {
      if (res != null) {
        setTodos(JSON.parse(res));
      }
    });
  }, []);

  const setStorageData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  };

  const getStorageData = async (key) => {
    try {
      const result = await AsyncStorage.getItem(key);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const removeStorageData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  const saveUserData = async () => {
    if (name.length > 0 && lastname.length > 0) {
      const user = {
        name,
        lastname,
      };

      await setStorageData("user", JSON.stringify(user));

      Keyboard.dismiss();
    } else {
      alert("Please fill your name and lastname");
    }
  };

  const saveTodo = () => {
    if (title == "") {
      alert("Title is required");
    } else {
      let tempTodos = todos;

      //spread operator ...

      const todo = {
        id: Math.floor(Math.random() * 1000000),
        title,
        completed: false,
      };
      tempTodos.push(todo);
      setTodos(tempTodos);
      //setTodos([...todos, todo]);
      setStorageData("@todos", JSON.stringify(tempTodos));
      setTitle("");
      Keyboard.dismiss();
    }
  };

  const toggleTodoStatus = (id) => {
    let tempTodos = todos;
    const res = todos.find((t) => t.id == id);
    console.log(res);
    res.completed = !res.completed;
    setStorageData("@todos", JSON.stringify(tempTodos));
    setTodos(tempTodos);
  };

  const deleteTodo = (id) => {
    let tempTodos = todos.filter((t) => t.id != id);
    setStorageData("@todos", JSON.stringify(tempTodos));
    setTodos(tempTodos);
  };

  return (
    <View style={styles.container}>
      {/* <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Your name"
        style={styles.input}
      />
      <TextInput
        value={lastname}
        onChangeText={setLastname}
        placeholder="Lastname"
        style={styles.input}
      />
      <Button title="Save" onPress={saveUserData} /> */}
      <View style={styles.formContainer}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Todo desc..."
        />
        <TouchableOpacity onPress={saveTodo}>
          <AntDesign name="plussquareo" size={30} color="green" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoCard
              item={item}
              toggleTodoStatus={toggleTodoStatus}
              deleteTodo={deleteTodo}
            />
          )}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    padding: 20,
  },
  input: {
    backgroundColor: "#fbf9f9",
    width: "80%",
    padding: 5,
    marginVertical: 10,
    height: 50,
    borderRadius: 5,
  },
  formContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
});
