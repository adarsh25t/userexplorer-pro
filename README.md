# 📘 UserExplorer Pro — React Native + Expo App 👋

UserExplorer Pro is a high-performance, offline-first, analytics-driven mobile application built using Expo (React Native) and Redux Toolkit.
It efficiently renders 1000+ users, performs heavy analytics, supports real-time search, multi-filtering, favorites, and achieves smooth performance even on low-end devices.

<img width="285" height="832" alt="Screenshot 2025-12-02 233707" src="https://github.com/user-attachments/assets/93ad3409-b62c-4c16-abf1-0208aa44b28c" />

<img width="276" height="820" alt="Screenshot 2025-12-02 233806" src="https://github.com/user-attachments/assets/2593d171-9e56-4810-8373-6b0c00564994" />

<img width="287" height="830" alt="Screenshot 2025-12-02 233828" src="https://github.com/user-attachments/assets/304ca174-78d0-47f1-91a7-8d88827ed381" />

<img width="285" height="826" alt="Screenshot 2025-12-02 233844" src="https://github.com/user-attachments/assets/73652cf3-06a9-401f-95fc-e6be487312f8" />

<img width="285" height="826" alt="Screenshot 2025-12-02 234045" src="https://github.com/user-attachments/assets/2c367325-976c-4afe-91d5-3e42679f6065" />

<img width="282" height="812" alt="Screenshot 2025-12-02 234035" src="https://github.com/user-attachments/assets/660f8a2d-fabe-4e1b-a7a5-e66f339ed23b" />


🚀 Live Preview (Expo)
(https://expo.dev/artifacts/eas/wduWgjMmfqAE78CaLQoxsm.aab)
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

✨ Key Features
1️⃣ High-Performance User List

✅ Renders 1000+ users smoothly
✅ Optimized FlatList with smart batching
✅ Memoized UserCard components (prevent re-renders)
✅ Pull-to-refresh functionality
✅ Works seamlessly on low-end Android devices
How?
```
- maxToRenderPerBatch={20} → Render in chunks
- updateCellsBatchingPeriod={50} → Batch updates
- initialNumToRender={20} → Load only visible items
- removeClippedSubviews={true} → Clean up off-screen views
```

 Offline-First Architecture

✅ Instant load from cached data
✅ Silent background sync when online
✅ Intelligent UUID-based deduplication
✅ Zero visible delay after first run

Flow:
```
App Launch
  ├─ Load cache (instant)
  └─ Fetch fresh data (background)
  
On Update:
  ├─ Merge by UUID (avoid duplicates)
  └─ Update cache & state
```

3️⃣ Real-Time Search + Multi-Filters

✅ Search by first name, last name, email
✅ Filter by gender (male/female)
✅ Filter by country (dynamic list)
✅ Debounced search (300ms) for responsive UI
✅ Memoized filtering (only recalc when inputs change)

Performance:
```
User typing "john" → Search input updates instantly
                  ↓ (300ms delay)
                  ↓ Filtering runs
                  ↓ FlatList updates with filtered results
```

4️⃣ Favorites System

✅ Add/remove favorites globally
✅ Dedicated Favorites screen with count
✅ Persistent storage (survives app restart)
✅ Heart icon indication

5️⃣ Analytics Dashboard
Comprehensive statistics on 1000 users:
MetricExampleTotal Users1000Countries150+Avg Age35 yearsMedian Age34 yearsAge Range18 - 75 yearsGender Split52% M / 48% FAge DistributionGraph by decadeTop CountriesRanked list

6️⃣ Clean & Modern UI

✅ Professional color scheme (#1A2E46, #F7F9FC)
✅ Rounded corners & shadows
✅ Responsive spacing
✅ Smooth animations
✅ Dark-mode ready

7️⃣ Error Handling & Resilience

✅ Graceful error states
✅ One-tap retry button
✅ Auto-cancels pending requests (AbortController)
✅ Network error recovery

--------------------------------------------------------------------------------------------
