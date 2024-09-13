import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "./ListItem";

function TaskCard({ tasks }) {
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

export default TaskCard;
