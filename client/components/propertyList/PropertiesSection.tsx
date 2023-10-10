"use client";
import { Homes } from "../homes/Homes";
import PropertyList from "./PropertyList";

const PropertiesSection = () => {
  return (
    <>
      <PropertyList />
      <h1 className="hometitle container font-bold text-[20px]">
        Homes guests love
      </h1>
      <Homes />
    </>
  );
};
export default PropertiesSection;
