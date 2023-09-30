"use client";
import Email from "@/components/email/Email";
import Featured from "@/components/featured/Featured";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Homes } from "@/components/homes/Homes";
import PropertyList from "@/components/propertyList/PropertyList";
import "swiper/css";

//
export default function Home() {
  return (
    <div className="overflow-hidden bg-white">
      <Header />
      <div className="homeContainer mt-[50px]  bg-white flex flex-col items-center gap-[30px]">
        <Featured />
        <h1 className="hometitle container text-[20px] font-bold">
          Browse property by type
        </h1>
        <PropertyList />
        <h1 className="hometitle container font-bold text-[20px]">
          Homes guests love
        </h1>
        <Homes />
        <Email />
      </div>
    </div>
  );
}
