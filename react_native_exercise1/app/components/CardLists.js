import React from "react";
import { FlatList } from "react-native";

import ListItem from "./ListItem";

function CardLists({ tasks }) {
  const renderItem = ({ item }) => {
    return <ListItem item={item} />;
  };
  return (
    <>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
}

export default CardLists;
