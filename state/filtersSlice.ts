import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  search: string;
  country: string;
  gender: string;
}

const initialState: FiltersState = {
  search: "",
  country: "All",
  gender: "All",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    resetFilters: (state) => {
      state.search = "";
      state.country = "All";
      state.gender = "All";
    },
  },
});

export const { setSearch, setCountry, setGender, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
