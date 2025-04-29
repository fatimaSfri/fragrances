import React from 'react';

const ProductDescription = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6 pb-20">
      <div className="w-full flex justify-end mb-2 select-none">
        <div className="inline-flex items-center gap-2 text-[#886b41] text-[20px]">
          <span>توضیحات بیشتر محصول</span>
          <div className="flex">
            <div className="h-1 w-2 bg-[#46493e] rounded-l-full"></div>
            <div className="h-1 w-2 bg-[#caab7f]"></div>
            <div className="h-1 w-2 bg-[#5a372f]"></div>
            <div className="h-1 w-2 bg-[#adbcb5] rounded-r-full"></div>
          </div>
        </div>
      </div>

      <p className="text-right text-gray-600 text-xs leading-relaxed max-w-4xl mx-auto">
        تجربه‌ای فراموش نشدنی با رایحه‌ای خاص{' '}
        <br />
        عود راز لحظه‌ها، با ترکیبی منحصر‌به‌فرد از روایح چوبی و شرقی، فضایی رویایی و دلپذیر برای شما ایجاد می‌کند. هر شاخۀ این عود، آرامشی عمیق و لحظاتی ناب را به شما هدیه می‌دهد
        <br />
      </p>

      <p className="text-right text-gray-600 text-xs leading-relaxed max-w-4xl mx-auto flex justify-end">
       طبیعی و بدون مواد شیمیایی مضر
        <p>100%</p>
      </p>

      <p className="text-right text-gray-600 text-xs leading-relaxed max-w-4xl mx-auto">
        دود ملایم و ماندگاری طولانی
      </p>

   
    </div>
  );
};

export default ProductDescription;