import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { useOrientation } from "../contexts/orientationContext";
import Screen from "../components/Screen";
import Header from "../components/Header";
import CardList from "../components/CardList";

function CityGuideGalleryScreen() {
  const [isGridView, setIsGridView] = useState(true);
  return (
    <Screen style={styles.container}>
      <Header isGridView={isGridView} setIsGridView={setIsGridView} />
      <CardList isGridView={isGridView} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
});

export default CityGuideGalleryScreen;
