import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Header from "./src/components/Header";
import TodoForm from "./src/components/TodoForm";
import TodoItem from "./src/components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todoText) => {
    if (todoText.length > 3 && todoText.length < 150) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          { text: todoText, key: Math.random().toString() },
        ];
      });
    } else {
      Alert.alert("Oops!", "Todos must be between 3 and 150 characters long", [
        { text: "Understood" },
      ]);
    }
  };

  const deleteTodoHandler = (key) => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.key != key);
          });
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} barStyle={"default"} />
      <Header />
      <View style={styles.content}>
        <TodoForm addTodoHandler={addTodoHandler} />
        <View style={styles.todoList}>
          <FlatList
            data={todos}
            renderItem={({ item }) => {
              return (
                <TodoItem item={item} deleteTodoHandler={deleteTodoHandler} />
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  todoList: {
    flex: 1,
    marginVertical: 20,
  },
  todoItem: {
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    textTransform: "capitalize",
    color: "white",
    backgroundColor: "lightsalmon",
  },
});
