import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FilterButton = ({ label, value, onPress }: { label: string, value: string, onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.filterBtn} onPress={onPress}>
      <Text style={styles.filterText}>{label}: {value}</Text>
    </TouchableOpacity>
  )
}

export default FilterButton

const styles = StyleSheet.create({
  filterBtn: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#DCE7F5",
    borderRadius: 10,
    alignItems: "center",
  },

  filterText: {
    color: "#1A2E46",
    fontSize: 14,
    fontWeight: "600",
  },
})
