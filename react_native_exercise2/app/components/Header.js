import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import AppText from "./AppText";

import colors from "../config/colors";

function Header({ isGridView, setIsGridView }) {
  function onViewChange(view) {
    setIsGridView(view === "gridImageView" ? true : false);
  }
  return (
    <View style={styles.container}>
      <AppText style={styles.headerText}>City Guides</AppText>
      <View style={styles.subContainer}>
        <TouchableWithoutFeedback onPress={() => onViewChange("gridImageView")}>
          <Ionicons
            name="grid"
            size={32}
            color={isGridView ? "black" : colors.blurBlack}
          />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => onViewChange("singleImageView")}
        >
          <MaterialCommunityIcons
            name="view-carousel"
            size={32}
            color={isGridView ? colors.blurBlack : "black"}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  subContainer: {
    flexDirection: "row",
    columnGap: 15,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "500",
  },
});

export default Header;
