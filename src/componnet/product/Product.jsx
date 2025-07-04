import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import { products } from '../shopping/Data';

export default function Product () {
  return (
    <div className="w-full min-h-[650px] flex justify-center items-center py-28 bg-gray-300 md: pb-60 ">
      <div className="grid grid-cols-1 max-md:grid-cols-2 md:grid-cols-4 max-sm:grid-cols-1 gap-6  max-w-7xl  justify-items-center">
        {products.map(product => (
          <Link key={product.id}
          to={`/shoppingCart/${product.id}`}>
          <div  className="md:max-w-[300px] md:min-w-[250px] max-md:min-w-[200px] max-md:max-w-[280px] px-4">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center ">
                <p className="text-[28px] text-gray-900">{product.number}</p>
                <p className="px-1 text-[12px] pt-1 text-gray-900">{product.name}</p>
              </div>
              <p className=" text-[12px] mt-5 text-blue-950">{product.text}</p>
            </div>
            <img
              src={product.img}
              alt={product.name}
              className="aspect-square object-cover border-6 border-[#886b41] hover:scale-102 hover:shadow-xl hover:brightness-105 transition-all duration-300"
            />
            <div className="py-[2px] text-right">
              <p className="md:text-[14px] max-md:text-[12px] text-gray-900">قیمت : {product.price} تومان</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}