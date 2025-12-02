import { GenderBarProps } from "@/utils/type";
import { View, Text, StyleSheet } from "react-native";

export const GenderBar = ({ gender, count, percent, color }: GenderBarProps) => (
  <View style={styles.genderItem}>
    <View style={styles.genderInfo}>
      <Text style={styles.genderLabel}>{gender}</Text>
      <Text style={styles.genderCount}>
        {count} ({percent}%)
      </Text>
    </View>
    <View style={styles.barContainer}>
      <View
        style={[
          styles.bar,
          { width: `${percent}%`, backgroundColor: color },
        ]}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  genderItem: {
    marginBottom: 16,
  },
  genderInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  genderLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A2E46",
  },
  genderCount: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  barContainer: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 4,
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    borderRadius: 4,
  },
});
