"use client";

import Login from "@/components/login/login";

import { Provider } from "react-redux";
import { store } from "../../store";
const page = () => {
  return (
    <Provider store={store}>
      <Login />;
    </Provider>
  );
};
export default page;
