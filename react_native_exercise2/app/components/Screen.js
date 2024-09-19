import React from "react";
import { SafeAreaView } from "react-native";
import Constants from "expo-constants";

import { useOrientation } from "../contexts/orientationContext";

function Screen({ children, style }) {
  const orientation = useOrientation();
  return (
    <SafeAreaView
      style={[
        style,
        {
          paddingTop:
            orientation === "portrait"
              ? Constants.statusBarHeight + 20
              : Constants.statusBarHeight + 10,
        },
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

export default Screen;
