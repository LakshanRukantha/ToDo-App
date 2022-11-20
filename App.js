import React, { useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Divider,
  TextInput,
} from "@react-native-material/core";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  const [enteredTask, setEnteredTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const taskInputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  };

  const addTaskHandler = () => {
    if (
      enteredTask.trim() == null ||
      enteredTask.trim() == "" ||
      enteredTask === " "
    ) {
      alert("Invalid Input!");
    } else setTasks((currentTasks) => [...currentTasks, enteredTask]);
    setEnteredTask("");
  };

  const removeTaskHandler = (index) => {
    const newTasks = tasks.filter((tasks, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <View style={StyleSheet.absoluteFill}>
      <StatusBar animated={true} backgroundColor="#54158490" />
      <AppBar
        style={styles.appTitle}
        title="ToDoX"
        leading={(props) => (
          <IconButton
            icon={(props) => <Icon name="menu" {...props} />}
            {...props}
          />
        )}
      />
      <View style={styles.addTaskWrapper}>
        <View style={styles.textInput}>
          <TextInput
            label="Task"
            variant="outlined"
            value={enteredTask}
            placeholder="Enter task here..."
            onChangeText={taskInputHandler}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={{ padding: 8 }}
            title="Add Task"
            onPress={addTaskHandler}
          />
        </View>
      </View>
      <Text style={{ marginTop: 16, marginBottom: 8, textAlign: "center" }}>
        Developer : Lakshan Rukantha
      </Text>
      <Divider leadingInset={16} trailingInset={16} color="black" />
      <ScrollView>
        <View style={styles.tasksWrapper}>
          {tasks.map((task, index) => (
            <Text
              style={styles.task}
              key={index}
              onPress={() => removeTaskHandler(index)}
            >
              {task}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    marginBottom: 32,
  },
  addTaskWrapper: {
    height: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  textInput: {
    flex: 10,
    marginRight: 16,
  },
  button: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  tasksWrapper: {
    padding: 16,
    marginTop: 8,
  },
  task: {
    flexDirection: "row",
    fontSize: 18,
    backgroundColor: "#2196F3",
    color: "#ffffff",
    fontSize: 18,
    padding: 8,
    borderRadius: 5,
    paddingLeft: 16,
    marginVertical: 8,
  },
});
