"use client";
import Link from "next/link";
import NavBtns from "./NavBtns";
import { Provider } from "react-redux";
import { store } from "../../store";
const Navbar = () => {
  return (
    <div className="h-[85px] bg-[#003580] flex justify-center ">
      <div className="w-[100%] container text-white flex items-center justify-between ">
        <Link href="/" className="font-medium text-2xl text-white no-underline">
          {" "}
          <span>Booking</span>
        </Link>
        <Provider store={store}>
          <div>
            <NavBtns />
          </div>
        </Provider>
      </div>
    </div>
  );
};
export default Navbar;
