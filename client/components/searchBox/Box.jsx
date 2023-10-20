import Image from "next/image";
import BoxContent from "./BoxContent";

const Box = () => {
  return (
    <div className="w-[100%] flex flex-col gap-5 ml-10">
      <BoxContent />
      <BoxContent />
      <BoxContent />
      <BoxContent />
      <BoxContent />
      <BoxContent />
      <BoxContent />
    </div>
  );
};
export default Box;
