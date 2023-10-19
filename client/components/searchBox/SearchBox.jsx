"use client";
import Box from "./Box";
import { useState } from "react";
import Datee2 from "./Datee2";
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
    <div className="w-[100%] container mt-3 flex relative justify-between overflow-hidden">
      <div className=" bg-yellow-400  rounded-md max-w-[25%]  h-fit top-[20px] flex flex-row justify-center p-3 sticky">
        <form action="">
          <p className="mb-4 font-bold text-[25px] text-gray-700">Search</p>
          <div className="row mb-3">
            <p className="text-[14px]">Destination</p>
            <input
              type="text"
              placeholder="Destination"
              className="w-[100%] py-[10px] px-[6px]"
            />
          </div>
          {/*  */}
          {/*  */}
          <div className="row mb-3">
            <p className="text-[14px]">Check-in Date</p>
            <div className="x">
              {" "}
              <Datee2
                openDate={openDate}
                setOpenDate={setOpenDate}
                openOptions={openOptions}
                setOpenOptions={setOpenOptions}
              />
            </div>
          </div>
          <p className="text-[14px]">Options</p>
          <div className="row flex text-[16px] my-3  justify-between">
            <p className="ml-3 text-[14px] ">Min price per night</p>
            <input
              type="number"
              name=""
              id=""
              className="w-[25%] px-[2px] text-black border-black border-solid border-[1px] placeholder-black"
              placeholder="2"
            />
          </div>
          <div className="row flex text-[16px] my-3  justify-between">
            <p className="ml-3 text-[14px] ">Max price per night</p>
            <input
              type="number"
              name=""
              id=""
              className="w-[25%] px-[2px] text-black border-black border-solid border-[1px] placeholder-black"
              placeholder="0"
            />
          </div>
          <div className="row flex text-[16px]  my-3 justify-between">
            <p className="ml-3 text-[14px]">Adult</p>
            <input
              type="number"
              name=""
              id=""
              className="w-[25%] px-[2px] text-black border-black border-solid border-[1px] placeholder-black"
              placeholder="1"
            />
          </div>
          <div className="row flex text-[16px] my-3  justify-between">
            <p className="ml-3 text-[14px]">Children</p>
            <input
              type="number"
              name=""
              id=""
              className="w-[25%] px-[2px] text-black border-black border-solid border-[1px] placeholder-black"
              placeholder="2"
            />
          </div>
          <div className="row flex text-[16px] my-3  justify-between">
            <p className="ml-3 text-[14px]">Room</p>
            <input
              type="number"
              name=""
              id=""
              className="w-[25%] px-[2px] text-black border-black border-solid border-[1px] placeholder-black"
              placeholder="0"
            />
          </div>
          <button className="w-[100%] px-6 py-2 bg-[#0071c2] text-white hover:bg-[#174a6f]">
            Search
          </button>
        </form>
      </div>
      <Box />
    </div>
  );
};
export default SearchBox;
