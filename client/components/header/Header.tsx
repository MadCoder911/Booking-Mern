import { FaBed, FaPlane, FaCar, FaTaxi } from "react-icons/fa";
const Header = () => {
  return (
    <div className="bg-[#003580] text-white flex justify-center">
      <div className="w-[100%] max-w-[1024px] mt-[20px] mb-[100px] ">
        <div className="flex gap-[40px] mb-[50px]">
          <div className="flex items-center gap-[10px] border-[1px] p-[10px] rounded-[20px]">
            <FaBed />
            <span>Stays</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <FaPlane />
            <span>Plane</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <FaCar />
            <span>Car Rentals</span>
          </div>
          <div className="flex items-center gap-[10px]">
            <FaTaxi />
            <span>Airport Taxi</span>
          </div>
        </div>
        <h1 className="headerTitle my-[24px] font-size-[100px] font-semibold">
          A lifetime of discounts? It's Genius
        </h1>
        <p className="headerDesc my-[24px] font-light">
          Get rewarded for your travels, unlock instant savings of 10% or more
          with a free Lamabooking account
        </p>
        <button className="headerBtn  bg-[#0071c2] p-[10px] font-light cursor-pointer">
          Sign in / Register
        </button>
      </div>
    </div>
  );
};
export default Header;
