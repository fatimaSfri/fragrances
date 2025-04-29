import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    id: 1,
    name: 'همیسا',
    img1: '../img/product/moment.jpg', 
  },
  {
    id: 2,
    name: 'هژیران',
    img1: '../img/product/family.jpg', 
  },
  {
    id: 3,
    name: 'هرمان',
    img1: '../img/product/nature.jpg', 
  },
];



const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow-md transition-colors duration-300 select-none"
      style={{ boxShadow: '0 0 5px rgba(0,0,0,0.2)' }}
    >
      <svg
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-600"
      >
        <path
          d="M1 1L10 10L1 19"
          stroke="#4B5563"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-[#7B5E3C] hover:bg-[#6a4f31] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow-md transition-colors duration-300 select-none"
      style={{ boxShadow: '0 0 5px rgba(123,94,60,0.7)' }}
    >
      <svg
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path
          d="M11 1L2 10L11 19"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768, // سایز صفحه نمایش
        settings: {
          slidesToShow: 1, // نمایش یک المان در سایز کوچک
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className=" border border-red-800 flex flex-col items-center ">
      <div className="text-center text-[#886b41] md:text-[24px] max-md:text-[18px] m-4 flex items-center justify-center gap-2 select-none ">
      <div className="flex">
            <div className="h-1 w-2 bg-[#46493e] rounded-l-full"></div>
            <div className="h-1 w-2 bg-[#caab7f]"></div>
            <div className="h-1 w-2 bg-[#5a372f]"></div>
            <div className="h-1 w-2 bg-[#adbcb5] rounded-r-full"></div>
          </div>
        رایحه ی بی نظیر مشابه این محصول
        <div className="flex">
            <div className="h-1 w-2 bg-[#46493e] rounded-l-full"></div>
            <div className="h-1 w-2 bg-[#caab7f]"></div>
            <div className="h-1 w-2 bg-[#5a372f]"></div>
            <div className="h-1 w-2 bg-[#adbcb5] rounded-r-full"></div>
          </div>
      </div>

      <div className="relative border border-red-800 w-10/12 ">
        <Slider {...settings}>
          {products.map(({ id, name, img1 }) => (
            <div key={id} className="px-2">
              <div
                className=""
              >
                <div className="flex justify-center items-center sm:max-w-[400px] sm:min-w-[300px] max-sm:w-full">
                  <img
                    src={img1}
                    alt={`${name} product 1`}
                   className="w-full h-52 object-cover border-6 border-[#886b41]  "
                  />
                </div>
              </div>
              <p
                  className="text-center mt-2 text-sm text-gray-700 select-none"
                >
                  {name}
                </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;