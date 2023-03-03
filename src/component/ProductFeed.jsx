import React from 'react';
import Product from './Product';

export default function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {products.slice(0, 4).map((p) => (
        <Product product={p} key={p.id} />
      ))}
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt="canva"
      />
      <div className="md:col-span-2">
        {products.slice(4, 5).map((p) => (
          <Product product={p} key={p.id} />
        ))}
      </div>
      {products.slice(5, products.length).map((p) => (
        <Product product={p} key={p.id} />
      ))}
    </div>
  );
}
