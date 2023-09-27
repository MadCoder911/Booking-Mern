const Navbar = () => {
  return (
    <div className="h-[50px] bg-[#003580] flex justify-center">
      <div className="w-[100%] max-w-[1024px] text-white flex items-center justify-between">
        <span className="font-medium">lamabooking</span>
        <div>
          <button className="ml-20 border-none py-[5px] px-[10px] cursor-pointer text-[#003580] bg-white">
            Register
          </button>
          <button className="ml-20 border-none py-[5px] px-[10px] cursor-pointer text-[#003580] bg-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
