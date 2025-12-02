import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Tab Navigator - This is the main entry point */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Other Screens outside tabs */}
      <Stack.Screen name="UserDetailsScreen" options={{ headerShown: false }} />
      <Stack.Screen name="Notifications" options={{ headerShown: false }} />
    </Stack>
  );
}
