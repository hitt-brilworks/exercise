import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import FilterButton from "../components/FilterButton";

function TaskListScreen() {
  return (
    <>
      <View style={styles.container}>
        <FilterButton />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
});

export default TaskListScreen;
