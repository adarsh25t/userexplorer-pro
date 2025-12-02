import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const SearchBar = ({ search, setSearch }: { search: string, setSearch: (search: string) => void }) => {
  return (
    <View style={styles.searchBarContainer}>
      <Ionicons name="search" size={22} color="#1A2E46" />
      <TextInput
        style={styles.searchBar}
        placeholder="Search users..."
        placeholderTextColor="#888"
        value={search}
        onChangeText={setSearch}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 10,
    marginBottom: 14,
    backgroundColor: "#FFFFFF",
    borderColor: "#E0E6ED",
    borderWidth: 1,
    borderRadius: 10,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingVertical: 0,
  }
})
