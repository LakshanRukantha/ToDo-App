import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function TodoItem({ item, deleteTodoHandler }) {
  return (
    <View style={styles.container}>
      <View style={styles.taskGroup}>
        <FontAwesome5 name="tasks" size={18} color="#555" />
        <Text style={styles.text}>{item.text}</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity>
          <MaterialIcons name="check" size={24} color="green" />
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
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    marginHorizontal: 20,
    borderColor: "lightsalmon",
    borderWidth: 1,
  },
  taskGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 18,
    textTransform: "capitalize",
    color: "#333",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
