import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const BackButton = () => {

  const router = useRouter();

  return (
    <View>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#1A2E46" />
      </TouchableOpacity>
    </View>
  )
}

export default BackButton

const styles = StyleSheet.create({
  backButton: {
    padding: 6,
    borderRadius: 10,
    backgroundColor: "#E6EEF7",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
  },
})
