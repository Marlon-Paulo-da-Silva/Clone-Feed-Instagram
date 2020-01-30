import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

import Feed from "./src/screens/Feed";

export default function App() {
  return (
    <SafeAreaView style={styles.safearea}>
      <Feed />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    marginTop: 30
  }
});
