/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import { HiSearch, HiOutlineShoppingCart, HiMenu } from 'react-icons/hi';

export default function Header() {
  return (
    <header>
      <div className=" flex items-center bg-amazon_blue p-1 py-2 flex-grow">
        {/* top Nav */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex flex-grow rounded-md bg-yellow-400 hover:bg-yellow-500 items-center">
          <input
            type="text"
            className="p-4 h-full w-6 flex-grow flex-shrink focus:outline-none rounded-l-md"
          />
          <div className="h-12 p-4">
            <HiSearch className="" />
          </div>
        </div>
        <div className="text-white text-xs flex items-center space-x-6 mx-6 whitespace-nowrap cursor-pointer">
          <div className="link">
            <p>Hello Himu</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Order</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              4
            </span>
            <HiOutlineShoppingCart className="text-4xl mx-auto" />
            <p className="hidden sm:inline font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>
      <div className=" flex items-center bg-amazon_blue-light text-white text-sm p-2 pl-6 space-x-3 ">
        <p className="link flex items-center">
          <HiMenu className="h-6 mr-1 " />
          All
        </p>
        <p className="link ">Prime Video</p>
        <p className="link ">Amazon Bsiness</p>
        <p className="link ">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronic</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}
