import { StyleSheet } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Username"
        icon={() => <MaterialIcons name="person" size={24} color="black" />}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({});
