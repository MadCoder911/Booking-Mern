import TopHeader from "@/components/header/TopHeader";
import Box from "@/components/searchBox/Box";
import SearchBox from "@/components/searchBox/SearchBox";

const Hotels = ({ params }) => {
  const endParams = () => {
    if (params === "" || !params || Object.keys(params).length === 0) {
      return "all";
    } else {
      return `?city=${params.search.toLowerCase()}`;
    }
  };
  return (
    <div className="w-[100%]">
      <main className="bg-[#003580]  pt-5 relative text-white flex justify-center z-10   ">
        <div className="container">
          <TopHeader />
        </div>
      </main>
      <div className="w-[100%] flex justify-center pt-[50px] pb-[50px] bg-white">
        <div className="lg:flex container">
          <SearchBox />
          {/* <Box search={endParams()} /> */}
        </div>
      </div>
    </div>
  );
};
export default Hotels;
