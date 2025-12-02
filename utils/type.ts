export interface User {
  login: { uuid: string };
  name: { first: string; last: string };
  email: string;
  gender: "male" | "female";
  dob: { age: number; date: string };
  location: { country: string; city: string };
  picture: { medium: string; large: string };
}

export interface UsersState {
  data: User[];
  loading: boolean;
  error: string | null;
  cacheLoaded: boolean;
  lastUpdated: number | null;
}

export interface StatCardProps {
  icon: string;
  label: string;
  value: string;
}

export interface GenderBarProps {
  gender: string;
  count: number;
  percent: number;
  color: string;
}

export interface AgeDistributionBarProps {
  decade: string;
  count: number;
  maxCount: number;
}

export interface CountryListItemProps {
  rank: number;
  country: string;
  count: number;
  percentage: number;
}

export interface InsightCardProps {
  text: string;
}
