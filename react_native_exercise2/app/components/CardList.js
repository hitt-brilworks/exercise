import React, { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import Constants from "expo-constants";

import { useOrientation } from "../contexts/orientationContext";
import Card from "../components/Card";
import cityDetails from "../data/staticData";

function CardList({ isGridView }) {
  const orientation = useOrientation();
  const [itemHeight, setItemHeight] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const listKey = `${
    isGridView ? (orientation === "landscape" ? "3-cols" : "2-cols") : "1-col"
  }`;
  function flatListHeight(e) {
    const height = e.nativeEvent.layout.height;
    const width = e.nativeEvent.layout.width;
    setItemHeight(height);
    setItemWidth(width);
  }

  function renderItem({ item }) {
    return (
      <Card
        image={item.image}
        title={item.name}
        subTitle={item.description}
        isGridView={isGridView}
        itemHeight={itemHeight}
        itemWidth={itemWidth}
      />
    );
  }

  return (
    <View style={[styles.container]} onLayout={flatListHeight}>
      <FlatList
        key={listKey}
        pagingEnabled
        numColumns={
          isGridView && orientation === "portrait"
            ? 2
            : isGridView && orientation === "landscape"
            ? 3
            : 1
        }
        data={cityDetails}
        keyExtractor={(city) => city.id}
        renderItem={renderItem}
        columnWrapperStyle={
          isGridView && orientation === "portrait"
            ? { justifyContent: "space-between" }
            : isGridView && orientation === "landscape"
            ? { columnGap: 20 }
            : undefined
        }
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() =>
          isGridView && orientation === "portrait" ? (
            <View style={{ height: 20 }} />
          ) : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    marginTop: 30,
  },
});

export default CardList;
