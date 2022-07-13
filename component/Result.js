import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Result({ route, navigation }) {
  const { result } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.score}>
        <Text style={styles.scoreText}> Score </Text>
      </View>
      <View style={styles.bannerContainer}>
        <Text style={styles.result}>You Have Scored {result * 10}%</Text>
        <Image style={styles.banner} source={{ uri: "https://cdni.iconscout.com/illustration/free/preview/concept-of-seo-ranking-2040894-1721890.png?w=0&h=1400" }}></Image>
      </View>
      <View>
        <TouchableOpacity style={styles.HomeButton} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.HomeButtonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  score: {
    backgroundColor: "#2874A6",
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
  },
  scoreText: {
    color: "#EAF2F8",
    fontSize: 28,
    fontWeight: "600",
  },
  result: {
    color: "#154360",
    textAlign: "center",
    fontSize: 28,
    margin: 40,
    fontWeight: "600",
  },
  bannerContainer: {
    alignItems: "center",
  },
  banner: {
    height: 300,
    width: 300,
  },
  HomeButton: {
    backgroundColor: "#154360",
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 20,
  },
  HomeButtonText: {
    color: "#EAF2F8",
    fontSize: 28,
    fontWeight: "600",
  },
});
