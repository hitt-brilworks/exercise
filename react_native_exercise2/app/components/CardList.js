import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Card from "../components/Card";
import cityDetails from "../data/staticData";

function CardList({ isGridView }) {
  function renderItem({ item }) {
    return (
      <Card
        image={item.image}
        title={item.name}
        subTitle={item.description}
        isGridView={isGridView}
      />
    );
  }
  return (
    <View styles={styles.container}>
      <FlatList
        data={cityDetails}
        keyExtractor={(city) => city.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default CardList;
