import { FaBed, FaPlane, FaCar, FaTaxi } from "react-icons/fa";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <div className="bg-[#003580]   relative text-white flex justify-center z-10">
      <div className=" container w-[100%] mt-[20px] mb-[100px] ">
        <div className="flex gap-[40px] mb-[50px]">
          <div className="cursor-pointer flex items-center gap-[10px] hover:scale-[110%] transition-all border-[1px] p-[10px] rounded-[20px]">
            <FaBed />
            <span className="font-light">Stays</span>
          </div>
          <div className="cursor-pointer flex items-center gap-[10px] hover:scale-[110%] transition-all">
            <FaPlane />
            <span className="font-light">Flights</span>
          </div>
          <div className="cursor-pointer flex items-center gap-[10px] hover:scale-[110%] transition-all">
            <FaCar />
            <span className="font-light">Car Rentals</span>
          </div>
          <div className="cursor-pointer flex items-center gap-[10px] hover:scale-[110%] transition-all ">
            <FaBed />
            <span className="font-light">Attractions</span>
          </div>
          <div className="cursor-pointer flex items-center gap-[10px] hover:scale-[110%] transition-all">
            <FaTaxi />
            <span className="font-light">Airport Taxi</span>
          </div>
        </div>
        <h1 className="headerTitle my-[24px] font-size-[100px] font-bold text-5xl">
          Find your next stay
        </h1>
        <p className="headerDesc my-[24px] font-light text-2xl">
          Search low prices on hotels, homes and much more...
        </p>
        <button className="hover:bg-[#1b90e3] hover:scale-[110%] transition-all rounded-md bg-[#0071c2] p-[10px] font-light cursor-pointer">
          Sign in / Register
        </button>
        <SearchBar />
      </div>
    </div>
  );
};
export default Header;
