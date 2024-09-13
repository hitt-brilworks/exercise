import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

function ListItem({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const backgroundColorStyle =
    item.status === "Completed" ? "lightgreen" : "white";
  const textColorStyle = item.status === "Completed" ? "green" : "red";

  function onPress() {
    setIsExpanded(!isExpanded); // Simplified toggle logic
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.item, { backgroundColor: backgroundColorStyle }]}>
        <Text style={[styles.text, { color: textColorStyle }]}>
          Title: {item.title}
        </Text>
        <Text style={[styles.text, { color: textColorStyle }]}>
          Status: {item.status}
        </Text>
        <Text style={[styles.text, { color: textColorStyle }]}>
          Due Date: {item.dueDate}
        </Text>
        {isExpanded && (
          <Text style={[styles.text, { color: textColorStyle }]}>
            Description: {item.description}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    marginHorizontal: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  text: {
    fontSize: 16,
  },
});

export default ListItem;
