import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Quiz({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.questionButton}>
        <Text style={styles.questionText}>Q1.Question</Text>
      </View>

      <View style={styles.option}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Options</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text>Options</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text>Options</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text>Options</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.ActionButton}>
          <Text style={styles.ButtonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ActionButton} onPress={() => navigation.navigate("Result")}>
          <Text style={styles.ButtonText}>Score</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ActionButton}>
          <Text style={styles.ButtonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  questionButton: {
    backgroundColor: "#5499C7",
    padding: 12,
    borderRadius: 10,
    marginBottom: 30,
  },
  questionText: {
    fontSize: 24,
    color: "#EBF5FB",
  },
  option: {
    padding: 16,
    marginVertical: 12,
    flex: 1,
  },
  optionButton: {
    backgroundColor: "#85C1E9",
    padding: 12,
    borderRadius: 10,
    marginVertical: 4,
  },
  bottom: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 20,
    paddingVertical: 20,
  },
  ActionButton: {
    backgroundColor: "#1B4F72",
    padding: 10,
    borderRadius: 10,
  },

  ButtonText: {
    fontSize: 18,
    color: "#EBF5FB",
  },
});
