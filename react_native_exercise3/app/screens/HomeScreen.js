import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import productsData from "../data/products";
import ProductCard from "../components/ProductCard";

function HomeScreen() {
  function renderItem({ item }) {
    return (
      <ProductCard
        id={item.id}
        name={item.title}
        description={item.description}
        price={item.price}
        imageUrl={item.image}
      />
    );
  }

  const ItemSeparator = () => <View style={styles.separator} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={productsData}
        keyExtracrtor={(item) => item.id}
        renderItem={renderItem}
        numColumns="2"
        ItemSeparatorComponent={ItemSeparator}
        columnWrapperStyle={{ columnGap: 4 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fabbf5",
    padding: 2,
    paddingTop: 10,
  },
  separator: {
    height: 5,
  },
});

export default HomeScreen;
