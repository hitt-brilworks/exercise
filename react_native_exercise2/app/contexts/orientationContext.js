import React, { createContext, useContext } from "react";
import { useDeviceOrientation } from "@react-native-community/hooks";

const OrientationContext = createContext();

export function OrientationProvider({ children }) {
  const orientation = useDeviceOrientation();

  return (
    <OrientationContext.Provider value={orientation}>
      {children}
    </OrientationContext.Provider>
  );
}

export function useOrientation() {
  return useContext(OrientationContext);
}
