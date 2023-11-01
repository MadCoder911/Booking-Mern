import TopHeader from "@/components/header/TopHeader";
import SearchBox from "@/components/searchBox/SearchBox";

const Hotels = ({ params }) => {
  const endParams = () => {
    if (params === "" || !params || Object.keys(params).length === 0) {
      return "all";
    } else {
      return params.search;
    }
  };
  return (
    <>
      <main className="bg-[#003580]  pt-5 relative text-white flex justify-center z-10 mb-[20px] lg:mb-0">
        <div className="container">
          <TopHeader />
        </div>
      </main>
      <div className=" w-100% flex justify-center  pt-5 bg-white">
        <SearchBox search={endParams()} />
      </div>
    </>
  );
};
export default Hotels;
