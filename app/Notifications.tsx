import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '@/components/BackButton'

const Notifications = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <View style={styles.noNotificationsContainer}>
        <Image source={require("../assets/images/no-notifications.png")} />
        <Text style={styles.noNotificationsText}>You don't have any notifications yet.</Text>
      </View>
    </SafeAreaView>
  )
}

export default Notifications

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  noNotificationsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noNotificationsText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A2E46",
    marginTop: 16,
  },
})
