import { AgeDistributionBarProps } from "@/utils/type";
import { View, Text, StyleSheet } from "react-native";

export const AgeDistributionBar = ({
  decade,
  count,
  maxCount,
}: AgeDistributionBarProps) => {
  const widthPercent = (count / maxCount) * 100;

  return (
    <View style={styles.ageDistItem}>
      <Text style={styles.ageDistLabel}>{decade}</Text>
      <View style={styles.ageDistBar}>
        <View
          style={[
            styles.ageDistFill,
            { width: `${widthPercent}%` },
          ]}
        />
      </View>
      <Text style={styles.ageDistCount}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ageDistItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingVertical: 8,
  },
  ageDistLabel: {
    width: 40,
    fontSize: 12,
    fontWeight: "600",
    color: "#1A2E46",
  },
  ageDistBar: {
    flex: 1,
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 3,
    marginHorizontal: 12,
    overflow: "hidden",
  },
  ageDistFill: {
    height: "100%",
    backgroundColor: "#10B981",
    borderRadius: 3,
  },
  ageDistCount: {
    width: 30,
    textAlign: "right",
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
  }
});
