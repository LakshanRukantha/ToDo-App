import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function TodoItem({ item, deleteTodoHandler }) {
  return (
    <View style={styles.container}>
      <View style={styles.taskGroup}>
        <FontAwesome5 name="tasks" size={18} color="#555" />
        <Text style={styles.text} numberOfLines={5} ellipsizeMode="tail">
          {item.text}
        </Text>
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
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
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
