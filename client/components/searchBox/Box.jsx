import BoxContent from "./BoxContent";
import { fetchSearch } from "@/utils";
const Box = async ({ search }) => {
  const searchResults = await fetchSearch(search);

  return (
    <div className="w-[100%] flex flex-col gap-5 lg:ml-10">
      {searchResults.map((result, i) => {
        return (
          <BoxContent
            key={i}
            name={result.name}
            distance={result.distance}
            rating={result.rating}
            description={result.desc}
            photos={result.photos}
            id={result.id}
          />
        );
      })}
    </div>
  );
};
export default Box;
