import Email from "@/components/email/Email";

import FeaturedSection from "@/components/featured/FeaturedSection";

import Header from "@/components/header/Header";

import PropertiesSection from "@/components/propertyList/PropertiesSection";

import "swiper/css";

//
async function getData() {
  const res = await fetch("http://localhost:8000/hotels", {
    next: { revalidate: 10 },
  });
  return res;
}
export default async function Home() {
  const res = await getData();
  const data = await res.json();
  console.log(data);
  return (
    <div className="overflow-hidden bg-white">
      <Header />
      <div className="homeContainer mt-[50px]  bg-white flex flex-col items-center gap-[30px]">
        <FeaturedSection />
        <PropertiesSection />
        <Email />
      </div>
    </div>
  );
}
