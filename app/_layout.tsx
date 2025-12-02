import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="userDetails" options={{ headerShown: false }} />
    <Stack.Screen name="analytics" options={{ headerShown: false }} />
    <Stack.Screen name="Notifications" options={{ headerShown: false }} />
  </Stack>;
}
