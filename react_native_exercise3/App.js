import { SafeAreaView, StyleSheet } from "react-native";

import {} from "./app/context/CartContext";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
