import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Picker } from "@react-native-picker/picker";

function FilterButton() {
  const [selectedFilter, setFilter] = useState("All");
  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Task List:</Text>
        <Picker
          mode="dropdown"
          style={styles.picker}
          ref={pickerRef}
          selectedValue={selectedFilter}
          onValueChange={(itemValue, itemIndex) => setFilter(itemValue)}
        >
          <Picker.Item label="All" value="All" />
          <Picker.Item label="Completed" value="Completed" color="green" />
          <Picker.Item label="Pending" value="Pending" color="red" />
        </Picker>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  picker: {
    height: 50,
    width: 158,
    borderWidth: 10,
    borderColor: "black",
  },
  text: {
    fontSize: 24,
  },
});

export default FilterButton;
