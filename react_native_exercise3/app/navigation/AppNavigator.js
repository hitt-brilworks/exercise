import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Platform, Linking, Alert } from "react-native";
import CartContextProvider from "../context/CartContext";

const PERSISTENCE_KEY = "NAVIGATION_STATE_V1";
const PERSISTENCE_ENABLED = __DEV__;

export default function AppNavigator() {
  const [isReady, setIsReady] = React.useState(Platform.OS === "web");
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (initialUrl == null) {
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state && state.someConditionIndicatingError) {
            await AsyncStorage.removeItem(PERSISTENCE_KEY);
            Alert.alert(
              "Error",
              "We reset your navigation state due to an issue."
            );
          } else if (state !== undefined) {
            setInitialState(state);
          }
        }
      } catch (e) {
        console.error("Failed to restore navigation state", e);
        await AsyncStorage.removeItem(PERSISTENCE_KEY);
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady && PERSISTENCE_ENABLED) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <CartContextProvider>
      <NavigationContainer
        initialState={initialState}
        onStateChange={
          PERSISTENCE_ENABLED
            ? (state) =>
                AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
            : undefined
        }
      >
        <StackNavigator />
      </NavigationContainer>
    </CartContextProvider>
  );
}
