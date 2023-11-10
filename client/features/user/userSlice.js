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
    setUser: (state, { payload }) => {
      console.log(payload);
      state.user = payload.user;
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
