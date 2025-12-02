
import FilterButton from "@/components/FilterButton";
import Header from "@/components/Header";
import LoadingIndicator from "@/components/LoadingIndicator";
import SearchBar from "@/components/SearchBar";
import SelectionModal from "@/components/SelectionModal";
import UserCard from "@/components/UserCard";
import { setCountry, setGender, setSearch } from "@/state/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { fetchUsers, loadCache } from "@/state/usersSlice";
import { User } from "@/utils/type";
import React, { useEffect, useMemo } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UsersScreen() {
  const dispatch = useAppDispatch();

  const { data, loading, error, cacheLoaded } = useAppSelector(
    (state) => state.users
  );

  const { search, country, gender } = useAppSelector(
    (state) => state.filters
  );

  const [countryModal, setCountryModal] = React.useState(false);
  const [genderModal, setGenderModal] = React.useState(false);

  useEffect(() => {
    dispatch(loadCache());
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredData = useMemo(() => {
    if (!data.length) return [];

    return data.filter((user: User) => {
      const matchesSearch =
        !search ||
        user.name.first.toLowerCase().includes(search.toLowerCase()) ||
        user.name.last.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchesCountry =
        country === "All" || user.location.country === country;

      const normalizedGender = gender.toLowerCase();
      const matchesGender =
        gender === "All" || user.gender === normalizedGender;

      return matchesSearch && matchesCountry && matchesGender;
    });
  }, [data, search, country, gender]);

  if (error && cacheLoaded) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Failed to load users</Text>
        <Text style={styles.errorMessage}>{error}</Text>
        <TouchableOpacity
          onPress={() => dispatch(fetchUsers())}
          style={styles.retryButton}
        >
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  if (!cacheLoaded && loading) {
    return (
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <Header />

        {/* Search Bar - dispatches to Redux */}
        <SearchBar
          search={search}
          setSearch={(text: string) => dispatch(setSearch(text))}
          disabled={true}
        />
        <LoadingIndicator />
      </SafeAreaView>
    );
  }
  const countries = Array.from(
    new Set(data.map((user: User) => user.location.country))
  ).sort();
  const countryOptions = ["All", ...countries];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          {/* Header */}
          <Header />

          {/* Search Bar  */}
          <SearchBar
            search={search}
            setSearch={(text: string) => dispatch(setSearch(text))}
          />

          {/* Filter Row */}
          <View style={styles.filterRow}>
            <FilterButton
              label="🌍 Country"
              value={country}
              onPress={() => setCountryModal(true)}
            />
            <FilterButton
              label="👤 Gender"
              value={gender}
              onPress={() => setGenderModal(true)}
            />
          </View>

          {/* Results count */}
          <Text style={styles.resultCount}>
            Showing {filteredData.length} of {data.length} users
          </Text>
        </View>

        {/* User List */}
        <View style={styles.listWrapper}>
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.login.uuid}
            renderItem={({ item }) => <UserCard user={item} />}
            contentContainerStyle={{ paddingBottom: 20 }}

            maxToRenderPerBatch={20}
            updateCellsBatchingPeriod={50}
            removeClippedSubviews={true}
            initialNumToRender={20}
            showsVerticalScrollIndicator={false}

            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>
                  {loading ? "Loading..." : "No users found"}
                </Text>
                {(search || country !== "All" || gender !== "All") && (
                  <Text style={styles.emptySubtext}>
                    Try adjusting your filters
                  </Text>
                )}
              </View>
            }
          />
        </View>

        {/* Country Modal */}
        <SelectionModal
          visible={countryModal}
          title="Select Country"
          options={countryOptions as string[]}
          onSelect={(value) => {
            dispatch(setCountry(value));
            setCountryModal(false);
          }}
          onClose={() => setCountryModal(false)}
        />

        {/* Gender Modal */}
        <SelectionModal
          visible={genderModal}
          title="Select Gender"
          options={["All", "male", "female"]}
          onSelect={(value) => {
            dispatch(setGender(value));
            setGenderModal(false);
          }}
          onClose={() => setGenderModal(false)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#1A2E46",
  },
  filterRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
  resultCount: {
    fontSize: 12,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "500",
  },
  headerContainer: {
    paddingHorizontal: 16,
  },
  listWrapper: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "#fff",
    overflow: "hidden",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A2E46",
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 13,
    color: "#999",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F9FC",
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A2E46",
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
    textAlign: "center",
  },
  retryButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#1A2E46",
    borderRadius: 8,
  },
  retryText: {
    color: "#fff",
    fontWeight: "600",
  },
});
