import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User } from '@/utils/type';
import Header from '@/components/Header';
import { StatCard } from '@/components/StatCard';
import { GenderBar } from '@/components/GenderBar';
import { AgeDistributionBar } from '@/components/AgeDistributionBar';
import { CountryListItem } from '@/components/CountryListItem';
import { InsightCard } from '@/components/InsightCard';


const AnalyticsScreen = () => {
  const users = useSelector((state: any) => state.users.data);

  // Memoize all heavy calculations
  const analytics = useMemo(() => {

    // * If no users, return default values
    if (!users.length) {
      return {
        totalUsers: 0,
        avgAge: 0,
        medianAge: 0,
        oldestAge: 0,
        youngestAge: 0,
        genderBreakdown: { male: 0, female: 0, malePercent: 0, femalePercent: 0 },
        usersByCountry: {},
        topCountries: [],
        ageDistribution: {},
      };
    }

    //* Total users
    const totalUsers = users.length;

    //* Age calculations
    const ages = users.map((u: User) => u.dob.age).sort((a: number, b: number) => a - b);
    const avgAge = Math.round(ages.reduce((a: number, b: number) => a + b, 0) / ages.length);
    const medianAge = ages[Math.floor(ages.length / 2)];
    const oldestAge = Math.max(...ages);
    const youngestAge = Math.min(...ages);

    //* Gender breakdown
    const genderBreakdown = users.reduce(
      (acc: any, user: User) => {
        if (user.gender === "male") acc.male += 1;
        else acc.female += 1;
        return acc;
      },
      { male: 0, female: 0 }
    );

    //* Gender breakdown percentage
    const malePercent = Math.round((genderBreakdown.male / totalUsers) * 100);
    const femalePercent = Math.round((genderBreakdown.female / totalUsers) * 100);

    //* Users by country
    const usersByCountry = users.reduce((acc: any, user: User) => {
      const country = user.location.country;
      acc[country] = (acc[country] || 0) + 1;
      return acc;
    }, {});

    //* Top 10 countries
    const topCountries = Object.entries(usersByCountry)
      .map(([country, count]: any) => ({ country, count }))
      .sort((a: any, b: any) => b.count - a.count)
      .slice(0, 10);

    //* Age distribution by decade
    const ageDistribution = users.reduce((acc: any, user: User) => {
      const decade = Math.floor(user.dob.age / 10) * 10;
      const label = `${decade}s`;
      acc[label] = (acc[label] || 0) + 1;
      return acc;
    }, {});

    return {
      totalUsers,
      avgAge,
      medianAge,
      oldestAge,
      youngestAge,
      genderBreakdown: {
        ...genderBreakdown,
        malePercent,
        femalePercent,
      },
      usersByCountry,
      topCountries,
      ageDistribution,
    };

  }, [users]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header titleColor='#1A2E46' />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* Overview Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📊 Overview</Text>
          <View style={styles.statsGrid}>
            <StatCard
              icon="👥"
              label="Total Users"
              value={analytics.totalUsers.toString()}
            />
            <StatCard
              icon="🌍"
              label="Countries"
              value={Object.keys(analytics.usersByCountry).length.toString()}
            />
          </View>
        </View>

        {/* Age Statistics Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎂 Age Statistics</Text>
          <View style={styles.statsGrid}>
            <StatCard
              icon="📈"
              label="Average Age"
              value={`${analytics.avgAge} yrs`}
            />
            <StatCard
              icon="📊"
              label="Median Age"
              value={`${analytics.medianAge} yrs`}
            />
          </View>

          <View style={[styles.statsGrid, { marginTop: 12 }]}>
            <StatCard
              icon="👴"
              label="Oldest User"
              value={`${analytics.oldestAge} yrs`}
            />
            <StatCard
              icon="👶"
              label="Youngest User"
              value={`${analytics.youngestAge} yrs`}
            />
          </View>
        </View>

        {/* Gender Breakdown Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚡ Gender Breakdown</Text>
          <View style={styles.genderContainer}>
            <GenderBar
              gender="Male"
              count={analytics.genderBreakdown.male}
              percent={analytics.genderBreakdown.malePercent}
              color="#3B82F6"
            />
            <GenderBar
              gender="Female"
              count={analytics.genderBreakdown.female}
              percent={analytics.genderBreakdown.femalePercent}
              color="#EC4899"
            />
          </View>
        </View>

        {/* Age Distribution Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📈 Age Distribution</Text>
          {Object.entries(analytics.ageDistribution)
            .sort()
            .map(([decade, count]: any) => (
              <AgeDistributionBar
                key={decade}
                decade={decade}
                count={count}
                maxCount={Math.max(
                  ...Object.values(analytics.ageDistribution) as number[]
                )}
              />
            ))}
        </View>

        {/* Top 10 Countries Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🌏 Top 10 Countries</Text>
          {analytics.topCountries.map((item: any, index: number) => (
            <CountryListItem
              key={item.country}
              rank={index + 1}
              country={item.country}
              count={item.count}
              percentage={Math.round(
                (item.count / analytics.totalUsers) * 100
              )}
            />
          ))}
        </View>

        {/* Key Insights Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💡 Key Insights</Text>
          <InsightCard
            text={`Average user age is ${analytics.avgAge} years old`}
          />
          <InsightCard
            text={`${analytics.genderBreakdown.malePercent}% Male, ${analytics.genderBreakdown.femalePercent}% Female`}
          />
          <InsightCard
            text={`Users span from ${analytics.youngestAge} to ${analytics.oldestAge} years old`}
          />
          <InsightCard
            text={`Users from ${Object.keys(analytics.usersByCountry).length} different countries`}
          />
          <InsightCard
            text={`${analytics.topCountries[0]?.country} has the most users (${analytics.topCountries[0]?.count})`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AnalyticsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A2E46",
    marginBottom: 12,
  },
  statsGrid: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-between",
  },
  genderContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
})
