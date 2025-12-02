import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingIndicator = () => {
  return (
    <View style={styles.loadingContainer}>
      <View style={{ width: "100%", marginTop: 20 }}>
        {[...Array(6)].map((_, i) => (
          <View key={i} style={styles.skeletonCard}>
            <View style={styles.skeletonAvatar} />
            <View style={{ flex: 1 }}>
              <View style={styles.skeletonLine} />
              <View style={[styles.skeletonLine, { width: "50%", marginTop: 8 }]} />
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default LoadingIndicator

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  loadingTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1A2E46",
  },

  loadingCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F9FC",
  },

  skeletonCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 14,
    marginBottom: 12,
    borderRadius: 12,
    alignItems: "center",
    elevation: 1,
  },

  skeletonAvatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: "#E2E8F0",
    marginRight: 12,
  },

  skeletonLine: {
    height: 12,
    width: "80%",
    backgroundColor: "#E2E8F0",
    borderRadius: 6,
  },

})
