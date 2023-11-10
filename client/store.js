import { configureStore } from "@reduxjs/toolkit";

import searchSlice from "./features/search/searchSlice";
import userSlice from "./features/user/userSlice";
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          "handleChange",
          "handlePersons",
          "handleDates",
          "handleSearchResults",
        ],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["meta.arg", "payload.date"],
        // Ignore these paths in the state
        ignoredPaths: ["payload.startDate"],
      },
    }),
  reducer: {
    search: searchSlice,
    user: userSlice,
  },
});
