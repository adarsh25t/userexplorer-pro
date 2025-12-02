import { CountryListItemProps } from "@/utils/type";
import { View, Text, StyleSheet } from "react-native";

export const CountryListItem = ({
  rank,
  country,
  count,
  percentage,
}: CountryListItemProps) => (
  <View style={styles.countryItem}>
    <Text style={styles.countryRank}>#{rank}</Text>
    <View style={styles.countryInfo}>
      <Text style={styles.countryName}>{country}</Text>
      <Text style={styles.countryStats}>
        {count} users ({percentage}%)
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  countryRank: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FF6B6B",
    marginRight: 12,
    width: 30,
  },
  countryInfo: {
    flex: 1,
  },
  countryName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A2E46",
  },
  countryStats: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  }
});
