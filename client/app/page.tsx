"use client";
import Featured from "@/components/featured/Featured";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import PropertyList from "@/components/propertyList/PropertyList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="homeContainer mt-[50px] flex flex-col items-center gap-[30px]">
        <Featured />
        <h1 className="hometitle container font-bold">
          Browse property by type
        </h1>

        <PropertyList />
      </div>
    </div>
  );
}
