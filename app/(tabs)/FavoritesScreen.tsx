import Header from "@/components/Header";
import UserCard from "@/components/UserCard";
import React, { useMemo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { User } from "@/utils/type";

const FavoritesScreen = () => {

  //* Fetch all users from Redux store
  const allUsers = useSelector((state: any) => state.users.data);

  //* Get favorite IDs from Redux
  const favoriteIds = useSelector((state: any) => state.favorites.ids);

  //* Filter to get only favorited users - memoized
  const favoriteUsers = useMemo(() => {
    if (!allUsers.length || !favoriteIds.length) return [];
    return allUsers.filter((user: User) =>
      favoriteIds.includes(user.login.uuid)
    );
  }, [allUsers, favoriteIds]);

  return (
    <SafeAreaView style={styles.container}>

      {/* Title with count */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>❤️ Favorites</Text>
        <Text style={styles.count}>{favoriteUsers.length}</Text>
      </View>

      {/* Empty state */}
      {favoriteUsers.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🤍</Text>
          <Text style={styles.emptyTitle}>No Favorites Yet</Text>
          <Text style={styles.emptyMessage}>
            Add users to your favorites from the Users list
          </Text>
        </View>
      ) : (

        <FlatList
          data={favoriteUsers}
          keyExtractor={(item) => item.login.uuid}
          renderItem={({ item }) => <UserCard user={item} />}
          contentContainerStyle={{ paddingBottom: 20 }}
          maxToRenderPerBatch={20}
          updateCellsBatchingPeriod={50}
          removeClippedSubviews={true}
          initialNumToRender={15}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <Text style={styles.listInfo}>
              {favoriteUsers.length} favorited user{favoriteUsers.length !== 1 ? "s" : ""}
            </Text>
          }
        />
      )}
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1A2E46",
  },
  count: {
    fontSize: 22,
    fontWeight: "600",
    color: "#FF6B6B",
  },
  listInfo: {
    fontSize: 12,
    color: "#666",
    marginBottom: 12,
    fontWeight: "500",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A2E46",
    marginBottom: 8,
    textAlign: "center",
  },
  emptyMessage: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },
});
