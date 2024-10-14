import { Text } from "react-native";
import React from "react";

export default function AppText({ style, children }) {
  return <Text style={style}>{children}</Text>;
}
