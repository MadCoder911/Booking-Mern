import { store } from "../../store";
import Datee2 from "./Datee2";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  handleChange,
  handlePersons,
  handleSearchResults,
  handlePrices,
} from "../../features/search/searchSlice";
import Link from "next/link";
const Inputs = ({
  openDate,
  setOpenDate,
  date,
  setDate,
  openOptions,
  setOpenOptions,
}) => {
  const dispatch = useDispatch();
  const { city, dates, persons, minPrice, maxPrice } = useSelector(
    (store) => store.search
  );

  const handleInput = (item, value) => {
    dispatch(handleChange({ item: item, value: value }));
  };
  const handleSearch = (e) => {
    e.preventDefault();
  };
  const handleClick = async () => {
    const response = await fetch(`${process.env.API_URL}/hotels`);
    const data = await response.json();
    dispatch(handleSearchResults({ searchResults: data }));
  };
  return (
    <div onSubmit={handleSearch} className="text-black">
      <p className="mb-4 font-bold text-[25px] text-gray-700">Search</p>
      <div className="row mb-3">
        <p className="text-[14px]">Destination</p>
        <input
          value={city}
          id="city"
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
          value={minPrice}
          onChange={(e) =>
            dispatch(
              handlePrices({
                data: { minPrice: e.target.value, maxPrice: maxPrice },
              })
            )
          }
          type="number"
          name="minPrice"
          id="minPrice"
          className="w-[25%] px-[2px] text-black border-black border-solid border-[1px] placeholder-black"
          placeholder="0"
        />
      </div>
      <div className="row flex text-[16px] my-3  justify-between">
        <p className="ml-3 text-[14px] ">Max price per night</p>
        <input
          value={maxPrice}
          onChange={(e) =>
            dispatch(
              handlePrices({
                data: { minPrice: minPrice, maxPrice: e.target.value },
              })
            )
          }
          type="number"
          name="maxPrice"
          id="maxPrice"
          className="w-[25%] px-[2px] text-black border-black border-solid border-[1px] placeholder-black"
          placeholder="999"
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
          name="number"
          id="adults"
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
          name="children"
          id="children"
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
          name="rooms"
          id="rooms"
          className="w-[25%] px-[2px] text-black border-black border-solid border-[1px] placeholder-black"
          placeholder="0"
        />
      </div>
      <div className="div w-[100%] h-[50px] flex items-center justify-center">
        <Link
          onClick={async () => {}}
          className="w-[100%] bg-[#0071c2] text-white text-center hover:bg-[#174a6f] no-underline py-2"
          href={`/hotels/${city}`}
        >
          Search
        </Link>
      </div>
    </div>
  );
};
export default Inputs;
