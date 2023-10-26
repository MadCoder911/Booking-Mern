"use client";
import Box from "./Box";
import { useState } from "react";
import Datee2 from "./Datee2";
import { store } from "../../store";

import { Provider, useDispatch, useSelector } from "react-redux";
import Inputs from "./Inputs";
const SearchBox = () => {
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
      <div className="w-[100%] min-h-[100vh] container mt-3 flex relative justify-between overflow-hidden">
        <div className=" bg-yellow-400  rounded-md max-w-[25%]  h-fit top-[20px] flex flex-row justify-center p-3 sticky">
          <Inputs
            openDate={openDate}
            setOpenDate={setOpenDate}
            date={date}
            setDate={setDate}
            openOptions={openOptions}
            setOpenOptions={setOpenOptions}
          />
        </div>
        <Box />
      </div>
    </Provider>
  );
};
export default SearchBox;
