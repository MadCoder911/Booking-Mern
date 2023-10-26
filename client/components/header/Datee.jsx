"use client";
import { FaBed, FaCalendar } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Input from "./Input";
import { store } from "../../store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { handleDates } from "../../features/search/searchSlice";
const Datee = ({ openDate, setOpenDate, openOptions, setOpenOptions }) => {
  const { dates } = useSelector((store) => store.search);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    const startDate = format(date[0].startDate, "MM/dd/yyyy");
    const endDate = format(date[0].endDate, "MM/dd/yyyy");
    dispatch(handleDates({ startDate: startDate, endDate: endDate }));
  }, [date]);
  useEffect(() => {
    const startDate = format(date[0].startDate, "MM/dd/yyyy");
    const endDate = format(date[0].endDate, "MM/dd/yyyy");
    dispatch(handleDates({ startDate: startDate, endDate: endDate }));
  }, []);
  return (
    <Provider store={store}>
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
          {`${dates[0].startDate} to  ${dates[0].endDate}`}
        </span>

        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
          className={`absolute lg:top-[55px] top-[109px] lg:z-0 z-999999 ease-in-out   ${
            !openDate ? "left-[1000px]" : " left-[0px] lg:left-[-35px]"
          } transition-all ease-in-out  `}
        />
      </div>
    </Provider>
  );
};
export default Datee;
