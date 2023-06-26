import { View, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";

const TodoForm = ({ addTodoHandler }) => {
  const [todoText, setTodoText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Add Todo..."
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
      />
      <Button
        style={styles.button}
        color="salmon"
        title="Add Todo"
        onPress={() => {
          addTodoHandler(todoText);
          setTodoText("");
        }}
      />
    </View>
  );
};

export default TodoForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "lightsalmon",
  },
});
