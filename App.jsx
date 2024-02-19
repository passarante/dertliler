import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import TodoCard from "./src/components/TodoCard";
import { setStorageData, getStorageData } from "./src/helpers/storageHelper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mockTodos } from "./src/data/todos";
import TodoCategoryCard from "./src/components/TodoCategoryCard";
import {
  useFonts,
  ArchitectsDaughter_400Regular,
} from "@expo-google-fonts/architects-daughter";
const App = () => {
  // const [name, setName] = useState("");
  // const [lastname, setLastname] = useState("");

  const [todos, setTodos] = useState([]);
  const [todoCategories, setTodoCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);

  let [fontsLoaded] = useFonts({
    ArchitectsDaughter_400Regular,
  });

  useEffect(() => {
    //AsyncStorage.clear();
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

    // getStorageData("@todos").then((res) => {
    //   if (res != null) {
    //     setTodos(res);
    //   }
    // });
    const categories = [];

    mockTodos.forEach((mt) => {
      if (!categories.includes(mt.category)) {
        categories.push(mt.category);
      }
    });

    setTodoCategories(categories);

    setTodos(mockTodos);
  }, []);

  // const saveUserData = async () => {
  //   if (name.length > 0 && lastname.length > 0) {
  //     const user = {
  //       name,
  //       lastname,
  //     };

  //     await setStorageData("user", JSON.stringify(user));

  //     Keyboard.dismiss();
  //   } else {
  //     alert("Please fill your name and lastname");
  //   }
  // };

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
      setStorageData("@todos", tempTodos);
      setTitle("");
      Keyboard.dismiss();
      setShowModal(false);
    }
  };

  const toggleTodoStatus = (id) => {
    let tempTodos = todos;
    const res = todos.find((t) => t.id == id);
    console.log(res);
    res.completed = !res.completed;
    setStorageData("@todos", tempTodos);
    setTodos(tempTodos);
  };

  const deleteTodo = (id) => {
    let tempTodos = todos.filter((t) => t.id != id);
    setStorageData("@todos", tempTodos);
    setTodos(tempTodos);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeModalBtn}
              onPress={() => setShowModal(false)}
            >
              <AntDesign size={18} color={"white"} name="close" />
            </TouchableOpacity>
            <View>
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
            </View>
          </View>
        </View>
      </Modal> */}
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
      {/* <Button title="Open Modal" onPress={() => setShowModal(true)} /> */}

      <View style={{}}>
        <Text style={styles.appTitle}>GnyNotes</Text>
        {/* <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoCard
              item={item}
              toggleTodoStatus={toggleTodoStatus}
              deleteTodo={deleteTodo}
            />
          )}
        /> */}
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
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    fontFamily: "ArchitectsDaughter_400Regular",
    fontSize: 80,
    color: "#b1fd54",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  modalContent: {
    width: "90%",
    height: "25%",
    backgroundColor: "#f7bdbd",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    borderRadius: 20,
  },
  closeModalBtn: {
    position: "absolute",
    backgroundColor: "red",
    width: 30,
    height: 30,
    borderRadius: 15,
    top: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
