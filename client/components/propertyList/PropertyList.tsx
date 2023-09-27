import Image from "next/image";

const PropertyList = () => {
  return (
    <div className="plIST container flex justify-between gap-[20px] overflow-x-scroll">
      <div className="pLISTitem flex-1  rounded-md overflow-hidden cursor-pointer">
        <Image
          width={400}
          height={400}
          src="https://cf.bstatic.com/xdata/images/city/600x600/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o="
          className="img w-[100%] h-[150px] object-cover"
          alt="x"
        />
        <div className="PLISTtitles ">
          <p className="font-bold text-[18px] mb-0 pb-0">Hotels</p>
          <p className="text-[16px] font-300 text-gray-500 p-0 m-0">123 ss</p>
        </div>
      </div>
      <div className="pLISTitem  flex-1 rounded-md overflow-hidden cursor-pointer">
        <Image
          width={400}
          height={400}
          src="https://cf.bstatic.com/xdata/images/city/600x600/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o="
          className="img w-[100%] h-[150px] object-cover"
          alt="x"
        />
        <div className="PLISTtitles ">
          <p className="font-bold text-[18px] mb-0 pb-0">Hotels</p>
          <p className="text-[16px] font-300 text-gray-500 p-0 m-0">123 ss</p>
        </div>
      </div>
      <div className="pLISTitem  flex-1 rounded-md overflow-hidden cursor-pointer">
        <Image
          width={400}
          height={400}
          src="https://cf.bstatic.com/xdata/images/city/600x600/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o="
          className="img w-[100%] h-[150px] object-cover"
          alt="x"
        />
        <div className="PLISTtitles ">
          <p className="font-bold text-[18px] mb-0 pb-0">Hotels</p>
          <p className="text-[16px] font-300 text-gray-500 p-0 m-0">123 ss</p>
        </div>
      </div>
      <div className="pLISTitem  flex-1 rounded-md overflow-hidden cursor-pointer">
        <Image
          width={400}
          height={400}
          src="https://cf.bstatic.com/xdata/images/city/600x600/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o="
          className="img w-[100%] h-[150px] object-cover"
          alt="x"
        />
        <div className="PLISTtitles ">
          <p className="font-bold text-[18px] mb-0 pb-0">Hotels</p>
          <p className="text-[16px] font-300 text-gray-500 p-0 m-0">123 ss</p>
        </div>
      </div>
      <div className="pLISTitem flex-1  rounded-md overflow-hidden cursor-pointer">
        <Image
          width={400}
          height={400}
          src="https://cf.bstatic.com/xdata/images/city/600x600/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o="
          className="img w-[100%] h-[150px] object-cover"
          alt="x"
        />
        <div className="PLISTtitles ">
          <p className="font-bold text-[18px] mb-0 pb-0">Hotels</p>
          <p className="text-[16px] font-300 text-gray-500 p-0 m-0">123 ss</p>
        </div>
      </div>
    </div>
  );
};
export default PropertyList;
