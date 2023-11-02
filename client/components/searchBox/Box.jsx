"use client";
import BoxContent from "./BoxContent";
import { fetchSearch } from "@/utils";
import { store } from "../../store";

import { Provider, useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import {
  handleChange,
  handleSearchResults,
} from "@/features/search/searchSlice";
const Box = ({ params }) => {
  console.log(params?.search);
  const { city, minPrice, maxPrice, searchResults } = useSelector(
    (store) => store.search
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.API_URL}/hotels`);
      const data = await response.json();
      let filteredData;
      if (params?.search) {
        filteredData = data.filter(
          (hotel) =>
            hotel.city === params?.search && hotel.cheapestPrice > minPrice
        );
      } else {
        filteredData = data;
      }
      dispatch(
        handleSearchResults({
          searchResults: filteredData,
        })
      );
    };
    if (params?.search !== undefined) {
      dispatch(handleChange({ value: params?.search }));
    }
    fetchData();
  }, [minPrice, maxPrice]);

  return (
    <div className="w-[100%] flex flex-col gap-5 lg:ml-10">
      {!searchResults
        ? "Loading..."
        : searchResults.map((result, i) => {
            return (
              <BoxContent
                key={i}
                name={result.name}
                distance={result.distance}
                rating={result.rating}
                description={result.desc}
                photos={result.photos}
                city={result.city}
                id={result._id}
              />
            );
          })}
    </div>
  );
};
export default Box;
