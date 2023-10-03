import Image from "next/image";
const BoxContent = () => {
  return (
    <div className="item flex border-[1px] border-solid border-gray-400  rounded-md p-3">
      <Image
        width={400}
        height={400}
        src="https://cf.bstatic.com/xdata/images/city/600x600/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o="
        className="img max-w-[200px] mr-2 object-cover "
        alt="x"
      />
      <div className="flex w-[100%]">
        <div className="flex-grow">
          <h1 className="font-bold text-[22px]">Tower Street Apartments</h1>
          <p className="text-[12px] my-3">500m from center</p>
          <p className=" px-1 py-1 bg-[#008009] inline rounded-md text-white text-[13px]">
            Free airport taxi
          </p>
          <p className="text-[12px] font-semibold mt-3">
            Studio Apartment with Air conditioning
          </p>
          <p className="text-[12px] mt-3">
            Entire studio • 1 bathroom • 21m² 1 full bed
          </p>
          <p className="text-[12px] mt-3 font-semibold text-[#008009]">
            Free cancellation
          </p>
          <p className="text-[12px] mt-3  text-[#008009]">
            You can cancel later, so lock in this great price today!
          </p>
        </div>
        <div>
          <div className="top flex justify-between">
            <p>Excellent</p>
            <p className="bg-[#003580] text-white p-[3px] text-[13px] font-bold ml-5">
              8.9
            </p>
          </div>
          <div className="bottom">
            <p className="mt-[130px] text-right text-[30px] font-light">$112</p>
            <p className="text-gray-400 text-[12px]">Includes taxes and fees</p>
            <button className=" text-white font-medium bg-[#0071c2] px-2 py-1 rounded-md">
              See availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoxContent;
