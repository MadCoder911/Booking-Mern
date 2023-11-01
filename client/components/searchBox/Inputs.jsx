import { store } from "../../store";
import Datee2 from "./Datee2";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  handleChange,
  handlePersons,
  handleSearchResults,
} from "../../features/search/searchSlice";
const Inputs = ({
  openDate,
  setOpenDate,
  date,
  setDate,
  openOptions,
  setOpenOptions,
}) => {
  const dispatch = useDispatch();
  const { city, dates, persons } = useSelector((store) => store.search);
  const handleInput = (item, value) => {
    dispatch(handleChange({ item: item, value: value }));
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    let raw = await fetch(`${process.env.API_URL}/hotels?city=${city}`);
    let data = await raw.json();
    dispatch(handleSearchResults({ searchResults: data }));
  };
  return (
    <form onSubmit={handleSearch} className="text-black">
      <p className="mb-4 font-bold text-[25px] text-gray-700">Search</p>
      <div className="row mb-3">
        <p className="text-[14px]">Destination</p>
        <input
          value={city}
          onChange={(e) => handleInput("city", e.target.value)}
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
          value={persons.adult}
          onChange={(e) =>
            dispatch(handlePersons({ target: "adult", value: e.target.value }))
          }
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
          value={persons.children}
          onChange={(e) =>
            dispatch(
              handlePersons({ target: "children", value: e.target.value })
            )
          }
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
          value={persons.room}
          onChange={(e) =>
            dispatch(handlePersons({ target: "room", value: e.target.value }))
          }
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
  );
};
export default Inputs;
