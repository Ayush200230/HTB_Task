import Image from "next/image";
import React from "react";

const Newposts = () => {
  return (
    <div className="pb-20">
      <div className="flex mt-16 pl-10">
        <div className="text-7xl font-semibold italic font-sans">New Posts</div>
        <p className="pt-[50px] pl-2 text-sm">See all posts &rarr;</p>
        <div className="underline pt-[32px] pl-[800px] italic text-xl">
          viewmore
        </div>
      </div>

      <div className="flex mt-8 justify-center space-x-10">
        <div></div>
        <div className="flex-col w-1/3 pl-20 hover:scale-x-150 hover:scale-y-105 ease-in duration-300">
          <Image
            className="rounded-3xl h-96  "
            src="/landing.webp"
            alt="posts"
            width="300"
            height="1"
          />

          <p className="pt-3 font-semibold">&#8226; Lifestyle</p>
          <div className="font-bold text-2xl pt-2">
            The story behind every song on japanese Breakfast's new album
          </div>
        </div>
        <div className="flex-col w-1/3 pl-12 hover:scale-x-150 hover:scale-y-105 ease-in duration-300">
          <Image
            className="rounded-3xl h-96  "
            src="/landing.webp"
            alt="posts"
            width="300"
            height="1"
          />

          <p className="pt-3 font-semibold">&#8226; Photo</p>
          <div className="font-bold text-2xl pt-2">
            How to get the perfect shot
          </div>
        </div>
        <div className="flex-col w-1/3">
          <Image
            className="rounded-3xl h-96 hover:scale-x-150 hover:scale-y-105 ease-in duration-300"
            src="/landing.webp"
            alt="posts"
            width="300"
            height="1"
          />
          <p className="pt-3 font-semibold">&#8226; House & decor</p>
          <div className="font-bold text-2xl pt-2">
            The art of interior design
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newposts;
