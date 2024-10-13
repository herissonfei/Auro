import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Auro</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        go to profile
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
