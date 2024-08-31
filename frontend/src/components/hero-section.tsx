import { Search } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="relative h-[90vh] w-full max-md:h-[70vh] pointer-events-none">
        <Image
          src={"/hero.png"}
          fill
          style={{ objectFit: "cover" }}
          alt="hero image"
        />
      </div>
      <div className="relative bottom-10 w-[70%] h-[12rem] shadow-md shadow-[rgba(0,0,0,0.1)] rounded-xl bg-white flex flex-col items-center justify-center px-7">
        <h1 className="text-orange-500 text-3xl font-bold">
          Tuck into a takeway today
        </h1>
        <p>Food in just one click away!</p>
        <div className="w-full rounded-full flex items-center justify-center border border-orange-500 h-12 p-3 mt-5">
          <Search className="text-orange-500 p-[2px]" />
          <input className="bg-white flex-1 h-10 outline-none focus:outline-none focus:border-none ml-2" />
          <Button className="bg-orange-500 rounded-full h-8 px-3 py-2">
            Search
          </Button>
        </div>
      </div>
      <div className="w-[70%] h-full flex justify-start px-4">
        <div className="relative w-[50%] h-[20rem]">
          <Image
            src={"/landing-image.png"}
            fill
            style={{ objectFit: "contain" }}
            alt="hero image"
            className="pointer-events-none"
          />
        </div>
        <div className="relative w-[50%] flex flex-col items-center justify-center h-[20rem] gap-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-black">
              Order Takeaway Even Faster!
            </h1>
            <p>Faster than you think and more convenient than you imagine.</p>
          </div>
          <div className="relative w-full h-[3rem]">
            <Image
              src={"/playstore-app.png"}
              fill
              style={{ objectFit: "contain" }}
              alt="hero image"
              className="pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
