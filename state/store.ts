import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import favoritesReducer from "./favoritesSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
