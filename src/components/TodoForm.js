import { View, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-elements";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const TodoForm = ({ addTodoHandler }) => {
  const [todoText, setTodoText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Add a new task..."
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
      />
      <Button
        buttonStyle={styles.button}
        icon={
          <MaterialIcons
            style={{ marginRight: 10 }}
            name="add-task"
            size={24}
            color="white"
          />
        }
        title={`Add Todo`}
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
  button: {
    backgroundColor: "salmon",
  },
  textInput: {
    flex: 1,
    color: "#222",
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: "lightsalmon",
  },
});
