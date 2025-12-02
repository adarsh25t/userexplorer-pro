import { User, UsersState } from "@/utils/type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsersAPI } from "../services/api";
import { loadUsersFromCache, saveUsersToCache } from "../services/cache";



export const loadCache = createAsyncThunk<User[], void, { rejectValue: string }>(
  "users/loadCache",
  async (_, { rejectWithValue }) => {
    try {
      const data = await loadUsersFromCache();
      return data || [];
    } catch (error) {
      return rejectWithValue("Cache load failed");
    }
  }
);

export const fetchUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>(
  "users/fetch",
  async (_, { rejectWithValue }) => {
    const abortController = new AbortController();
    try {
      const users = await fetchUsersAPI(abortController.signal);
      await saveUsersToCache(users);
      return users;
    } catch (error: any) {
      if (error.name === "AbortError") return rejectWithValue("Request cancelled");
      return rejectWithValue(error instanceof Error ? error.message : "Fetch failed");
    }
  }
);

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
  cacheLoaded: false,
  lastUpdated: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCache.fulfilled, (state, action) => {
        state.data = action.payload;
        state.cacheLoaded = true;
        state.error = null;
      })
      .addCase(loadCache.rejected, (state, action) => {
        state.cacheLoaded = true;
        state.error = action.payload || null;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
        state.lastUpdated = Date.now();
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || null;
      });
  },
});

export const { clearError } = usersSlice.actions;
export default usersSlice.reducer;
