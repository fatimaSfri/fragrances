// import React, { useState, useEffect } from "react";
// import { products } from "./Data";
// import { useParams } from "react-router-dom";


// export default function Cart() {


//   const [count, setCount] = useState(0);
//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   const previewItems = Array(count).fill({
//     name: "قهوه موکا",
//     price: 238,
  
//   });
   
//   const { id } = useParams();
//   const product = products.find(p => p.id === parseInt(id));

//   if (!product) {
//     return <div className="text-center py-10">محصول پیدا نشد!</div>;
//   }


//   const oudData = {
//     title: `عود دست‌ساز "${product.name}" — عطری جادویی برای لحظات خاص`,
//     attributes: [
//       { label: "وزن", value: "۵۰ گرم (تقریباً ۲۰ شاخه عود)" },
//       { label: "نوع", value: "دست‌ساز، طبیعی" },
//       { label: "کد محصول", value: product.number.toString() },
//     ],
//     details: [
//       {
//         label: "رایحه",
//         value: "ترکیبی دل‌انگیز از چوب‌های معطر و نت‌های گرم و آرامش‌بخش",
//       },
//       { label: "مدت زمان سوختن", value: "هر شاخه حدود ۴۵ دقیقه" },
//       {
//         label: "مناسب برای",
//         value: product.text.toLowerCase() === 'meditation'
//           ? "مدیتیشن، آرامش ذهن"
//           : product.text.toLowerCase() === 'yoga'
//           ? "یوگا، تمرکز"
//           : "اسپا، ریلکسیشن",
//       },
//     ],
//   };

//   // تعیین تعداد آیتم‌های نمایش‌داده‌شده بر اساس عرض صفحه
//   const [maxItems, setMaxItems] = useState(3); // پیش‌فرض: ۳ برای موبایل

//   useEffect(() => {
//     const updateMaxItems = () => {
//       // برای سایزهای بزرگ‌تر از md (معمولاً 768px به بالا)
//       if (window.innerWidth >= 768) {
//         setMaxItems(5); // نمایش ۵ آیتم در دسکتاپ
//       } else {
//         setMaxItems(3); // نمایش ۳ آیتم در موبایل
//       }
//     };

//     // اجرای اولیه
//     updateMaxItems();

//     // گوش دادن به تغییرات اندازه صفحه
//     window.addEventListener("resize", updateMaxItems);

//     // پاکسازی هنگام unmount
//     return () => window.removeEventListener("resize", updateMaxItems);
//   }, []);


//   return (
    
//     <div className=" w-full  border-b-2 border-[#adbcb5] pt-6 pb-2 " dir="rtl">
//       <div className="flex items-center justify-around   gap-4 flex-wrap ">
//       {/*  */}
//       <div className="flex gap-6 items-center flex-wrap justify-center">
//       <div className=" min-w-[200px] max-w-[300px] ">
//         <div className="w-full flex justify-between items-center">
//           <div className="flex items-center ">
//             <p className="text-[32px] text-[#adbcb5] bg-[#886b41] m-1 px-1 ">
//              {product.number}
//             </p>
//             <p className="px-1 text-[16px] pt-1 text-gray-900">COMMOMILA</p>
//           </div>
//         </div>
//         <img
//           src={product.img}
//           alt=""
//           className="aspect-square object-cover border-6 border-[#adbcb5]"
//         />
//       </div>
//       {/*  */}
//       <div className=" text-right flex flex-col gap-10 md:-mt-4 max-sm:p-8 ">
//         <h2 className=" text-gray-800 border-b sm:text-[18px] max-sm:text-[16px] pb-2">
//           {oudData.title.split('"')[0]}
//           <span className="text-[#886b41]">
//             "{oudData.title.split('"')[1]}"
//           </span>
//           {oudData.title.split('"')[2]}
//         </h2>
//         <div>
//           <div className="text-right sm:text-[16px] max-sm:text-[14px] text-gray-800">
//             {oudData.attributes.map((item, index) => (
//               <p key={index}>
//                 <span className="text-[#886b41] pl-1">{item.label}:</span>{" "}
//                 {item.value}
//               </p>
//             ))}
//           </div>

//           <div className="text-right sm:text-[16px] max-sm:text-[14px] text-gray-800 ">
//             {oudData.details.map((item, index) => (
//               <p key={index}>
//                 <span className="text-[#886b41] pl-1">{item.label}:</span>{" "}
//                 {item.value}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>     

       
//       <div className="flex flex-col items-center gap-4 p-4  ">
//         {/* عنوان */}
//         <p className="md:text-[20px] max-md:text-[18px]  text-[#886b41] w-full text-center">قیمــت محصول  :  <span className="text-gray-800">{product.price} تومـــان</span> </p>

//         {/* بخش کانتر */}
//         <div className="flex  gap-2 items-center">
          
//         <div className="flex items-center gap-3 border-2 rounded-lg border-[#886b41]">
//           <button
//             onClick={handleDecrement}
//             className="w-4 h-6 flex items-center justify-center rounded-lg text-xl font-semibold text-gray-800 hover:bg-gray-300 cursor-pointer"
//           >
//             -
//           </button>
//           <span className="font-medium">{count}</span>
//           <button
//             onClick={handleIncrement}
//             className="w-4 h-6 flex items-center justify-center rounded-lg text-xl font-semibold text-gray-800 hover:bg-gray-300 cursor-pointer"
//           >
//             +
//           </button>
//         </div>
//         <p className="md:text-[16px] max-md:text-[14px]">تعداد محصول سبد</p>
//         </div>

//         {/* دکمه سبد خرید */}
//         <button className="w-full py-1 bg-[#8B5A2B] text-white rounded-lg hover:bg-[#704822] transition-colors md:text-[18px] max-md:text-[16px]">
//            سفارش محصول
//         </button>

//         {/* متن پایین */}
//         <p className="md:text-[16px] max-md:text-[14px] text-gray-600" >ارســــال رایــگــان بــه کـــل ایـــــران </p>
//       </div>
//       </div>

//    <div className=" col-span-full flex max-sm:flex-col justify-between gap-6">
//    <div className="overflow-auto max-sm:w-full sm:max-w-[750px] sm:min-w-[550px]  md:pr-8  flex items-center max-md:justify-center" >
//       {/* پیش‌نمایش سفارش‌ها در پایین صفحه */}
//       {count > 0 && (
//           <div className="flex gap-2 items-center max-md:justify-center ">
//             {/* نمایش آیتم‌ها تا maxItems */}
//             {previewItems.slice(0, maxItems).map((item, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center gap-1 min-w-[80px]"
//               >
//                 <img
//                  src={product.img}
//                   alt={item.name}
//                   className="w-12 h-12 object-cover border-2 border-[#adbcb5]"
//                 />
//               </div>
//             ))}
//             {/* نمایش نشانه "بیشتر" اگر آیتم‌های بیشتری وجود داشته باشد */}
//             {previewItems.length > maxItems && (
//               <div className="flex flex-col items-center gap-1 min-w-[80px]">
//                 <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
//                   <span className="text-[16px] text-gray-500">
//                     +{previewItems.length - maxItems}
//                   </span>
//                 </div>
//                 <span className="text-[12px] text-gray-700">بیشتر</span>
//               </div>
//             )}
//           </div>
//       )} </div>
//      <div className="px-10 flex flex-col items-center sm:justify-end max-sm:justify-center max-md:mx-auto ">
//     <img src="../img/icon/1.png" alt="" className="h-[80px]" />
//      <p className="Kalameh-thin text-[16px]  sm:tracking-widest">professional Handmode perfumes</p>
//    </div>

//   </div>
//       </div>
  
//   );
// }



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

  // آرایه ثابت برای تصاویر پیش‌نمایش
  const previewItems = Array(5).fill({
    name: "قهوه موکا",
    price: 238,
  });

  // تعیین تعداد آیتم‌های نمایش‌داده‌شده بر اساس عرض صفحه
  const [maxItems, setMaxItems] = useState(3);

  useEffect(() => {
    const updateMaxItems = () => {
      if (window.innerWidth >= 768) {
        setMaxItems(5); // نمایش ۵ آیتم در دسکتاپ
      } else {
        setMaxItems(3); // نمایش ۳ آیتم در موبایل
      }
    };

    updateMaxItems();
    window.addEventListener("resize", updateMaxItems);
    return () => window.removeEventListener("resize", updateMaxItems);
  }, []);

  return (
    <div className="w-full border-b-2 border-[#adbcb5] pt-6 pb-2" dir="rtl">
      <div className="flex items-center justify-around gap-4 flex-wrap">
        <div className="flex gap-6 items-center flex-wrap justify-center">
          <div className="min-w-[200px] max-w-[300px]">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center">
                <p className="text-[32px] text-[#adbcb5] bg-[#886b41] m-1 px-1">
                  {product.number}
                </p>
                <p className="px-1 text-[16px] pt-1 text-gray-900">COMMOMILA</p>
              </div>
            </div>
            <img
              src={product.img}
              alt=""
              className="aspect-square object-cover border-6 border-[#adbcb5]"
            />
          </div>
          <div className="text-right flex flex-col gap-10 md:-mt-4 max-sm:p-8">
            <h2 className="text-gray-800 border-b sm:text-[18px] max-sm:text-[16px] pb-2">
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
              <div className="text-right sm:text-[16px] max-sm:text-[14px] text-gray-800">
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
        <div className="flex flex-col items-center gap-4 p-4">
          <p className="md:text-[20px] max-md:text-[18px] text-[#886b41] w-full text-center">
            قیمــت محصول : <span className="text-gray-800">{product.price} تومـــان</span>
          </p>
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-3 border-2 rounded-lg border-[#886b41]">
              <button
                onClick={handleDecrement}
                className="w-4 h-6 flex items-center justify-center rounded-lg text-xl font-semibold text-gray-800 hover:bg-gray-300 cursor-pointer"
              >
                -
              </button>
              <span className="font-medium">{count}</span>
              <button
                onClick={handleIncrement}
                className="w-4 h-6 flex items-center justify-center rounded-lg text-xl font-semibold text-gray-800 hover:bg-gray-300 cursor-pointer"
              >
                +
              </button>
            </div>
            <p className="md:text-[16px] max-md:text-[14px]">تعداد محصول سبد</p>
          </div>
          <button className="w-full py-1 bg-[#8B5A2B] text-white rounded-lg hover:bg-[#704822] transition-colors md:text-[18px] max-md:text-[16px]">
            سفارش محصول
          </button>
          <p className="md:text-[16px] max-md:text-[14px] text-gray-600">
            ارســــال رایــگــان بــه کـــل ایـــــران
          </p>
        </div>
      </div>
      <div className="col-span-full flex max-sm:flex-col justify-between gap-6">
        <div className="overflow-auto max-sm:w-full sm:max-w-[750px] sm:min-w-[550px] md:pr-8 flex items-center max-md:justify-center">
          <div className="flex gap-2 items-center max-md:justify-center">
            {previewItems.slice(0, maxItems).map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 min-w-[70px]"
              >
                <img
                  src={product.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover border-2 border-[#adbcb5]"
                />
              </div>
            ))}
            
          </div>
        </div>
        <div className="px-10 flex flex-col items-center sm:justify-end max-sm:justify-center max-md:mx-auto">
          <img src="../img/icon/1.png" alt="" className="h-[80px]" />
          <p className="Kalameh-thin text-[16px] sm:tracking-widest">
            professional Handmode perfumes
          </p>
        </div>
      </div>
    </div>
  );
}