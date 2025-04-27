import React, { useState, useEffect } from "react";
import { products } from "./Data";
import { useParams } from "react-router-dom";


export default function Cart() {


  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const previewItems = Array(count).fill({
    name: "قهوه موکا",
    price: 238,
  
  });
   
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center py-10">محصول پیدا نشد!</div>;
  }


  const oudData = {
    title: `عود دست‌ساز "${product.name}" — عطری جادویی برای لحظات خاص`,
    attributes: [
      { label: "وزن", value: "۵۰ گرم (تقریباً ۲۰ شاخه عود)" },
      { label: "نوع", value: "دست‌ساز، طبیعی" },
      { label: "کد محصول", value: product.number.toString() },
    ],
    details: [
      {
        label: "رایحه",
        value: "ترکیبی دل‌انگیز از چوب‌های معطر و نت‌های گرم و آرامش‌بخش",
      },
      { label: "مدت زمان سوختن", value: "هر شاخه حدود ۴۵ دقیقه" },
      {
        label: "مناسب برای",
        value: product.text.toLowerCase() === 'meditation'
          ? "مدیتیشن، آرامش ذهن"
          : product.text.toLowerCase() === 'yoga'
          ? "یوگا، تمرکز"
          : "اسپا، ریلکسیشن",
      },
    ],
  };

  // تعیین تعداد آیتم‌های نمایش‌داده‌شده بر اساس عرض صفحه
  const [maxItems, setMaxItems] = useState(3); // پیش‌فرض: ۳ برای موبایل

  useEffect(() => {
    const updateMaxItems = () => {
      // برای سایزهای بزرگ‌تر از md (معمولاً 768px به بالا)
      if (window.innerWidth >= 768) {
        setMaxItems(5); // نمایش ۵ آیتم در دسکتاپ
      } else {
        setMaxItems(3); // نمایش ۳ آیتم در موبایل
      }
    };

    // اجرای اولیه
    updateMaxItems();

    // گوش دادن به تغییرات اندازه صفحه
    window.addEventListener("resize", updateMaxItems);

    // پاکسازی هنگام unmount
    return () => window.removeEventListener("resize", updateMaxItems);
  }, []);



  return (
    <div className=" w-full border-8 border-sky-800 py-6 " dir="rtl">
      <div className="flex items-center justify-around border-2 gap-4 flex-wrap ">
      {/*  */}
      <div className="flex gap-2 items-center flex-wrap justify-center">
      <div className="max-md:min-w-[280px] max-md:max-w-[400px] md:min-w-[350px] md:max-w-[450px] border-2 border-red-800">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center ">
            <p className="text-[32px] text-[#adbcb5] bg-[#886b41] m-1 px-1 ">
             {product.number}
            </p>
            <p className="px-1 text-[16px] pt-1 text-gray-900">COMMOMILA</p>
          </div>
        </div>
        <img
          src={product.img}
          alt=""
          className="w-full md:h-60 max-md:h-56  border-6 border-[#adbcb5]"
        />
      </div>
      {/*  */}
      <div className=" text-right flex flex-col gap-10  border border-green-800 md:-mt-4">
        <h2 className=" text-gray-800 border-b sm:text-[18px] max-sm:text-[16px] pb-2">
          {oudData.title.split('"')[0]}
          <span className="text-[#886b41]">
            "{oudData.title.split('"')[1]}"
          </span>
          {oudData.title.split('"')[2]}
        </h2>
        <div>
          <div className="text-right sm:text-[16px] max-sm:text-[14px] text-gray-800">
            {oudData.attributes.map((item, index) => (
              <p key={index}>
                <span className="text-[#886b41] pl-1">{item.label}:</span>{" "}
                {item.value}
              </p>
            ))}
          </div>

          <div className="text-right sm:text-[16px] max-sm:text-[14px] text-gray-800 ">
            {oudData.details.map((item, index) => (
              <p key={index}>
                <span className="text-[#886b41] pl-1">{item.label}:</span>{" "}
                {item.value}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>     

       
      <div className="flex flex-col items-center gap-4 p-4  ">
        {/* عنوان */}
        <h2 className="text-lg font-bold text-gray-800">قهوه موکا: 238 قنات</h2>

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
        <button className="px-4 py-2 bg-[#8B5A2B] text-white rounded-lg hover:bg-[#704822] transition-colors">
          سبد خرید
        </button>

        {/* متن پایین */}
        <p className="text-sm text-gray-600">ارسال رایگان با حداقل سفارش</p>
      </div>
      </div>

   <div className="border-2 col-span-full flex max-sm:flex-col justify-center gap-6">
  
      {/* پیش‌نمایش سفارش‌ها در پایین صفحه */}
      {count > 0 && (
        <div className="overflow-auto max-sm:w-full sm:max-w-[650px] am:min-w-[450px] border border-red-800">
          <div className="flex md:gap-3 justify-evenly items-center">
            {/* نمایش آیتم‌ها تا maxItems */}
            {previewItems.slice(0, maxItems).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 min-w-[80px]"
              >
                <img
                 src={product.img}
                  alt={item.name}
                  className="w-12 h-12 object-cover"
                />
                <span className="text-sm text-gray-700">{item.name}</span>
              </div>
            ))}
            {/* نمایش نشانه "بیشتر" اگر آیتم‌های بیشتری وجود داشته باشد */}
            {previewItems.length > maxItems && (
              <div className="flex flex-col items-center gap-1 min-w-[80px]">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                  <span className="text-sm text-gray-500">
                    +{previewItems.length - maxItems}
                  </span>
                </div>
                <span className="text-sm text-gray-700">بیشتر</span>
              </div>
            )}
          </div>
        </div>
      )}
     <div className="sm:w-1/2 border flex items-center sm:justify-end max-sm:justify-center sm:px-6">
    <img src="../img/icon/1.png" alt="" className="h-[90px]" />
   </div>

  </div>
      </div>
  
  );
}
