import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../state/store";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* Tab Navigator - This is the main entry point */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

          {/* Other Screens outside tabs */}
          <Stack.Screen name="Notifications" options={{ headerShown: false }} />
        </Stack>
      </>
    </Provider>
  );
}
