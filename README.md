# 📘 UserExplorer Pro — React Native + Expo App 👋

UserExplorer Pro is a high-performance, offline-first, analytics-driven mobile application built using Expo (React Native) and Redux Toolkit.
It efficiently renders 1000+ users, performs heavy analytics, supports real-time search, multi-filtering, favorites, and achieves smooth performance even on low-end devices.

<img width="285" height="832" alt="Screenshot 2025-12-02 233707" src="https://github.com/user-attachments/assets/93ad3409-b62c-4c16-abf1-0208aa44b28c" />

<img width="276" height="820" alt="Screenshot 2025-12-02 233806" src="https://github.com/user-attachments/assets/2593d171-9e56-4810-8373-6b0c00564994" />

<img width="287" height="830" alt="Screenshot 2025-12-02 233828" src="https://github.com/user-attachments/assets/304ca174-78d0-47f1-91a7-8d88827ed381" />

<img width="285" height="826" alt="Screenshot 2025-12-02 233844" src="https://github.com/user-attachments/assets/73652cf3-06a9-401f-95fc-e6be487312f8" />

<img width="757" height="826" alt="Screenshot 2025-12-02 234045" src="https://github.com/user-attachments/assets/6704ac4d-0a6c-499f-98ad-ddc391a92607" />

<img width="282" height="812" alt="Screenshot 2025-12-02 234035" src="https://github.com/user-attachments/assets/660f8a2d-fabe-4e1b-a7a5-e66f339ed23b" />


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

  * Loads cached data instantly
  * Fetches fresh data in background
  * Merges intelligently (deduped by UUID)
  * Zero visible delay after first run

✔ Real-Time Search + Multi-Filters

  * Search by first name, last name, and email
  * Filter by gender (male/female)
  * Filter by country (generated dynamically)
  * Instant updates with zero UI stutter
  * Memoized filtered list

✔ Favorites System

  * Add/remove favorites globally
  * Favorites screen with count
  * Cached and persistent

✔ Full Analytics Dashboard

  * Total users
  * Countries count
  * Average age
  * Median age
  * Oldest & youngest
  * Gender breakdown (count + percent)
  * Age distribution by decade
  * Top 10 countries
  * Insight cards

✔ Smooth Navigation

  * Bottom tabs (Home, Analytics, Favorites)
  * Stack navigation for additional screens

✔ Clean & Modern UI

  * Professional color theme
  * Rounded cards
  * Shadows & spacing
  * Reusable components

✔ Error Handling

  * Graceful error state
  * Retry button
  * Auto-cancels pending requests with AbortController

-------------------------------------------------------------

⚡ Performance Optimizations
🔹 FlatList Optimization
```
maxToRenderPerBatch={20}
updateCellsBatchingPeriod={50}
initialNumToRender={20}
removeClippedSubviews={true}
showsVerticalScrollIndicator={false}
```

🔹 Memoization

  * useMemo for filtered list
  * useMemo for analytics
  * React.memo(UserCard)
  * Cached selectors via Redux

🔹 Offline-First Strategy

  * Cached list loads instantly
  * API fetch updates silently
  * Merge strategy avoids full recomputation

🔹 Reduced Re-renders

  * Localized Redux selectors
  * Split state slices
  * Pure components

🔹 Request Cancellation

  * Used AbortController to avoid memory leaks and race conditions.

----------------------------------------------------------------------------

🧠 Architecture Decisions
✔ Redux Toolkit

  * Predictable global state
  * Immutable reducer logic
  * Memoized selectors
  * Easy slicing of users, filters, favorites

✔ expo-router

  * Minimal navigation setup
  * File-based routing (cleaner structure)
  * Perfect for multi-screen architecture

✔ Separation of Concerns

  * UI in components
  * Logic in hooks/services
  * State in Redux slices
  * Analytics in a separate memoized block

----------------------------------------------------------------------

📲 How to Run the Project
Install dependencies:
```
npm install
```

Start development server:
```
npx expo start
```

Build:
```
eas build -p android
eas build -p ios
```


👨‍💻 Author

Adarsh
Full Stack & Mobile Developer
React Native • Expo • TypeScript • Node.js • AWS
