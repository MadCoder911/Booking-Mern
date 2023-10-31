import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  city: "",
  dates: [
    {
      startDate: new Date(),
      endDate: new Date(),
    },
  ],
  persons: {
    adult: 0,
    children: 0,
    room: 0,
  },
  minPrice: 0,
  maxPrice: 9999,
  searchResults: "",
  isLoading: true,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const city = payload.item;
      state.city = payload.value;
    },
    handleDates: (state, { payload }) => {
      state.dates[0].startDate = payload.startDate;
      state.dates[0].endDate = payload.endDate;
    },
    handlePersons: (state, { payload }) => {
      state.persons[payload.target] = payload.value;
    },
    handleSearchResults: (state, { payload }) => {
      state.searchResults = payload.searchResults;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(handleSearch.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(handleSearch.fulfilled, (state, { payload }) => {
  //       state.isLoading = false;
  //       state.searchResults = payload;
  //     });
  // },
});

export default searchSlice.reducer;
export const { handleChange, handleDates, handlePersons, handleSearchResults } =
  searchSlice.actions;
