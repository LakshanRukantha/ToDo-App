import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./src/components/Header";
import TodoForm from "./src/components/TodoForm";
import TodoItem from "./src/components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Fix bug on navbar", key: "1" },
    { text: "Develop a simple app", key: "2" },
  ]);

  const addTodoHandler = (todoText) => {
    if (todoText.length > 3 && todoText.length < 20) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          { text: todoText, key: Math.random().toString() },
        ];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be between 3 and 20 characters long", [
        { text: "Understood" },
      ]);
    }
  };

  const deleteTodoHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
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
    </TouchableWithoutFeedback>
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
