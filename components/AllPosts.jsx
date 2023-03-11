import Image from "next/image";
import React from "react";

const AllPosts = () => {
  return (
    <div className="mb-40 pt-10">
      <div className="flex justify-center mt-16">
        <div className="text-7xl font-semibold italic font-sans">All Posts</div>
        <p className="pt-[50px] pl-2 text-sm">See new posts &rarr;</p>
      </div>
      <div className="flex mt-16 justify-center space-x-10">
        <div></div>
        <div className="flex-col w-1/3 pl-20 ">
          <Image
            className="rounded-3xl h-96  "
            src="/landing.webp"
            alt="posts"
            width="300"
            height="1"
          />

          <p className="pt-3 font-semibold">&#8226; cars and trucks</p>
          <div className="font-bold text-2xl pt-2">
            Unique Hand cragted vehicles for small circle of people
          </div>
        </div>
        <div className="w-1/3 pl-12 hover:scale-x-150 hover:scale-y-105 ease-in duration-300 group hover:bg-gradient-to-r">
          <div className="hidden hover:block hover:text-4xl">
            Mental wellness while you work
          </div>
          <Image
            className="rounded-3xl h-96"
            src="/landing.webp"
            alt="posts"
            width="300"
            height="1"
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="py-1 px-4 rounded-lg bg-white text-black font-bold cursor-pointer text-sm">
              Dec 13, 2022
            </div>
            <h3 className="text-sm py-1 px-4 mt-3 text-white border-2 border-white rounded-lg">
              &#8226; Lifestyle
            </h3>
            <div className="flex">
              <div>gbdf</div>
              <div className="pb-4 pt-2 text-white text-center">
                Watch this video
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <Image
            className="rounded-3xl h-96"
            src="/landing.webp"
            alt="posts"
            width="300"
            height="1"
          />
          <p className="pt-3 font-semibold">&#8226; Fashion</p>
          <div className="font-bold text-2xl pt-2">Danding at the world</div>
        </div>
      </div>
    </div>
  );
};

export default AllPosts;
