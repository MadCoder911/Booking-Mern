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

const PropertyList = (content) => {
  const [data, setData] = useState(content.content);
  const [loading, setLoading] = useState(false);
  const images = [
    "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
    "https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&o=",
    "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
  ];

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
    <div className="plIST container flex justify-between gap-[20px]  ">
      {loading ? (
        <p>Loading please wait...</p>
      ) : (
        <Swiper
          className=""
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={sliderValue()}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {data &&
            images.map((img, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="pLISTitem flex-1  rounded-md overflow-hidden cursor-pointer">
                    <Image
                      width={400}
                      height={400}
                      src={img}
                      className="img w-[100%] h-[150px] object-cover mb-1"
                      alt="x"
                    />
                    <div className="PLISTtitles ">
                      <p className="font-bold text-[18px] mb-0 pb-0 text-black">
                        Hotels
                      </p>
                      <p className="text-[16px] font-300 text-gray-500 p-0 m-0">
                        {data[i]?.count}{" "}
                        <span className="capitalize">{data[i]?.type}</span>
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      )}
    </div>
    //
    //
  );
};
export default PropertyList;
