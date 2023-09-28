import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
const PropertyList = () => {
  //
  //
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount\
  const sliderValue = () => {
    if (windowSize.width > 1025) {
      return 5;
    } else if (windowSize.width < 1025 && windowSize.width > 750) {
      return 3;
    } else if (windowSize.width < 750) {
      return 2;
    }
  };
  //
  //
  return (
    //
    //
    <div className="plIST container flex justify-between gap-[20px]  mb-[50px]">
      <Swiper
        className=""
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={sliderValue()}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {" "}
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
              <p className="text-[16px] font-300 text-gray-500 p-0 m-0">
                123 ss
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
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
              <p className="text-[16px] font-300 text-gray-500 p-0 m-0">
                123 ss
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
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
              <p className="text-[16px] font-300 text-gray-500 p-0 m-0">
                123 ss
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
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
              <p className="text-[16px] font-300 text-gray-500 p-0 m-0">
                123 ss
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
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
              <p className="text-[16px] font-300 text-gray-500 p-0 m-0">
                123 ss
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    //
    //
  );
};
export default PropertyList;
