import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "",
  dates: [
    {
      startDate: "",
      endDate: "",
    },
  ],
  persons: {
    adult: 0,
    children: 0,
    room: 0,
  },
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
  },
});

export default searchSlice.reducer;
export const { handleChange, handleDates, handlePersons } = searchSlice.actions;
