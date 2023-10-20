"use client";
import { FaBed, FaCalendar } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Datee = ({ openDate, setOpenDate, openOptions, setOpenOptions }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="relative flex  items-center  cursor-pointer  text-[15px]  bg-white py-[13px] px-[6px]   ">
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
        onChange={(item) => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        className={`absolute lg:top-[55px] top-[109px] lg:z-0 z-999999 ease-in-out   ${
          !openDate ? "left-[3000px]" : " left-[0px] lg:left-[0px]"
        } transition-all ease-in-out  `}
      />
    </div>
  );
};
export default Datee;
