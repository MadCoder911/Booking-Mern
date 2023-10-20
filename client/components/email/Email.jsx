const Email = () => {
  return (
    <div className="bg-[#003580] w-[100%] py-[100px] flex flex-col items-center justify-center text-center">
      <div className="container ">
        <h1 className="text-white font-bold sm:text-[40px] text-[30px]">
          Save time, save money!{" "}
        </h1>
        <p className="text-white my-[30px] sm:text-[16px] text-[13px]">
          Sign up and we'll send the best deals for you
        </p>
        <div className="form ">
          <input
            type="email"
            placeholder="Your email"
            className="py-3 px-2 rounded-md md:w-[30%] w-[60%]"
          />
          <button className="rounded-md bg-[#0071c2] ml-3 text-white px-2 py-3 hover:scale-[105%] transition-all ease-in-out hover:bg-[#51adee]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Email;
