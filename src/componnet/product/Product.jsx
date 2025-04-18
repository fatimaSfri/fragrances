import React from 'react';
import '../../index.css';

const products = [
  { id: 1, img: './img/product/nature.jpg', price: '160 ', number: 35, name: 'MASALA', text: 'SPA' },
  { id: 2, img: './img/product/family.jpg', price: '185 ', number: 75, name: 'PINE', text: 'YOGA' },
  { id: 3, img: './img/product/night-relax.jpg', price: '175 ', number: 87, name: 'SEA BEAUTY', text: 'MEDITATION' },
  { id: 4, img: './img/product/sunrise.jpg', price: '150 ', number: 42, name: 'SUNRISE', text: 'WELLNESS' },
  { id: 5, img: './img/product/forest.jpg', price: '170 ', number: 63, name: 'FOREST', text: 'NATURE' },
  { id: 6, img: './img/product/ocean.jpg', price: '190 ', number: 29, name: 'OCEAN', text: 'RELAX' },
  { id: 7, img: './img/product/mountain.jpg', price: '165 ', number: 51, name: 'MOUNTAIN', text: 'ADVENTURE' },
  { id: 8, img: './img/product/sunset.jpg', price: '180 ', number: 94, name: 'SUNSET', text: 'CALM' },
];

export default function Product () {
  return (
    <div className="w-full min-h-[650px] flex justify-center items-center py-28 bg-gray-300 md: pb-60 ">
      <div className="grid grid-cols-1 max-md:grid-cols-2 md:grid-cols-4 max-sm:grid-cols-1 gap-6  max-w-7xl  justify-items-center">
        {products.map(product => (
          <div key={product.id} className="min-w-[200px] max-w-[350px] ">
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
              className="w-full h-52 object-cover border-6 border-[#886b41] hover:scale-105 hover:shadow-xl hover:brightness-105 transition-all duration-300"
            />
            <div className="py-[2px]  text-right">
              <p className="md:text-[14px] max-md:text-[12px] text-gray-900">قیمت : {product.price} تومان</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}