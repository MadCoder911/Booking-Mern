import Image from "next/image";
import Link from "next/link";
const BoxContent = ({
  name,
  distance,
  rating,
  description,
  photos,
  city,
  id,
}) => {
  return (
    <div className="item lg:flex border-[1px] border-solid border-gray-400 text-black rounded-md p-3 flex flex-col lg:flex-row justify-center items-center lg:items-start relative">
      {photos[0] == "" || photos.length < 1 ? (
        <div className=" w-[400px] h-[300px] block"> </div>
      ) : (
        <Image
          width={400}
          height={400}
          src={photos[0]}
          className="img lg:max-w-[250px]  lg:max-h-[300px]  max-w-[100%] max-h-[350px] mr-2 object-cover mb-[30px] lg:mb-0 "
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
            <p className="lg:mt-[130px] mt-[90px] text-right text-[30px] font-light">
              $112
            </p>
            <p className="text-gray-400 text-[12px] text-right ">
              Includes taxes and fees
            </p>
            <Link
              className=" text-white lg:font-medium bg-[#0071c2] lg:px-3 lg:py-2 px-3 py-2 rounded-md text-[13px] mt-4 no-underline absolute lg:bottom-4 right-2  bottom-2"
              href={`/hotels/${city}/${id}`}
            >
              See availability
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoxContent;
