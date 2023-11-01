"use client";
import { FaBed, FaCalendar } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { store } from "../../store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { handleDates } from "../../features/search/searchSlice";
const Datee = ({ openDate, setOpenDate, openOptions, setOpenOptions }) => {
  const { dates } = useSelector((store) => store.search);
  const [date, setDate] = useState([
    {
      startDate: dates[0].startDate,
      endDate: dates[0].endDate,
      key: "selection",
    },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    const startDate = date[0].startDate;
    const endDate = date[0].endDate;
    dispatch(handleDates({ startDate: startDate, endDate: endDate }));
  }, [date]);

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
        {`${format(dates[0].startDate, "MM/dd/yyyy")} to  ${format(
          dates[0].endDate,
          "MM/dd/yyyy"
        )} `}
      </span>

      <div
        className={` absolute lg:top-[55px]  top-[50px]  ease-in-out z-50   ${
          !openDate ? "left-[-1000px]" : " left-[-7px] lg:left-[0px]"
        } transition-all ease-in-out duration-[650ms]`}
      >
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
        />
      </div>
    </div>
  );
};
export default Datee;
