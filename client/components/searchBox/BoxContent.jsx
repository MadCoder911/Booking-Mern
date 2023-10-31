import Image from "next/image";
const BoxContent = ({ name, distance, rating, description, photos }) => {
  return (
    <div className="item lg:flex border-[1px] border-solid border-gray-400  rounded-md p-3">
      {photos[0] == "" || photos.length < 1 ? (
        <div className="w-[250px] h-[200px]"> </div>
      ) : (
        <Image
          width={400}
          height={400}
          src={photos[0]}
          className="img max-w-[250px] mr-2 object-cover "
          alt="x"
        />
      )}
      <div className="flex w-[100%]">
        <div className="flex-grow">
          <h1 className="font-bold text-[22px]">{name}</h1>
          <p className="text-[12px] my-3">{distance}</p>
          <p className=" px-1 py-1 bg-[#008009] inline rounded-md text-white text-[13px]">
            Free airport taxi
          </p>
          <p className="text-[12px] font-semibold mt-3">{description}</p>
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
            <p className="bg-[#003580] text-white p-[3px] text-[13px] font-bold ml-5 px-2">
              {!rating ? "3" : rating}
            </p>
          </div>
          <div className="bottom">
            <p className="mt-[130px] text-right text-[30px] font-light">$112</p>
            <p className="text-gray-400 text-[12px]">Includes taxes and fees</p>
            <button className=" text-white lg:font-medium bg-[#0071c2] px-2 py-1 rounded-md text-[13px] mt-4">
              See availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoxContent;
