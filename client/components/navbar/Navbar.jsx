const Navbar = () => {
  return (
    <div className="h-[85px] bg-[#003580] flex justify-center ">
      <div className="w-[100%] container text-white flex items-center justify-between ">
        <span className="font-medium text-2xl">Booking</span>
        <div>
          <button className="ml-[20px] border-none py-[5px] px-[10px] cursor-pointer text-[#0071c2] bg-white rounded-md hover:bg-[#003580] hover:text-white transition-all">
            Register
          </button>
          <button className="ml-[20px] border-none py-[5px] px-[10px] cursor-pointer text-[#0071c2] bg-white rounded-md hover:bg-[#003580] hover:text-white transition-all">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
