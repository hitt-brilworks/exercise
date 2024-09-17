import React from "react";

import { Text } from "react-native";

function AppText({ children, style = { color: "black" } }) {
  return <Text style={style}>{children}</Text>;
}

export default AppText;
