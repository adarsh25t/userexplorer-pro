import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SelectionModal from "@/components/SelectionModal";
import FilterButton from "@/components/FilterButton";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserCard from "@/components/UserCard";

// Dummy Data
const dummyUsers = Array.from({ length: 20 }).map((_, i) => ({
  id: i + "",
  name: `User ${i + 1}`,
  email: `user${i + 1}@email.com`,
  avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
}));


export default function Index() {

  const [search, setSearch] = useState("");

  const [countryModal, setCountryModal] = useState(false);
  const [genderModal, setGenderModal] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");

  const filtered = dummyUsers.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Filter Row */}
      <View style={styles.filterRow}>
        <FilterButton
          label="🌍 Country"
          value={selectedCountry}
          onPress={() => setCountryModal(true)}
        />
        <FilterButton
          label="👤 Gender"
          value={selectedGender}
          onPress={() => setGenderModal(true)}
        />
      </View>

      {/* User List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UserCard user={item} />}
        contentContainerStyle={{ paddingBottom: 30 }}
      />

      <SelectionModal
        visible={countryModal}
        title="Select Country"
        options={["All", "USA", "India", "Canada", "UK", "Germany"]}
        onSelect={(value) => {
          setSelectedCountry(value);
          setCountryModal(false);
        }}
        onClose={() => setCountryModal(false)}
      />

      <SelectionModal
        visible={genderModal}
        title="Select Gender"
        options={["All", "Male", "Female"]}
        onSelect={(value) => {
          setSelectedGender(value);
          setGenderModal(false);
        }}
        onClose={() => setGenderModal(false)}
      />


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
  filterRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
});
