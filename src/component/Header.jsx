import Image from 'next/image';
import React from 'react';
import { HiSearch, HiOutlineShoppingCart } from 'react-icons/hi';

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
        <div className="text-white text-xs flex items-center space-x-6 mx-6 whitespace-nowrapcursor-pointer">
          <div className="link">
            <p>Hello Himu</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Order</p>
          </div>
          <div className="relative link flex items-center">
            <HiOutlineShoppingCart className="text-4xl mx-auto" />
            <p className="hidden sm:inline font-extrabold md:text-sm">Basket</p>
          </div>
        </div>
      </div>
      <div className="">{/* Bottom Nav */}</div>
    </header>
  );
}
