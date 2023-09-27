"use client";
import { FaBed, FaCalendar } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
const SearchBar = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (target: string, operation: string) => {
    const value = options[target];
    if (value === 0 && operation === "d") {
      return;
    }
    let newVal = operation === "i" ? value + 1 : value - 1;

    setOptions({ ...options, [target]: newVal });
    console.log(options);
  };
  return (
    <div className="py-[20px] container w-[100%] h-[30px] bg-white border-[3px] border-solid border-[#febb02] flex items-center justify-around rounded-md absolute bottom-[-25px]">
      <div className="headerSearchiTEM flex items-center gap-[10px]">
        <FaBed className="text-gray-300 text-[20px]" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="headerSearchInput outline-none text-gray-300"
        />
      </div>
      <div className="relative flex items-center gap-[10px] cursor-pointer">
        <FaCalendar className="text-gray-300" />
        <span
          className="headersearchText text-gray-300 cursor-pointer"
          onClick={() => {
            if (openDate === true) {
              setOpenDate(false);
              setOpenOptions(false);
            } else {
              setOpenDate(true);
              setOpenOptions(false);
            }
          }}
        >
          {`${format(date[0].startDate, "MM/dd/yyyy")} to  ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </span>

        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className={`absolute top-[32px] ${
            !openDate ? "opacity-0" : "opacity-1"
          } transition-all`}
        />
      </div>
      <div className="headerSearchiTEM flex items-center gap-[10px]">
        <BsPerson className="text-gray-300 text-[20px]" />
        <span
          onClick={() => {
            if (openOptions === true) {
              setOpenOptions(false);
              setOpenDate(false);
            } else {
              setOpenOptions(true);
              setOpenDate(false);
            }
          }}
          className="headersearchText text-gray-300 cursor-pointer"
        >
          {`${options.adult} adult, ${options.children} children, ${options.room} room`}
        </span>
        <div
          className={` options absolute top-[50px] bg-white transition-all text-gray-300 rounded-md shadow-lg ${
            openOptions ? "opacity-1" : "opacity-0"
          }`}
        >
          <div className="optionsItem w-[200px] flex justify-between m-[10px]">
            <span className="optionText">Adult</span>
            <div className="optionCounter flex items-center gap-[10px] text-black">
              <button
                className="optionCounterBtn w-[30px] border-[1px] border-[#0071c2] rounded-md cursor-pointer"
                onClick={() => handleOption("adult", "d")}
              >
                -
              </button>
              <span className="optionsCounterNumber">{options.adult}</span>
              <button
                className="optionCounterBtn w-[30px] border-[1px] border-[#0071c2] rounded-md cursor-pointer"
                onClick={() => handleOption("adult", "i")}
              >
                +
              </button>
            </div>
          </div>
          <div className="optionsItem w-[200px] flex justify-between m-[10px]">
            <span className="optionText">Children</span>
            <div className="optionCounter flex items-center gap-[10px] text-black">
              <button
                className="optionCounterBtn w-[30px] border-[1px] border-[#0071c2] rounded-md cursor-pointer"
                onClick={() => handleOption("children", "d")}
              >
                -
              </button>
              <span className="optionsCounterNumber">{options.children}</span>
              <button
                className="optionCounterBtn w-[30px] border-[1px] border-[#0071c2] rounded-md cursor-pointer"
                onClick={() => handleOption("children", "i")}
              >
                +
              </button>
            </div>
          </div>
          <div className="optionsItem w-[200px] flex justify-between m-[10px]">
            <span className="optionText">Room</span>
            <div className="optionCounter flex items-center gap-[10px] text-black">
              <button
                className="optionCounterBtn w-[30px] border-[1px] border-[#0071c2] rounded-md cursor-pointer"
                onClick={() => handleOption("room", "d")}
              >
                -
              </button>
              <span className="optionsCounterNumber">{options.room}</span>
              <button
                className="optionCounterBtn w-[30px] border-[1px] border-[#0071c2] rounded-md cursor-pointer"
                onClick={() => handleOption("room", "i")}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="headerSearchiTEM flex items-center gap-[10px]">
        <button className="hover:bg-[#1b90e3] hover:scale-[110%] transition-all rounded-md bg-[#0071c2] px-[10px] py-[5px] font-light cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
