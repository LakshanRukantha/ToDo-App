import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

export default function TodoItem({ item, deleteTodoHandler }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        deleteTodoHandler(item.key);
      }}
    >
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    marginHorizontal: 20,
    backgroundColor: "lightsalmon",
  },
  text: {
    fontSize: 18,
    textTransform: "capitalize",
    color: "white",
  },
});
