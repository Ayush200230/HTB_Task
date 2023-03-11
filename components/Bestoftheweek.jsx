import Image from "next/image";
import React from "react";

const Bestoftheweek = () => {
  return (
    <div className="mb-40">
      <div className="flex mt-16 pl-10">
        <div className="text-7xl font-semibold italic font-sans">
          Best of the week
        </div>
        <p className="pt-[50px] pl-2 text-sm">See all posts &rarr;</p>
      </div>
      <div className="flex mt-20">
        <div className="ml-10">
          <Image
            className="rounded-3xl h-[600px]"
            src="/best.jpeg"
            alt="best image"
            width="900"
            height="1"
          />
        </div>
        <div className="flex-col ml-10 -mt-24">
          <div className="rounded-3xl w-[380px] h-72  bg-[#B7D4D8] ">
            <div className="flex">
              <button className=" ml-6 mt-6 py-1 px-5 text-sm border-2 font-semibold border-black rounded-2xl">
                &#8226; ADS
              </button>
              <button className="border-2 font-semibold border-white bg-white ml-52 mt-5 px-2 text-2xl rounded-full">
                +
              </button>
            </div>
            <div className="mt-4 ml-6 font-semibold text-sm">
              Become A<div className="uppercase">BroadcastMember</div>
            </div>
            <div className="mt-4 ml-6 w-60 font-semibold text-3xl">
              Real talk in a corporate world
            </div>
            <div className="underline mt-10 ml-[270px]">Learn more</div>
          </div>
          <div className="mt-10">
            <Image
              className="rounded-3xl h-[370px]"
              src="/landing.webp"
              alt="posts"
              width="380"
              height="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bestoftheweek;
