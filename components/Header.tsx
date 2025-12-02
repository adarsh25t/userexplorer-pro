import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Header = ({ titleColor }: { titleColor?: string }) => {

  const router = useRouter();

  return (
    <View style={styles.headerRow}>
      <Text style={[styles.headerTitle,{color: titleColor}]}>✨ UserExplorer Pro</Text>

      <TouchableOpacity style={styles.headerIconBtn} onPress={() => router.push("/Notifications")}>
        <Ionicons name="notifications-outline" size={24} color="#1A2E46" />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 19,
    fontWeight: "600",
    color: "#fff",
  },

  headerIconBtn: {
    padding: 6,
    borderRadius: 10,
    backgroundColor: "#E6EEF7",
  },

})
