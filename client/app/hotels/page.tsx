import TopHeader from "@/components/header/TopHeader";
import SearchBox from "@/components/searchBox/SearchBox";

const Hotels = () => {
  return (
    <>
      <main className="bg-[#003580]  pt-5 relative text-white flex justify-center z-10 mb-[20px] lg:mb-0">
        <div className="container">
          <TopHeader />
        </div>
      </main>
      <div className=" w-100% flex justify-center mb-16 pt-5 bg-white">
        <SearchBox />
      </div>
    </>
  );
};
export default Hotels;
