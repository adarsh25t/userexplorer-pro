# 📘 UserExplorer Pro — React Native + Expo App 👋

UserExplorer Pro is a high-performance, offline-first, analytics-driven mobile application built using Expo (React Native) and Redux Toolkit.
It efficiently renders 1000+ users, performs heavy analytics, supports real-time search, multi-filtering, favorites, and achieves smooth performance even on low-end devices.



🚀 Live Preview (Expo)
https://expo.dev/…

------------------------------------------------
🧱 Tech Stack

* Expo + React Native
* Redux Toolkit (global state)
* expo-router (file-based navigation)
* AsyncStorage (offline caching)
* FlatList optimized rendering
* Memoized components + selectors
* TypeScript
---------------------------------------------------

📁 Project Structure
```app/
  _layout.tsx
  (tabs)/
    _layout.tsx
    index.tsx          → Users screen
    AnalyticsScreen.tsx
    FavoritesScreen.tsx
  Notifications.tsx

src/
  components/
    AgeDistributionBar.tsx
    BackButton.tsx
    CountryListItem.tsx
    ErrorView.tsx
    FilterBar.tsx
    FilterButton.tsx
    GenderBar.tsx
    Header.tsx
    InsightCard.tsx
    LoadingIndicator.tsx
    SearchBar.tsx
    SelectionModal.tsx
    StatCard.tsx
    UserCard.tsx

  hooks/
    useAnalytics.tsx
    useFilters.tsx

  state/
    store.ts
    usersSlice.ts
    filtersSlice.ts
    favoritesSlice.ts
    hooks.ts

  services/
    analytics.ts
    cache.ts
    api.ts

  utils/
    type.ts
```

------------------------------------------------------

🧩 Features Implemented
✔ High-Performance User List

Handles 1000+ users from API

Optimized FlatList (batching, clipping, window size)

Memoized UserCard

Pull-to-refresh

Smooth scrolling on low-end devices

✔ Offline-First Architecture

Loads cached data instantly

Fetches fresh data in background

Merges intelligently (deduped by UUID)

Zero visible delay after first run

✔ Real-Time Search + Multi-Filters

Search by first name, last name, and email

Filter by gender (male/female)

Filter by country (generated dynamically)

Instant updates with zero UI stutter

Memoized filtered list

✔ Favorites System

Add/remove favorites globally

Favorites screen with count

Cached and persistent

✔ Full Analytics Dashboard

Total users

Countries count

Average age

Median age

Oldest & youngest

Gender breakdown (count + percent)

Age distribution by decade

Top 10 countries

Insight cards

✔ Smooth Navigation

Bottom tabs (Home, Analytics, Favorites)

Stack navigation for additional screens

✔ Clean & Modern UI

Professional color theme

Rounded cards

Shadows & spacing

Reusable components

✔ Error Handling

Graceful error state

Retry button

Auto-cancels pending requests with AbortController
