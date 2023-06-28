import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function TodoItem({ item, deleteTodoHandler }) {
  const [completed, setCompleted] = useState(false);

  const toggleComplete = () => {
    setCompleted(!completed);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskGroup}>
        <FontAwesome5
          name={completed ? "check-circle" : "tasks"}
          size={18}
          color={completed ? "green" : "#555"}
        />
        <Text
          style={[styles.text, completed && styles.completedText]}
          numberOfLines={5}
          ellipsizeMode="tail"
        >
          {item.text}
        </Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity onPress={toggleComplete}>
          <MaterialIcons
            name={completed ? "undo" : "check"}
            size={24}
            color={completed ? "#555" : "green"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteTodoHandler(item.key);
          }}
        >
          <MaterialIcons name="delete" color="red" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    minHeight: 50,
    marginHorizontal: 20,
    borderColor: "lightsalmon",
    borderWidth: 1,
  },
  taskGroup: {
    minWidth: "80%",
    maxWidth: "80%",
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    maxWidth: "90%",
    fontSize: 18,
    textTransform: "capitalize",
    color: "#333",
  },
  completedText: {
    textDecorationLine: "line-through",
    fontStyle: "italic",
    color: "#555",
  },
  icons: {
    minWidth: 60,
    maxWidth: "20%",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginLeft: 10,
  },
});
