import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css'

const products = [
  { id: 1, img: './img/product/nature.jpg', price:'160 T' , number:35 , name :"MASALA" , text:"SPA" },
  { id: 2, img: './img/product/family.jpg',  price:'185 T' , number:75 , name :"PINE" , text:"YOUGA" },
  { id: 3, img: './img/product/night-relax.jpg',  price:'175 T' , number:87 , name :"SEA BEAUTY" , text:"MDITATION" },
];

export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
  
  };

  return (
    <div className=' h-[650px] bg-banner bg-cover bg-center flex justify-center items-end relative ' >
        {/* <div className=' absolute self-start sm:mt-24 max-sm:mt-24 flex '>

          <div className='flex  flex-col items-center justify-center -mr-[10px]'>
            <p className='sm:text-[16px] max-sm:text-[14px]  text-[#5A382F] font-bold '>MOMENT OF LIFE</p>
            <p className='sm:text-[16px] max-sm:text-[14px] opacity-50 font-black'> و دیـــــگـــــر ، هــیــــــچ</p>
          </div>

          <div>
            <img src="../img/logo/logo.png" alt="" className='opacity-[65%] sm:w-14 sm:h-14  max-sm:w-12 max-sm:h-12' />
          </div>

          <div className='flex  flex-col items-center justify-center -ml-2'>
          <p className='sm:text-[16px] max-sm:text-[14px] text-[#5A382F] font-bold'>OUD STORE HICH</p>
           <p className='sm:text-[16px]  max-sm:text-[14px] opacity-50 font-black'>عــــود های دست ساز</p>
          </div>

        </div> */}
    
      {/* <div className=" w-full max-sm:hidden sm:flex md:justify-center md:gap-8 max-md:justify-evenly  py-6 ">
        {products.map(product => (
          <div key={product.id} className="min-w-[290px] max-w-[500px] shadow-lg  ">
            <div className=' w-full flex justify-between items-center '>
             <div className='flex items-center text-white'>
              <p className=' text-[28px]'>{product.number}</p>
              <p className='px-1 text-[12px] pt-1'>{product.name}</p></div>
             <p className='text-white text-[12px] mt-5'>{product.text}</p>
            </div>
            <img src={product.img} alt={product.name} 
            className="w-full h-52 object-cover border-4 border-[#886b41] " />
            <div className='py-[2px]'>
             <p className='text-white text-[12px]'>PRICE : {product.price} </p>              
            </div>
          </div>
        ))}
      </div> */}


   <div className="w-full max-sm:hidden sm:flex md:justify-center sm:gap-8 mx-2 max-md:justify-evenly py-6">
        {products.map(product => (
          <div key={product.id} className="min-w-[250px] max-w-[320px] lg:max-w-[350px] shadow-lg">
            <div className=' w-full flex justify-between items-center '>
             <div className='flex items-center text-white'>
              <p className=' text-[28px]'>{product.number}</p>
              <p className='px-1 text-[12px] pt-1'>{product.name}</p></div>
             <p className='text-white text-[12px] mt-5'>{product.text}</p>
            </div>
            <img src={product.img} alt={product.name} 
            className="aspect-square object-cover border-4 border-[#886b41]" />
            <div className='py-[2px]'>
             <p className='text-white text-[12px]'>PRICE : {product.price} </p>              
            </div>
          </div>
        ))}
      </div>


{/* <div className=" max-sm:hidden sm:flex md:justify-center md:gap-8 max-md:justify-evenly py-6">
  {products.map(product => (
    <div key={product.id} className="border border-red-500 shadow-lg">
      <div className="  flex justify-between items-center px-4 pt-4">
        <div className="flex items-center text-white ">
          <p className="text-[28px]">{product.number}</p>
          <p className="px-1 text-[12px] pt-1">{product.name}</p>
        </div>
        <p className="text-white text-[12px]">{product.text}</p>
      </div>
      <div className=" aspect-[5/3]">
        <img
          src={product.img}
          alt={product.name}
          className=" h-full object-contain border-4 border-[#886b41] border-solid"
        />
      </div>
      <div className="px-4 py-[2px]">
        <p className="text-white text-[12px]">PRICE: {product.price}</p>
      </div>
    </div>
  ))}
</div>
      */}
      <div className=" mx-auto p-5 sm:hidden max-w-[350px] min-w-[300px]">
        <Slider {...settings}>
          {products.map(product => (
            <div key={product.id} className="shadow-lg w-full focus:outline-none ">
               <div className=' w-full flex justify-between items-center '>
             <div className='flex items-center text-white'>
              <p className=' text-[28px]'>{product.number}</p>
              <p className='px-1 text-[12px] pt-1'>{product.name}</p></div>
             <p className='text-white text-[12px] mt-5'>{product.text}</p>
            </div>
              <img src={product.img} alt={product.name} className="aspect-square object-cover border-4 border-[#886b41] " />
              <div className='py-[2px]'>
             <p className='text-white text-[12px]'>PRICE : {product.price} </p>              
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}