import Email from "@/components/email/Email";

import FeaturedSection from "@/components/featured/FeaturedSection";

import Header from "@/components/header/Header";

import PropertiesSection from "@/components/propertyList/PropertiesSection";

import "swiper/css";

//
async function getData() {
  const propertyListData = await fetch(
    `${process.env.API_URL}/hotels/countByType`,
    {
      next: { revalidate: 10 },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  const featuredData = await fetch(
    `${process.env.API_URL}/hotels/countByCity?cities=berlin,cairo,aswan`,
    {
      next: { revalidate: 10 },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return { propertyListData, featuredData };
}
export default async function Home() {
  const res = await getData();

  return (
    <div className="overflow-hidden bg-white">
      <Header />
      <div className="homeContainer mt-[50px]  bg-white flex flex-col items-center gap-[30px]">
        <FeaturedSection content={res.featuredData} />
        <PropertiesSection content={res.propertyListData} />
        <Email />
      </div>
    </div>
  );
}
