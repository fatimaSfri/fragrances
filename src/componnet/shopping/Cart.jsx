import React, { useState } from 'react';

export default function Cart() {

    const productImage = './img/product/meditation.jpg'; // لینک تصویر محصول

      const [count, setCount] = useState(0); // تعداد سفارش
    
      const handleIncrement = () => {
        setCount(count + 1);
      };
    
      const handleDecrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };
    
      // آرایه‌ای برای رندر پیش‌نمایش بر اساس تعداد
      const previewItems = Array(count).fill({
        name: 'قهوه موکا',
        price: 238,
        image: productImage,
      });

    const oudData = {
        title: 'عود دست‌ساز از "راز لحظه‌ها" — عطری جادویی برای لحظات خاص',
        attributes: [
          { label: 'وزن', value: '۵۰ گرم (تقریباً ۲۰ شاخه عود)' },
          { label: 'نوع', value: 'دست‌ساز، طبیعی' },
          { label: 'کد محصول', value: '۸۷' },
        ],
        details: [
          { label: 'رایحه', value: 'ترکیبی دل‌انگیز از چوب‌های معطر و نت‌های گرم و آرامش‌بخش' },
          { label: 'مدت زمان سوختن', value: 'هر شاخه حدود ۴۵ دقیقه' },
          { label: 'مناسب برای', value: 'مدیتیشن، یوگا، آرامش ذهن، و ایجاد فضای دل‌انگیز' },
        ],
      };
      
  return (
    <div className="grid grid-cols-3 gap-6 items-end w-full border border-red-800 py-10">
        
        {/*  */}
        <div className="flex flex-col items-center gap-4 p-4 min-h-screen">
      {/* عنوان */}
      <h2 className="text-lg font-bold text-gray-800">
        قهوه موکا: 238 قنات
      </h2>

      {/* بخش کانتر */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleDecrement}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-xl font-semibold text-gray-600 hover:bg-gray-300"
        >
          -
        </button>
        <span className="text-lg font-medium">{count}</span>
        <button
          onClick={handleIncrement}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-xl font-semibold text-gray-600 hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* دکمه سبد خرید */}
      <button
        className="px-4 py-2 bg-[#8B5A2B] text-white rounded-lg hover:bg-[#704822] transition-colors"
      >
        سبد خرید
      </button>

      {/* متن پایین */}
      <p className="text-sm text-gray-600">
        ارسال رایگان با حداقل سفارش
      </p>

      {/* پیش‌نمایش سفارش‌ها در پایین صفحه */}
      {count > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg border-t border-gray-200">
          <h3 className="text-md font-semibold mb-2">پیش‌نمایش سفارش‌ها</h3>
          <div className="flex gap-3 overflow-x-auto">
            {previewItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 min-w-[80px]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-full"
                />
                <span className="text-sm text-gray-700">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>


{/*  */}
        <div className="mx-auto text-right flex flex-col gap-10  border border-red-800">
      <h2 className=" text-gray-800 border-b sm:text-[18px] max-sm:text-[16px] pb-2">
        {oudData.title.split('"')[0]}
        <span className="text-[#886b41]">"{oudData.title.split('"')[1]}"</span>
        {oudData.title.split('"')[2]}
      </h2>
     <div>
      <div className="text-right sm:text-[16px] max-sm:text-[14px] text-gray-800">
        {oudData.attributes.map((item, index) => (
          <p key={index} >
            <span className="text-[#886b41] pl-1">{item.label}:</span> {item.value}
          </p>
        ))}
      </div>

      <div className="text-right sm:text-[16px] max-sm:text-[14px] text-gray-800 ">
        {oudData.details.map((item, index) => (
          <p key={index}>
            <span className="text-[#886b41] pl-1">{item.label}:</span> {item.value}
          </p>
        ))}
      </div>
    </div>
    </div>
        <div className="min-w-[200px] max-w-[350px] border border-red-800">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center ">
                <p className="text-[32px] text-[#adbcb5] bg-[#886b41] m-1 px-1 ">87</p>
                <p className="px-1 text-[16px] pt-1 text-gray-900">COMMOMILA</p>
              </div>
            </div>
            <img
              src='./img/product/meditation.jpg'
              alt=''
              className="w-full h-52 object-cover border-6 border-[#adbcb5]"
            />
          </div>
    </div>
  )
}
