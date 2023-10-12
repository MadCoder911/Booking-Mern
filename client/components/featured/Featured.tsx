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
type DataObj = { count: number; type: string } | number;
type DataType = {
  data?: number[];
  loading?: boolean;
  error?: string | boolean;
  reFetchData?: () => {};
};
const Featured = () => {
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
  const { data, loading, error, reFetchData }: DataType = useFetch(
    `${process.env.API_URL}/hotels/countByCity?cities=berlin,cairo,aswan`
  );

  return (
    <div className="container flex justify-between gap-[20px]">
      <Swiper
        className=""
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={sliderValue()}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {" "}
          <div className="featuredItem relative text-white rounded-lg overflow-hidden h-[250px]">
            <Image
              className="w-[100%] object-cover "
              src={
                "https://cf.bstatic.com/xdata/images/city/600x600/644630.jpg?k=700ac1d32a3bab480b14db2cba3050abe5b5bce062911dc4f5b3fdc15d81f007&o="
              }
              alt="KSA"
              width={200}
              height={200}
            />
            <div className="featuredTitles absolute bottom-[24px] left-4 font-bold">
              <h1>Berlin</h1>
              <h2>{data !== undefined ? data[0] : "123"} Properties</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="featuredItem relative text-white rounded-lg overflow-hidden h-[250px]">
            <Image
              className="w-[100%] object-cover "
              src={
                "https://cf.bstatic.com/xdata/images/city/600x600/644630.jpg?k=700ac1d32a3bab480b14db2cba3050abe5b5bce062911dc4f5b3fdc15d81f007&o="
              }
              alt="KSA"
              width={200}
              height={200}
            />
            <div className="featuredTitles absolute bottom-[24px] left-4 font-bold">
              <h1>Cairo</h1>
              <h2>{data !== undefined ? data[1] : "123"} Properties</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="featuredItem relative text-white rounded-lg overflow-hidden h-[250px]">
            <Image
              className="w-[100%] object-cover "
              src={
                "https://cf.bstatic.com/xdata/images/city/600x600/644630.jpg?k=700ac1d32a3bab480b14db2cba3050abe5b5bce062911dc4f5b3fdc15d81f007&o="
              }
              alt="KSA"
              width={200}
              height={200}
            />
            <div className="featuredTitles absolute bottom-[24px] left-4 font-bold">
              <h1>Aswan</h1>
              <h2>{data !== undefined ? data[2] : "123"} Properties</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Featured;
