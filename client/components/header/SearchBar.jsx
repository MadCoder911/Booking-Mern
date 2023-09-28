"use client";
import { FaBed, FaCalendar } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Input from "./Input";
import Datee from "./Datee";
import Persons from "./Persons";
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
  const handleOption = (property, operation) => {
    const value = options[property];
    if (value === 0 && operation === "d") {
      return;
    }
    let newVal = operation === "i" ? value + 1 : value - 1;

    setOptions({ ...options, [property]: newVal });
    console.log(options);
  };
  // border-[#febb02]
  // border-[3px] border-solid bg-white

  return (
    <div className="py-[20px] container w-[100%] h-[30px] flex lg:flex-row flex-col items-center justify-around px-[2px]  rounded-md absolute bottom-[-140px] lg:bottom-[-25px] bg-[#febb02]  lg:h-[60px] h-[209px] ">
      <Input />
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
        options={options}
        setOptions={setOptions}
        handleOption={handleOption}
      />
      <div className="headerSearchiTEM flex items-center gap-[10px] h-[50px] m-[3px] lg:m-0  bg-[#0071c2]  rounded-md hover:scale-[101%] transition-all w-[99%]  lg:w-auto cursor-pointer justify-center hover:bg-[#1b90e3]">
        <button className="   rounded-md  px-[10px] py-[7px] font-light   ">
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
