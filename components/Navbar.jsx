import React from "react";
import Link from "next/link";
import { VscSearch } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="fixed bg-white h-16">
      <div className="flex justify-between items-center w-full h-full px-2  ">
        <div className="flex mt-4">
          <ul className="flex dark:text-black space-x-5">
            <Link href="/">
              <li className=" text-2xl font-bold italic pl-5 pr-7">
                BlogSpot.
              </li>
            </Link>
            <Link href="/">
              <li className=" text-sm pt-2">
                Articles<sup>(460)</sup>
              </li>
            </Link>
            <Link href="/">
              <li className=" text-sm pt-2">
                Radio<sup>(8)</sup>
              </li>
            </Link>
            <Link href="/">
              <li className=" text-sm pt-2">
                Podcast<sup>(46)</sup>
              </li>
            </Link>
            <Link href="/">
              <li className=" text-sm pt-2">Be a Writer</li>
            </Link>
            <Link href="/">
              <li className=" text-sm pt-2 underline">Talk to us</li>
            </Link>
          </ul>

          <ul className="flex dark:text-black space-x-2 ml-[710px]">
            <Link href="/">
              <li className=" text-xl bg-black rounded-full p-2 text-white ">
                <VscSearch />
              </li>
            </Link>
            <Link href="/">
              <li className=" text-sm">
                <button className="border-2 px-4 py-2 mb-2 border-black rounded-3xl font-semibold">
                  Menu
                </button>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
