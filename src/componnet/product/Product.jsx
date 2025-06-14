import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import { products } from '../shopping/Data';
// const products = [
//   { id: 1, img: './img/product/meditation.jpg', price: '195 ', number: 87, name: 'SEA BEAUTY', text: 'MEDITATION' },
//   { id: 2, img: './img/product/magical.jpg', price: '195 ', number: 87, name: 'MASHROOM', text: 'MEDITATION' },
//   { id: 3, img: './img/product/sea.jpg', price: '195 ', number: 88, name: 'SEA ARAM', text: 'YOGA' },
//   { id: 4, img: './img/product/meditation.jpg', price: '195 ', number: 83, name: 'DERAKHTANE ZIBA', text: 'YOGA' },
//   { id: 5, img: './img/product/sampel4.jpg', price: '195 ', number: 67, name: 'SEA BEAUTY', text: 'SPA' },
//   { id: 6, img: './img/product/sampel2.jpg', price: '195 ', number: 63, name: 'SEA BEAUTY', text: 'SPA' },
//   { id: 7, img: './img/product/sampel3.jpg', price: '195 ', number: 68, name: 'DERAKHSHAN', text: 'YOGA' },
//   { id: 8, img: './img/product/sampel1.jpg', price: '195 ', number: 29, name: 'ZIBA KHOFTE', text: 'MEDITATION' },
// ];

export default function Product () {
  return (
    <div className="w-full min-h-[650px] flex justify-center items-center py-28 bg-gray-300 md: pb-60 ">
      <div className="grid grid-cols-1 max-md:grid-cols-2 md:grid-cols-4 max-sm:grid-cols-1 gap-6  max-w-7xl  justify-items-center">
        {products.map(product => (
          <Link key={product.id}
          to={`/shoppingCart/${product.id}`}>
          <div  className="min-w-[250px] max-w-[350px] px-4">
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