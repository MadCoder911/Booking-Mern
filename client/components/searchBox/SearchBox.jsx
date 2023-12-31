"use client";
import Box from "./Box";
import { useEffect, useState } from "react";
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
      <div className="  bg-yellow-500  rounded-md lg:max-w-[25%]  h-fit  flex  justify-center p-3 mb-[50px] lg:mb-0">
        <Inputs
          openDate={openDate}
          setOpenDate={setOpenDate}
          date={date}
          setDate={setDate}
          openOptions={openOptions}
          setOpenOptions={setOpenOptions}
        />
      </div>
      <Box params={search} />
    </Provider>
  );
};
export default SearchBox;
