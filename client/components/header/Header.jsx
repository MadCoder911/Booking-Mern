import { FaBed, FaPlane, FaCar, FaTaxi } from "react-icons/fa";
import SearchBar from "./SearchBar";
import TopHeader from "./TopHeader";
const Header = () => {
  return (
    <div className="bg-[#003580]   relative text-white flex justify-center z-10 mb-[200px] lg:mb-0">
      <div className=" container w-[100%] mt-[20px] mb-[100px] ">
        <TopHeader />
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
