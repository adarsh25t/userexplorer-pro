import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#1A2E46",
        tabBarInactiveTintColor: "#7B8CA5",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: 65,
          borderTopColor: "#E1E7EF",
          paddingBottom: 10,
          paddingTop: 8,
        },
      }}
    >
      {/* HOME TAB */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      {/* ANALYTICS TAB */}
      <Tabs.Screen
        name="AnalyticsScreen"
        options={{
          title: "Analytics",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "stats-chart" : "stats-chart-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />

      {/* HOME SCREEN TAB */}
      <Tabs.Screen
        name="FavoritesScreen"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={26}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
