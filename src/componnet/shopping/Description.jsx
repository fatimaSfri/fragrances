import React from 'react';

const ProductDescription = () => {
  return (
    <div className="md:w-10/12 max-md:w-11/12  mx-auto  py-6 pb-20 ">
      <div className="w-full flex  mb-2 select-none">
        <div className="inline-flex items-center gap-2 text-[#886b41] text-[20px] relative md:-mr-14">
         
          <div className="flex ">
            <div className="md:h-2 max-md:h-1 md:w-3 max-md:w-2 bg-[#46493e] rounded-r-full"></div>
            <div className="md:h-2 max-md:h-1 md:w-3 max-md:w-2 bg-[#caab7f]"></div>
            <div className="md:h-2 max-md:h-1 md:w-3 max-md:w-2 bg-[#5a372f]"></div>
            <div className="md:h-2 max-md:h-1 md:w-3 max-md:w-2 bg-[#adbcb5] rounded-l-full"></div>
          </div>
          <span>توضیحات بیشتر محصول</span>
        </div>

      </div>
      <p className="text-right text-gray-600  leading-relaxed  mx-auto">
        تجربه‌ای فراموش نشدنی با رایحه‌ای خاص{' '}
        <br />
        عود راز لحظه‌ها، با ترکیبی منحصر‌به‌فرد از روایح چوبی و شرقی، فضایی رویایی و دلپذیر برای شما ایجاد می‌کند. هر شاخۀ این عود، آرامشی عمیق و لحظاتی ناب را به شما هدیه می‌دهد
        <br />
      </p>

      <p className="text-right text-gray-600 leading-relaxed  mx-auto flex ">
       طبیعی و بدون مواد شیمیایی مضر
        <p>100%</p>
      </p>

      <p className="text-right text-gray-600 leading-relaxed  mx-auto">
        دود ملایم و ماندگاری طولانی
      </p>

   
    </div>
  );
};

export default ProductDescription;