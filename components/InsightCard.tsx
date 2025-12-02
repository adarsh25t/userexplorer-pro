import { InsightCardProps } from "@/utils/type";
import { View, Text, StyleSheet } from "react-native";

export const InsightCard = ({ text }: InsightCardProps) => (
  <View style={styles.insightCard}>
    <Text style={styles.insightText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  insightCard: {
    backgroundColor: "#EBF4FF",
    borderLeftWidth: 4,
    borderLeftColor: "#3B82F6",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  insightText: {
    fontSize: 13,
    color: "#1A2E46",
    fontWeight: "500",
    lineHeight: 18,
  }
});
