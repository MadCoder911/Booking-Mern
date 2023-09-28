"use client";
import { FaBed, FaCalendar } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Input from "./Input";
const Datee = ({ openDate, setOpenDate, openOptions, setOpenOptions }) => {
  console.log("DATE", openDate);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="relative flex  items-center gap-[10px] cursor-pointer  lg:w-auto w-[99%]   bg-white h-[50px] p-[20px] rounded-md lg:rounded-lg m-[2px] lg:m-0">
      <FaCalendar className="text-gray-300" />
      <span
        className="headersearchText text-gray-300 cursor-pointer text-sm"
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
        onChange={(item: any) => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        className={`absolute top-[55px] ease-in-out   ${
          !openDate ? "left-[1000px]" : " left-[-35px]"
        } transition-all ease-in-out  `}
      />
    </div>
  );
};
export default Datee;
