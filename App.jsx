import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import AddTodoScreen from "./src/screens/AddTodoScreen";
import { AntDesign } from "@expo/vector-icons";
import TodoCategory from "./src/screens/TodoCategory";
import {
  useFonts,
  ArchitectsDaughter_400Regular,
} from "@expo-google-fonts/architects-daughter";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    ArchitectsDaughter_400Regular,
  });

  if (!fontsLoaded) return null;

  const AppStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#121212",
            height: 60,
            padding: 10,
          },
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={AppStack}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
            title: "Anasayfa",
            tabBarLabelStyle: {
              fontSize: 16,
              fontFamily: "ArchitectsDaughter_400Regular",
            },
          }}
        />
        <Tab.Screen
          name="TodoCategory"
          component={TodoCategory}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign name="swap" size={size} color={color} />
            ),
            title: "Todo Ekle",
            tabBarLabelStyle: {
              fontSize: 16,
              fontFamily: "ArchitectsDaughter_400Regular",
            },
          }}
        />
        <Tab.Screen
          name="AddTodo"
          component={AddTodoScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <AntDesign name="barschart" size={size} color={color} />
            ),
            title: "Todo Detay",
            tabBarLabelStyle: {
              fontSize: 16,
              fontFamily: "ArchitectsDaughter_400Regular",
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
