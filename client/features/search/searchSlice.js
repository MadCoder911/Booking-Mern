import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};
const searchSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    //   handleChange: (state, { payload }) => {
    //     state[payload.name] = payload.value;
    //   },
  },
});

export default searchSlice.reducer;
