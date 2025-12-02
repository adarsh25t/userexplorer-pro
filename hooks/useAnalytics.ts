
import { User } from "@/utils/type";
import { useMemo } from "react";
import { useSelector } from "react-redux";

interface Analytics {
  usersByCountry: Record<string, number>;
  avgAge: number;
  medianAge: number;
  genderBreakdown: Record<string, number>;
  ageStats: { oldest: number; youngest: number };
}

export const useAnalytics = (): Analytics => {
  const users = useSelector((state: { users: { data: User[] } }) => state.users.data);

  return useMemo(() => {
    if (!users.length) {
      return {
        usersByCountry: {},
        avgAge: 0,
        medianAge: 0,
        genderBreakdown: {},
        ageStats: { oldest: 0, youngest: 0 },
      };
    }

    // Users by country
    const usersByCountry = users.reduce((acc, user: User) => {
      const country = user.location.country;
      acc[country] = (acc[country] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Gender breakdown
    const genderBreakdown = users.reduce((acc, user: User) => {
      acc[user.gender] = (acc[user.gender] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Age calculations
    const ages = users.map((u: User) => u.dob.age).sort((a, b) => a - b);
    const avgAge = Math.round(ages.reduce((a, b) => a + b, 0) / ages.length);
    const medianAge = ages[Math.floor(ages.length / 2)];
    const oldest = Math.max(...ages);
    const youngest = Math.min(...ages);

    return {
      usersByCountry,
      avgAge,
      medianAge,
      genderBreakdown,
      ageStats: { oldest, youngest },
    };
  }, [users]); // Only recalculates when users change
};
