import Image from "next/image";
import BoxContent from "./BoxContent";
import { Provider, useDispatch, useSelector } from "react-redux";
const Box = () => {
  const { searchResults } = useSelector((store) => store.search);
  console.log(searchResults);
  return (
    <div className="w-[100%] flex flex-col gap-5 lg:ml-10">
      {!searchResults || searchResults === ""
        ? "No results found"
        : searchResults.map((result, i) => {
            return (
              <BoxContent
                key={i}
                name={result.name}
                distance={result.distance}
                rating={result.rating}
                description={result.desc}
                photos={result.photos}
              />
            );
          })}
    </div>
  );
};
export default Box;
