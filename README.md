# 📘 UserExplorer Pro — React Native + Expo App 👋

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

🧠 Architecture Decision Summary
✔ Expo Router for Navigation

Simple file-based navigation, modern Expo standard.

✔ Redux Toolkit

* Stable global state
* Selectors prevent unnecessary re-renders
* Clean slices (users, filters, favorites)

✔ Data Flow

```
loadCache() → read cached users
fetchUsers() → fetch new users
```
