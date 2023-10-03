import { FaBed, FaPlane, FaCar, FaTaxi } from "react-icons/fa";
const TopHeader = () => {
  return (
    <div className="flex gap-[40px] mb-[50px] w-[100%] overflow-x-scroll overflow-y-hidden sm:overflow-hidden">
      <div className="cursor-pointer flex items-center gap-[10px] hover:scale-[110%] transition-all border-[1px]  p-[10px] rounded-[20px] text-sm sm:text-md">
        <FaBed />
        <span className="font-light ">Stays</span>
      </div>
      <div className="cursor-pointer flex items-center gap-[10px] hover:scale-[110%] transition-all text-sm sm:text-md ">
        <FaPlane />
        <span className="font-light ">Flights</span>
      </div>
      <div className="cursor-pointer flex items-center gap-[10px] whitespace-nowrap hover:scale-[110%] transition-all  text-sm sm:text-md  ">
        <FaCar />
        <span className="font-light">Car Rentals</span>
      </div>
      <div className="cursor-pointer flex items-center gap-[10px] hover:scale-[110%] transition-all text-sm sm:text-md ">
        <FaBed />
        <span className="font-light ">Attractions</span>
      </div>
      <div className="cursor-pointer flex items-center gap-[10px] whitespace-nowrap hover:scale-[110%] transition-all text-sm sm:text-md">
        <FaTaxi />
        <span className="font-light ">Airport Taxi</span>
      </div>
    </div>
  );
};
export default TopHeader;
