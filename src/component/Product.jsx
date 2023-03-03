/* eslint-disable react/no-array-index-key */

'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { HiStar } from 'react-icons/hi';
import Currency from 'react-currency-formatter';

export default function Product({ product }) {
  const [ratting] = useState(
    Math.floor(Math.random() * 6),
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  const {
    title, price, description, category, image,
  } = product;
  return (
    <div className="relative flex flex-col m-5 p-10 bg-white z-30">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
      <Image
        src={image}
        height={200}
        width={200}
        className="object-contain mx-auto w-full h-80"
        alt="product"
      />
      <h4 className="my-3 font-medium">{title}</h4>
      <div className="flex">
        {Array(ratting).fill().map((_, i) => (
          <HiStar key={i} className="h-5 text-yellow-500" />
        ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="m-5 ">
        <Currency quantity={price} currency="GBP" />
      </div>
      {hasPrime && (
      <div className="flex items-center space-x-2 -mt-5">
        <Image className="w-12 " src="https://links.papareact.com/fdw" alt="prime" width={100} height={50} objectFit="contain" />
        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
      </div>
      )}
      <button className="mt-auto button" type="button">Add to Basket</button>
    </div>
  );
}
