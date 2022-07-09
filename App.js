// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Title from "./title/Title";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          style={styles.banner}
          source={{
            uri: "https://cdni.iconscout.com/illustration/premium/preview/online-quiz-5718736-4779390.png?w=0&h=1400",
          }}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    height: 300,
    width: 300,
  },
  button: {
    backgroundColor: "#2874A6",
    width: "40%",
    paddingVertical: 16,
    marginVertical: 16,
    alignItems: "center",
    borderRadius: 16,
  },
  text: {
    color: "#EBF5FB",
    fontSize: 20,
    fontWeight: "600",
  },
});
