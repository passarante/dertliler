import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import TodoCard from "./TodoCard";

const TodoCategoryCard = (props) => {
  const [categoryTodos, setCategoryTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState(0);
  const [categoryColor, setCategoryColor] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const tempTodos = props.todos.filter((t) => t.category == props.item);
    setCategoryColor(tempTodos[0].color);
    setCategoryTodos(tempTodos);
    setCompletedTodos(tempTodos.filter((t) => t.completed == true).length);
  }, []);

  const item = props.item;

  const saveTodo = () => {};
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, { backgroundColor: categoryColor }]}
      onPress={() => setShowModal(true)}
    >
      <Modal visible={showModal}>
        <View
          style={[styles.modalContainer, { backgroundColor: categoryColor }]}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeModalBtn}
              onPress={() => setShowModal(false)}
            >
              <AntDesign name="close" size={20} color="white" />
            </TouchableOpacity>
            <View style={styles.modalBody}>
              <FlatList
                data={categoryTodos}
                renderItem={({ item }) => <TodoCard item={item} />}
              />
            </View>
            <View style={styles.modalFooter}>
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
      </Modal>
      <Text style={styles.name}>{item}</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>{completedTodos}</Text>
        <Text style={styles.statText}>/</Text>
        <Text style={styles.statText}>{categoryTodos.length}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoCategoryCard;

const styles = StyleSheet.create({
  container: {
    height: 250,
    borderRadius: 30,
    width: 220,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  name: {
    fontSize: 40,
    fontFamily: "ArchitectsDaughter_400Regular",
  },
  statsContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  statText: {
    fontSize: 40,
    fontFamily: "ArchitectsDaughter_400Regular",
  },
  modalContainer: {
    // backgroundColor: "#ffe6ab",
  },
  modalContent: {
    position: "relative",
    marginTop: 30,
    padding: 10,
    width: "100%",
    height: "100%",
    marginBottom: -30,
    justifyContent: "space-between",
  },
  formContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 40,
  },
  input: {
    backgroundColor: "#fbf9f9",
    width: "80%",
    padding: 5,
    marginVertical: 10,
    height: 50,
    borderRadius: 5,
  },
  closeModalBtn: {
    position: "absolute",
    top: -20,
    right: 20,
    height: 30,
    width: 30,
    backgroundColor: "red",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
});
