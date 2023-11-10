import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/features/user/userSlice";
const NavBtns = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="flex items-center">
      {user ? <p>Hello, {user}</p> : null}
      {!user ? (
        <>
          <Link
            href={"/login"}
            className="ml-[20px] border-none py-[5px] px-[10px] no-underline cursor-pointer text-[#0071c2] bg-white rounded-md hover:bg-[#003580] hover:text-white transition-all"
          >
            Login
          </Link>{" "}
          <Link
            href={"/register"}
            className="ml-[20px] no-underline border-none py-[5px] px-[10px] cursor-pointer text-[#0071c2] bg-white rounded-md hover:bg-[#003580] hover:text-white transition-all"
          >
            Register
          </Link>
        </>
      ) : (
        <Link
          href={"/logout"}
          className="ml-[20px] border-none py-[5px] px-[10px] no-underline cursor-pointer text-[#0071c2] bg-white rounded-md hover:bg-[#003580] hover:text-white transition-all"
        >
          Logout test
        </Link>
      )}
    </div>
  );
};
export default NavBtns;
