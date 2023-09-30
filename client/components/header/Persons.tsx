//Imports
import { BsPerson } from "react-icons/bs";
//Types
type Props = {
  setOpenDate: (args: boolean) => {};
  openOptions: boolean;
  setOpenOptions: (arg: boolean) => {};
  options: { adult: number; children: number; room: number };
  handleOption: (adult: string, arg: string) => {};
};
//
const Persons = ({
  setOpenDate,
  openOptions,
  setOpenOptions,
  options,
  handleOption,
}: Props) => {
  return (
    <div className="headerSearchiTEM flex items-center gap-[10px] relative bg-white h-[50px] p-[20px] rounded-md lg:rounded-md lg:w-auto w-[99%] m-[2px] lg:m-0">
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
        className="headersearchText text-gray-300 cursor-pointer text-sm "
      >
        {`${options.adult} adult, ${options.children} children, ${options.room} room`}
      </span>
      <div
        className={` options absolute top-[55px] w-[100%] left-0 bg-white transition-all text-gray-300 rounded-md shadow-lg  ${
          openOptions ? "" : "hidden"
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
  );
};
export default Persons;
