"use client";
import Box from "./Box";
import { useState } from "react";
import Datee2 from "./Datee2";
import { store } from "../../store";

import { Provider, useDispatch, useSelector } from "react-redux";
import Inputs from "./Inputs";
const SearchBox = ({ search }) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <Provider store={store}>
      <div className="w-[100%] min-h-[100vh] container mt-3 lg:flex relative justify-center   overflow-hidden ">
        <div className="  bg-yellow-400  rounded-md lg:max-w-[25%]  h-fit  flex  justify-center p-3 mb-[50px] lg:mb-0">
          <Inputs
            openDate={openDate}
            setOpenDate={setOpenDate}
            date={date}
            setDate={setDate}
            openOptions={openOptions}
            setOpenOptions={setOpenOptions}
          />
        </div>
        <Box search={search} />
      </div>
    </Provider>
  );
};
export default SearchBox;
