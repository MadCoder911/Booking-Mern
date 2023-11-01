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
  minPrice: 1,
  maxPrice: 999,
  searchResults: "",
  isLoading: true,
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    handleChange: (state, { payload }) => {
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
    handlePrices: (state, { payload }) => {
      state.minPrice = payload.data.minPrice;
      state.maxPrice = payload.data.maxPrice;
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
export const {
  handleChange,
  handleDates,
  handlePersons,
  handleSearchResults,
  handlePrices,
} = searchSlice.actions;
