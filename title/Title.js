import React from "react";
import { Text, View, StyleSheet } from "react-native";

export function Title() {
  return (
    <View>
      <Text style={style.text}> Quizler </Text>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 80,
    fontWeight: "600",
    color: "gray",
  },
});
export default Title;
