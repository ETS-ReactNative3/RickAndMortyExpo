import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/routes";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Routes />
    </SafeAreaProvider>
  );
}
