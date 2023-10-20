"use client";
import Featured from "./Featured";

const FeaturedSection = (content) => {
  return (
    <>
      <Featured content={content.content} />
      <h1 className="hometitle container text-[20px] font-bold">
        Browse property by type
      </h1>
    </>
  );
};
export default FeaturedSection;
