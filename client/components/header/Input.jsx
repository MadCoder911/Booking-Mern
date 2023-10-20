import { FaBed } from "react-icons/fa";

const Input = () => {
  return (
    <div className="headerSearchiTEM flex items-center gap-[10px] lg:flex-[0.96] flex-0 w-[99%] bg-white h-[50px] p-[20px] rounded-md lg:rounded-md m-[2px] lg:m-0">
      <FaBed className="text-gray-300 text-[20px]" />
      <input
        type="text"
        placeholder="Where are you going?"
        className="headerSearchInput outline-none text-black text-sm"
      />
    </div>
  );
};
export default Input;
