"use client";
import { useState, useEffect } from "react";
import Input from "./Input";
import Link from "next/link";
import Datee from "./Datee";
import Persons from "./Persons";
import { store } from "../../store";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  handleChange,
  handlePersons,
  handleSearchResults,
} from "../../features/search/searchSlice";
const SearchBar = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const { city, dates, persons } = useSelector((store) => store.search);

  const handleOption = (property, operation) => {
    let newProp = persons[property];

    if (operation === "i") {
      dispatch(handlePersons({ target: property, value: newProp + 1 }));
    } else if (operation === "d" && newProp !== 0) {
      return dispatch(handlePersons({ target: property, value: newProp - 1 }));
    }
  };

  const dispatch = useDispatch();
  const handleInput = (item, value) => {
    dispatch(handleChange({ item: item, value: value }));
  };
  const handleSearch = async () => {
    const res = await fetch(`${process.env.API_URL}/hotels?city=${city}`);
    const data = await res.json();
    return dispatch(handleSearchResults({ searchResults: data }));
  };
  return (
    <Provider store={store}>
      <div className="py-[20px] container w-[100%]  flex lg:flex-row flex-col items-center justify-around px-[2px]  rounded-md absolute bottom-[-140px] lg:bottom-[-25px] bg-[#febb02]  lg:h-[60px] h-[222px] ">
        <Input city={city} handleInput={handleInput} />
        <Datee
          openDate={openDate}
          setOpenDate={setOpenDate}
          openOptions={openOptions}
          setOpenOptions={setOpenOptions}
        />
        <Persons
          openDate={openDate}
          setOpenDate={setOpenDate}
          openOptions={openOptions}
          setOpenOptions={setOpenOptions}
          options={persons}
          setOptions={setOptions}
          handleOption={handleOption}
        />
        <div className="w-[100%] lg:w-fit">
          <Link
            href={`/hotels/${city}`}
            className="    text-white no-underline px-[10px]  font-light flex items-center  h-[50px] m-[3px] lg:m-0  bg-[#0071c2]  rounded-md hover:scale-[101%] transition-all w-[99%]  lg:w-auto cursor-pointer justify-center hover:bg-[#1b90e3]"
          >
            Search
          </Link>
        </div>
      </div>
    </Provider>
  );
};
export default SearchBar;
