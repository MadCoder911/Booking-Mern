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
import useFetch from "../hooks/useFetch";

export const Homes = () => {
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
      return 3;
    } else if (windowSize.width < 1025 && windowSize.width > 750) {
      return 2;
    } else if (windowSize.width < 750) {
      return 1;
    }
  };
  return (
    <div className="container flex justify-between gap-[20px] mb-3">
      <Swiper
        className=""
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={sliderValue()}
        // onSlideChange={() => }
        // onSwiper={(swiper) => }
      >
        <SwiperSlide>
          <Image
            width={400}
            height={400}
            src="https://cf.bstatic.com/xdata/images/city/600x600/644630.jpg?k=700ac1d32a3bab480b14db2cba3050abe5b5bce062911dc4f5b3fdc15d81f007&o="
            className="img w-[100%]  object-cover mb-3"
            alt="x"
          />
          <h1 className="font-bold text-[16px] text-black">Inn hotel</h1>
          <p className="font-light text-[17px] my-1 text-black">Cairo</p>
          <p className="my-3 font-semibold text-black">Starting from $120</p>

          <div className="rating flex items-center">
            <p className="bg-[#003580] text-white p-[3px] text-[13px] font-bold mr-2">
              2
            </p>{" "}
            <p className="text-[15px] text-black">Excellent</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={400}
            height={400}
            src="https://cf.bstatic.com/xdata/images/city/600x600/644630.jpg?k=700ac1d32a3bab480b14db2cba3050abe5b5bce062911dc4f5b3fdc15d81f007&o="
            className="img w-[100%]  object-cover mb-3"
            alt="x"
          />
          <h1 className="font-bold text-[16px] text-black">Inn hotel</h1>
          <p className="font-light text-[17px] my-1 text-black">Cairo</p>
          <p className="my-3 font-semibold text-black">Starting from $120</p>

          <div className="rating flex items-center">
            <p className="bg-[#003580] text-white p-[3px] text-[13px] font-bold mr-2">
              2
            </p>{" "}
            <p className="text-[15px] text-black">Excellent</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={400}
            height={400}
            src="https://cf.bstatic.com/xdata/images/city/600x600/644630.jpg?k=700ac1d32a3bab480b14db2cba3050abe5b5bce062911dc4f5b3fdc15d81f007&o="
            className="img w-[100%]  object-cover mb-3"
            alt="x"
          />
          <h1 className="font-bold text-[16px] text-black">Inn hotel</h1>
          <p className="font-light text-[17px] my-1 text-black">Cairo</p>
          <p className="my-3 font-semibold text-black">Starting from $120</p>

          <div className="rating flex items-center">
            <p className="bg-[#003580] text-white p-[3px] text-[13px] font-bold mr-2">
              2
            </p>{" "}
            <p className="text-[15px] text-black">Excellent</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={400}
            height={400}
            src="https://cf.bstatic.com/xdata/images/city/600x600/644630.jpg?k=700ac1d32a3bab480b14db2cba3050abe5b5bce062911dc4f5b3fdc15d81f007&o="
            className="img w-[100%]  object-cover mb-3"
            alt="x"
          />
          <h1 className="font-bold text-[16px] text-black">Inn hotel</h1>
          <p className="font-light text-[17px] my-1 text-black">Cairo</p>
          <p className="my-3 font-semibold text-black">Starting from $120</p>

          <div className="rating flex items-center">
            <p className="bg-[#003580] text-white p-[3px] text-[13px] font-bold mr-2">
              2
            </p>{" "}
            <p className="text-[15px] text-black">Excellent</p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="item">
        <Image
          width={400}
          height={400}
          src="https://cf.bstatic.com/xdata/images/city/600x600/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o="
          className="img w-[100%]  object-cover mb-3"
          alt="x"
        />
        <h1 className="font-bold text-[16px]">Aparthotel Stare Miasto</h1>
        <p className="font-light text-[17px] my-1">Madrid</p>
        <p className="my-3 font-semibold">Starting from $120</p>
        <div className="rating flex items-center">
          <p className="bg-[#003580] text-white p-[3px] text-[13px] font-bold mr-2">
            8.9
          </p>{" "}
          <p className="text-[15px]">Excellent</p>
        </div>
      </div>
      <div className="item">
        <Image
          width={400}
          height={400}
          src="https://cf.bstatic.com/xdata/images/city/600x600/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o="
          className="img w-[100%]  object-cover mb-3"
          alt="x"
        />
        <h1 className="font-bold text-[16px]">Aparthotel Stare Miasto</h1>
        <p className="font-light text-[17px] my-1">Madrid</p>
        <p className="my-3 font-semibold">Starting from $120</p>
        <div className="rating flex items-center">
          <p className="bg-[#003580] text-white p-[3px] text-[13px] font-bold mr-2">
            8.9
          </p>{" "}
          <p className="text-[15px]">Excellent</p>
        </div>
      </div>
      <div className="item">
        <Image
          width={400}
          height={400}
          src="https://cf.bstatic.com/xdata/images/city/600x600/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o="
          className="img w-[100%] object-cover mb-3"
          alt="x"
        />
        <h1 className="font-bold text-[16px]">Aparthotel Stare Miasto</h1>
        <p className="font-light text-[17px] my-1">Madrid</p>
        <p className="my-3 font-semibold">Starting from $120</p>
        <div className="rating flex items-center">
          <p className="bg-[#003580] text-white p-[3px] text-[13px] font-bold mr-2">
            8.9
          </p>{" "}
          <p className="text-[15px]">Excellent</p>
        </div>
      </div> */}
    </div>
  );
};
