import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import PhotoCard from "./src/components/PhotoCard";
import axios from "axios";
import TodoCard from "./src/components/TodoCard";

// const apiUrl = "https://jsonplaceholder.typicode.com/photos";
const apiUrl = "https://jsonplaceholder.typicode.com/todos/";

const App = () => {
  // const [photos, setPhotos] = useState(null);
  const [todos, setTodos] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch(apiUrl)
    //   .then((response) => response.json())
    //   .then((photosData) => setPhotos(photosData));

    // setLoading(true);
    // setError("");

    // axios
    //   .get(apiUrl)
    //   .then((res) => {
    //     setPhotos(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setError(err.message);
    //     setPhotos(null);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    getTodosFromAPI();
  }, []);

  const getPhotosFromAPI = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(apiUrl);
      setPhotos(response.data);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getTodosFromAPI = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await axios.get(apiUrl);
      setTodos(result.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        // <FlatList
        //   showsVerticalScrollIndicator={false}
        //   data={photos}
        //   renderItem={({ item }) => <PhotoCard item={item} />}
        // />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={todos}
          renderItem={({ item }) => <TodoCard item={item} />}
        />
      )}
      {error && <Text>{error}</Text>}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 45,
  },
});
