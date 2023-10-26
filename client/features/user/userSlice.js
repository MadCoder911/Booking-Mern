import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //   handleChange: (state, { payload }) => {
    //     state[payload.name] = payload.value;
    //   },
  },
});

export default userSlice.reducer;
