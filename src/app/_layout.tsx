import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false   }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="main-menu" options={{ animation: "ios_from_right" }} />
    </Stack>
  )
}
