import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Dummy Data
const dummyUsers = Array.from({ length: 20 }).map((_, i) => ({
  id: i + "",
  name: `User ${i + 1}`,
  email: `user${i + 1}@email.com`,
  avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
}));


export default function Index() {

  const [search, setSearch] = useState("");

  const filtered = dummyUsers.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar search={search} setSearch={setSearch} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingTop: 20,
    paddingHorizontal: 16,
  },

  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1A2E46",
    marginBottom: 16,
  },
});
