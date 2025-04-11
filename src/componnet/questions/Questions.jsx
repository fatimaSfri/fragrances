

// import React, { useState } from "react";

// // سوالات و گزینه‌ها
// const questions = [
//   { id: 1, text: "سوال ۱: رنگ مورد علاقه شما چیست؟", options: ["قرمز", "آبی", "سبز"] },
//   { id: 2, text: "سوال ۲: حیوان مورد علاقه شما چیست؟", options: ["سگ", "گربه", "پرنده"] },
//   { id: 3, text: "سوال ۳: فصل مورد علاقه شما چیست؟", options: ["بهار", "تابستان", "پاییز"] },
//   { id: 4, text: "سوال ۴: غذای مورد علاقه شما چیست؟", options: ["پیتزا", "سوشی", "سالاد"] },
// ];

// // تابع برای تولید خودکار محصولات
// const generateProducts = () => {
//   const products = {};
//   const options = [0, 1, 2]; // گزینه‌های ممکن (0, 1, 2)

//   for (let i = 0; i < options.length; i++) {
//     for (let j = 0; j < options.length; j++) {
//       for (let k = 0; k < options.length; k++) {
//         for (let l = 0; l < options.length; l++) {
//           const key = `${i},${j},${k},${l}`;
//           products[key] = {
//             name: `محصول ${i + 1}-${j + 1}-${k + 1}-${l + 1}`,
//             description: `این محصول برای افرادی است که گزینه ${questions[0].options[i]} (رنگ)، ${questions[1].options[j]} (حیوان)، ${questions[2].options[k]} (فصل)، و ${questions[3].options[l]} (غذا) را انتخاب کرده‌اند.`,
//             image: `https://via.placeholder.com/300?text=محصول+${i + 1}-${j + 1}-${k + 1}-${l + 1}`,
//           };
//         }
//       }
//     }
//   }

//   return products;
// };

// const products = generateProducts();

// const Questionnaire = () => {
//   const [answers, setAnswers] = useState([null, null, null, null]);

//   // تابع برای تغییر پاسخ‌ها
//   const handleAnswerChange = (questionIndex, optionIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[questionIndex] = optionIndex;
//     setAnswers(newAnswers);
//   };

//   // بررسی آیا همه سوالات پاسخ داده شده‌اند
//   const isComplete = answers.every((answer) => answer !== null);

//   // محصول انتخاب شده بر اساس پاسخ‌ها
//   const selectedProduct = isComplete ? products[answers.join(",")] : null;

//   return (
//     <div className="min-h-screen bg-gray-100 py-8 px-4">
//       <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-center mb-6">پرسشنامه انتخاب محصول</h1>
//         {questions.map((question, qIndex) => (
//           <div key={question.id} className="mb-6">
//             <h3 className="text-lg font-semibold mb-2">{question.text}</h3>
//             <div className="space-y-2">
//               {question.options.map((option, oIndex) => (
//                 <button
//                   key={oIndex}
//                   className={`w-full py-2 px-4 rounded-lg transition-colors ${
//                     answers[qIndex] === oIndex
//                       ? "bg-blue-500 text-white"
//                       : "bg-gray-200 hover:bg-gray-300"
//                   }`}
//                   onClick={() => handleAnswerChange(qIndex, oIndex)}
//                 >
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//         {isComplete && selectedProduct && (
//           <div className="mt-8 text-center">
//             <h2 className="text-xl font-bold mb-4">محصول پیشنهادی برای شما:</h2>
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <img
//                 src={selectedProduct.image}
//                 alt={selectedProduct.name}
//                 className="w-48 h-48 mx-auto mb-4 rounded-lg"
//               />
//               <h3 className="text-lg font-semibold">{selectedProduct.name}</h3>
//               <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Questionnaire;



// import React, { useState } from "react";

// // سوالات و گزینه‌ها (هر سوال ۴ گزینه)
// const questions = [
//   {
//     id: 1,
//     text: "رنگ مورد علاقه شما چیست؟",
//     options: ["قرمز", "آبی", "سبز", "زرد"],
//   },
//   {
//     id: 2,
//     text: "حیوان مورد علاقه شما چیست؟",
//     options: ["سگ", "گربه", "پرنده", "ماهی"],
//   },
//   {
//     id: 3,
//     text: "فصل مورد علاقه شما چیست؟",
//     options: ["بهار", "تابستان", "پاییز", "زمستان"],
//   },
//   {
//     id: 4,
//     text: "غذای مورد علاقه شما چیست؟",
//     options: ["پیتزا", "سوشی", "سالاد", "برگر"],
//   },
// ];

// // رنگ‌های کاستوم برای تیک و مرز هر سوال
// const tickColors = ["#EF4444", "#3B82F6", "#10B981", "#F59E0B"]; // قرمز، آبی، سبز، زرد

// // لیست نام‌های خاص و تصاویر برای محصولات (نمونه)
// const productDetails = [
//   {
//     key: "0,0,0,0",
//     name: "ستاره سرخ",
//     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
//   },
//   {
//     key: "0,0,0,1",
//     name: "برگر آتشین",
//     image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
//   },
//   {
//     key: "0,0,0,2",
//     name: "سالاد بهشتی",
//     image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
//   },
//   {
//     key: "0,0,0,3",
//     name: "سوشی اقیانوس",
//     image: "https://images.unsplash.com/photo-1579584425555-c3ce97fd2f75",
//   },
//   {
//     key: "1,1,1,1",
//     name: "گربه آبی",
//     image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
//   },
//   {
//     key: "2,2,2,2",
//     name: "باغ سبز",
//     image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
//   },
//   {
//     key: "3,3,3,3",
//     name: "زمستان زرد",
//     image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
//   },
// ];

// // تابع برای تولید خودکار محصولات
// const generateProducts = () => {
//   const products = {};
//   const options = [0, 1, 2, 3];

//   for (let i of options) {
//     for (let j of options) {
//       for (let k of options) {
//         for (let l of options) {
//           const key = `${i},${j},${k},${l}`;
//           const productDetail = productDetails.find((p) => p.key === key) || {
//             name: `محصول ${i + 1}-${j + 1}-${k + 1}-${l + 1}`,
//             image: "https://via.placeholder.com/300?text=محصول+پیش‌فرض",
//           };
//           products[key] = {
//             name: productDetail.name,
//             description: `این محصول برای افرادی است که گزینه ${questions[0].options[i]} (رنگ)، ${questions[1].options[j]} (حیوان)، ${questions[2].options[k]} (فصل)، و ${questions[3].options[l]} (غذا) را انتخاب کرده‌اند.`,
//             image: productDetail.image,
//           };
//         }
//       }
//     }
//   }
//   return products;
// };

// const products = generateProducts();

// // تابع برای انتخاب سه محصول مرتبط
// const getSuggestedProducts = (answers, products) => {
//   const matchedProducts = [];
//   const answerKey = answers.join(",");

//   if (products[answerKey]) {
//     matchedProducts.push(products[answerKey]);
//   }

//   Object.keys(products).forEach((key) => {
//     if (key === answerKey) return;
//     const keyParts = key.split(",").map(Number);
//     if (
//       keyParts[0] === answers[0] ||
//       keyParts[1] === answers[1] ||
//       keyParts[2] === answers[2] ||
//       keyParts[3] === answers[3]
//     ) {
//       matchedProducts.push(products[key]);
//     }
//   });

//   while (matchedProducts.length < 3) {
//     const randomKey = Object.keys(products)[
//       Math.floor(Math.random() * Object.keys(products).length)
//     ];
//     if (!matchedProducts.includes(products[randomKey])) {
//       matchedProducts.push(products[randomKey]);
//     }
//   }

//   const shuffled = matchedProducts.sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, 3);
// };

// const Questionnaire = () => {
//   const [answers, setAnswers] = useState([null, null, null, null]);

//   // تابع برای تغییر پاسخ‌ها
//   const handleAnswerChange = (questionIndex, optionIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[questionIndex] = optionIndex;
//     setAnswers(newAnswers);
//   };

//   // بررسی آیا همه سوالات پاسخ داده شده‌اند
//   const isComplete = answers.every((answer) => answer !== null);

//   // انتخاب سه محصول پیشنهادی
//   const suggestedProducts = isComplete ? getSuggestedProducts(answers, products) : [];

//   return (
//     <div
//       dir="rtl"
//       className="bg-gray-300"
//     >
//       <div className="border-2 border-red-900 md:px-16 max-md:px-2">
//         <div className="flex items-center justify-center gap-2 ">
//            <div className="flex">
//             <div className="w-2 h-2 bg-[#46493e] rounded-s-lg"></div>
//             <div className="w-2 h-2 bg-[#caab7f]"></div>
//             <div className="w-2 h-2 bg-[#5a382f]"></div>
//             <div className="w-2 h-2 bg-[#adbcb5] rounded-e-lg"></div>
//            </div>
//         <h1 className=" text-center py-6  text-[18px] font-bold">
//             رایحــــــه ی دلــخواهتـــو انـتــخـــاب کـــن
//         </h1>
//         <div className="flex">
//             <div className="w-2 h-2 bg-[#46493e] rounded-s-lg"></div>
//             <div className="w-2 h-2 bg-[#caab7f]"></div>
//             <div className="w-2 h-2 bg-[#5a382f]"></div>
//             <div className="w-2 h-2 bg-[#adbcb5] rounded-e-lg"></div>
//            </div>
//         </div>
//         {questions.map((question, qIndex) => (
//           <div
//             key={question.id}
//             className="flex border-2 border-rose-500 py-4"
//           >
//            <div className="w-full grid md:grid-cols-6 max-md:grid-cols-2 border-2 border-sky-500 ">
//             <h3 className=" col-span-2  border-2 border-green-500">
//               {question.text}
//             </h3>
//               {question.options.map((option, oIndex) => (
//                 <label
//                   key={oIndex}
//                   className="flex items-center  cursor-pointer group border-2 border-red-900"
//                 >
//                   <div className="relative w-6 h-6 flex-shrink-0">
//                     <input
//                       type="radio"
//                       name={`question-${qIndex}`}
//                       checked={answers[qIndex] === oIndex}
//                       onChange={() => handleAnswerChange(qIndex, oIndex)}
//                       className="absolute opacity-0 w-0 h-0"
//                     />
//                     <div
//                       className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300"
//                       style={{ borderColor: tickColors[qIndex] }} // همیشه هم‌رنگ تیک
//                     >
//                       {answers[qIndex] === oIndex && (
//                         <svg
//                           className="w-8 h-8 absolute -top-1 -right-1"
//                           fill="none"
//                           stroke={tickColors[qIndex]}
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="3"
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       )}
//                     </div>
//                   </div>
//                   <span
//                     className={`text-sm md:text-base font-medium transition-colors ${
//                       answers[qIndex] === oIndex
//                         ? `text-[${tickColors[qIndex]}]`
//                         : "text-gray-700 group-hover:text-gray-900"
//                     }`}
//                   >
//                     {option}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         ))}
//         {isComplete && suggestedProducts.length > 0 && (
//           <div className="mt-12 text-center animate-fadeIn">
//             <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
//               محصولات پیشنهادی برای شما
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//               {suggestedProducts.map((product, index) => (
//                 <div
//                   key={index}
//                   className="bg-gradient-to-r from-gray-50 to-indigo-50 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 rounded-xl object-cover mb-4 transform transition-transform duration-500 hover:scale-110"
//                   />
//                   <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
//                     {product.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {product.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Questionnaire;



// import React, { useState } from "react";

// // سوالات و گزینه‌ها (هر سوال ۴ گزینه)
// const questions = [
//   {
//     id: 1,
//     text: "رنگ مورد علاقه شما چیست؟",
//     options: [
//       { label: "قرمز", latin: "Red" },
//       { label: "آبی", latin: "Blue" },
//       { label: "سبز", latin: "Green" },
//       { label: "زرد", latin: "Yellow" },
//     ],
//   },
//   {
//     id: 2,
//     text: "حیوان مورد علاقه شما چیست؟",
//     options: [
//       { label: "سگ", latin: "Dog" },
//       { label: "گربه", latin: "Cat" },
//       { label: "پرنده", latin: "Bird" },
//       { label: "ماهی", latin: "Fish" },
//     ],
//   },
//   {
//     id: 3,
//     text: "فصل مورد علاقه شما چیست؟",
//     options: [
//       { label: "بهار", latin: "Spring" },
//       { label: "تابستان", latin: "Summer" },
//       { label: "پاییز", latin: "Autumn" },
//       { label: "زمستان", latin: "Winter" },
//     ],
//   },
//   {
//     id: 4,
//     text: "غذای مورد علاقه شما چیست؟",
//     options: [
//       { label: "پیتزا", latin: "Pizza" },
//       { label: "سوشی", latin: "Sushi" },
//       { label: "سالاد", latin: "Salad" },
//       { label: "برگر", latin: "Burger" },
//     ],
//   },
// ];

// // رنگ‌های کاستوم برای تیک و مرز هر سوال
// const tickColors = ["#EF4444", "#3B82F6", "#10B981", "#F59E0B"];

// // لیست نام‌های خاص و تصاویر برای محصولات (نمونه)
// const productDetails = [
//   {
//     key: "0,0,0,0",
//     name: "ستاره سرخ",
//     image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
//   },
//   {
//     key: "0,0,0,1",
//     name: "برگر آتشین",
//     image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
//   },
//   {
//     key: "0,0,0,2",
//     name: "سالاد بهشتی",
//     image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
//   },
//   {
//     key: "0,0,0,3",
//     name: "سوشی اقیانوس",
//     image: "https://images.unsplash.com/photo-1579584425555-c3ce97fd2f75",
//   },
//   {
//     key: "1,1,1,1",
//     name: "گربه آبی",
//     image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
//   },
//   {
//     key: "2,2,2,2",
//     name: "باغ سبز",
//     image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
//   },
//   {
//     key: "3,3,3,3",
//     name: "زمستان زرد",
//     image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
//   },
// ];

// // تابع برای تولید محصولات
// const generateProducts = () => {
//   const products = {};
//   const options = [0, 1, 2, 3];

//   for (let i of options) {
//     for (let j of options) {
//       for (let k of options) {
//         for (let l of options) {
//           const key = `${i},${j},${k},${l}`;
//           const productDetail = productDetails.find((p) => p.key === key) || {
//             name: `محصول ${i + 1}-${j + 1}-${k + 1}-${l + 1}`,
//             image: "https://via.placeholder.com/300?text=محصول+پیش‌فرض",
//           };
//           products[key] = {
//             name: productDetail.name,
//             description: `این محصول برای افرادی است که گزینه ${questions[0].options[i].label} (رنگ)، ${questions[1].options[j].label} (حیوان)، ${questions[2].options[k].label} (فصل)، و ${questions[3].options[l].label} (غذا) را انتخاب کرده‌اند.`,
//             image: productDetail.image,
//           };
//         }
//       }
//     }
//   }
//   return products;
// };

// const products = generateProducts();

// // تابع برای انتخاب محصولات پیشنهادی
// const getSuggestedProducts = (answers, products) => {
//   const matchedProducts = [];
//   const answerKey = answers.join(",");

//   if (products[answerKey]) {
//     matchedProducts.push(products[answerKey]);
//   }

//   Object.keys(products).forEach((key) => {
//     if (key === answerKey) return;
//     const keyParts = key.split(",").map(Number);
//     if (
//       keyParts[0] === answers[0] ||
//       keyParts[1] === answers[1] ||
//       keyParts[2] === answers[2] ||
//       keyParts[3] === answers[3]
//     ) {
//       matchedProducts.push(products[key]);
//     }
//   });

//   while (matchedProducts.length < 3) {
//     const randomKey = Object.keys(products)[
//       Math.floor(Math.random() * Object.keys(products).length)
//     ];
//     if (!matchedProducts.includes(products[randomKey])) {
//       matchedProducts.push(products[randomKey]);
//     }
//   }

//   const shuffled = matchedProducts.sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, 3);
// };

// const Questionnaire = () => {
//   const [answers, setAnswers] = useState([null, null, null, null]);

//   // تابع برای تغییر پاسخ‌ها
//   const handleAnswerChange = (questionIndex, optionIndex) => {
//     const newAnswers = [...answers];
//     newAnswers[questionIndex] = optionIndex;
//     setAnswers(newAnswers);
//   };

//   // بررسی آیا همه سوالات پاسخ داده شده‌اند
//   const isComplete = answers.every((answer) => answer !== null);

//   // انتخاب محصولات پیشنهادی
//   const suggestedProducts = isComplete ? getSuggestedProducts(answers, products) : [];

//   return (
//     <div dir="rtl" className="bg-gray-300">
//       <div className="border-2 border-red-900 md:px-16 max-md:px-2">
//         <h1 className="text-center py-6 text-[18px] font-bold">
//           رایحــــــه ی دلــخواهتـــو انـتــخـــاب کـــن
//         </h1>
//         {questions.map((question, qIndex) => (
//           <div key={question.id} className="flex border-2 border-rose-500 py-4">
//             <div className="w-full grid md:grid-cols-6 max-md:grid-cols-2 border-2 border-sky-500 ">
//               <h3 className="col-span-2 border-2 border-green-500 flex items-center ">
//                 {question.text}
//               </h3>
//               {question.options.map((option, oIndex) => (
//                 <label key={oIndex} className="flex items-center cursor-pointer group border-2 border-red-900">
//                   <div className="relative w-6 h-6 flex-shrink-0">
//                     <input
//                       type="radio"
//                       name={`question-${qIndex}`}
//                       checked={answers[qIndex] === oIndex}
//                       onChange={() => handleAnswerChange(qIndex, oIndex)}
//                       className="absolute opacity-0 w-0 h-0"
//                     />
//                     <div
//                       className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300"
//                       style={{ borderColor: tickColors[qIndex] }} // همیشه هم‌رنگ تیک
//                     >
//                       {answers[qIndex] === oIndex && (
//                         <svg
//                           className="w-8 h-8 absolute -top-1 -right-1"
//                           fill="none"
//                           stroke={tickColors[qIndex]}
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="3"
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       )}
//                     </div>
//                   </div>
//                   <span className="text-sm md:text-base font-medium transition-colors">
//                     {option.label}
//                     <br />
//                     <span className="text-xs text-gray-600">{option.latin}</span>
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         ))}
//         {isComplete && suggestedProducts.length > 0 && (
//           <div className="mt-12 text-center animate-fadeIn">
//             <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
//               محصولات پیشنهادی برای شما
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
//               {suggestedProducts.map((product, index) => (
//                 <div
//                   key={index}
//                   className="bg-gradient-to-r from-gray-50 to-indigo-50 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
//                 >
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 rounded-xl object-cover mb-4 transform transition-transform duration-500 hover:scale-110"
//                   />
//                   <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
//                     {product.name}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {product.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Questionnaire;



import React, { useState } from "react";

// سوالات و گزینه‌ها (هر سوال ۴ گزینه) با رنگ‌های خاص
const questions = [
  {
    id: 1,
    text: "رنگ مورد علاقه شما چیست؟",
    options: [
      { label: "قرمز", latin: "Red" },
      { label: "آبی", latin: "Blue" },
      { label: "سبز", latin: "Green" },
      { label: "زرد", latin: "Yellow" },
    ],
    tickColor: "#EF4444", // قرمز برای تیک و مرز
    numberColor: "#7F1D1D", // قرمز تیره برای عدد
  },
  {
    id: 2,
    text: "حیوان مورد علاقه شما چیست؟",
    options: [
      { label: "سگ", latin: "Dog" },
      { label: "گربه", latin: "Cat" },
      { label: "پرنده", latin: "Bird" },
      { label: "ماهی", latin: "Fish" },
    ],
    tickColor: "#3B82F6", // آبی برای تیک و مرز
    numberColor: "#1E3A8A", // آبی تیره برای عدد
  },
  {
    id: 3,
    text: "فصل مورد علاقه شما چیست؟",
    options: [
      { label: "بهار", latin: "Spring" },
      { label: "تابستان", latin: "Summer" },
      { label: "پاییز", latin: "Autumn" },
      { label: "زمستان", latin: "Winter" },
    ],
    tickColor: "#10B981", // سبز برای تیک و مرز
    numberColor: "#064E3B", // سبز تیره برای عدد
  },
  {
    id: 4,
    text: "غذای مورد علاقه شما چیست؟",
    options: [
      { label: "پیتزا", latin: "Pizza" },
      { label: "سوشی", latin: "Sushi" },
      { label: "سالاد", latin: "Salad" },
      { label: "برگر", latin: "Burger" },
    ],
    tickColor: "#F59E0B", // زرد برای تیک و مرز
    numberColor: "#78350F", // قهوه‌ای تیره برای عدد
  },
];

// لیست نام‌های خاص و تصاویر برای محصولات (نمونه)
const productDetails = [
  {
    key: "0,0,0,0",
    name: "ستاره سرخ",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    key: "0,0,0,1",
    name: "برگر آتشین",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    key: "0,0,0,2",
    name: "سالاد بهشتی",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
  {
    key: "0,0,0,3",
    name: "سوشی اقیانوس",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce97fd2f75",
  },
  {
    key: "1,1,1,1",
    name: "گربه آبی",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
  },
  {
    key: "2,2,2,2",
    name: "باغ سبز",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
  },
  {
    key: "3,3,3,3",
    name: "زمستان زرد",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
  },
];

// تابع برای تولید محصولات
const generateProducts = () => {
  const products = {};
  const options = [0, 1, 2, 3];

  for (let i of options) {
    for (let j of options) {
      for (let k of options) {
        for (let l of options) {
          const key = `${i},${j},${k},${l}`;
          const productDetail = productDetails.find((p) => p.key === key) || {
            name: `محصول ${i + 1}-${j + 1}-${k + 1}-${l + 1}`,
            image: "https://via.placeholder.com/300?text=محصول+پیش‌فرض",
          };
          products[key] = {
            name: productDetail.name,
            description: `این محصول برای افرادی است که گزینه ${questions[0].options[i].label} (رنگ)، ${questions[1].options[j].label} (حیوان)، ${questions[2].options[k].label} (فصل)، و ${questions[3].options[l].label} (غذا) را انتخاب کرده‌اند.`,
            image: productDetail.image,
          };
        }
      }
    }
  }
  return products;
};

const products = generateProducts();

// تابع برای انتخاب محصولات پیشنهادی
const getSuggestedProducts = (answers, products) => {
  const matchedProducts = [];
  const answerKey = answers.join(",");

  if (products[answerKey]) {
    matchedProducts.push(products[answerKey]);
  }

  Object.keys(products).forEach((key) => {
    if (key === answerKey) return;
    const keyParts = key.split(",").map(Number);
    if (
      keyParts[0] === answers[0] ||
      keyParts[1] === answers[1] ||
      keyParts[2] === answers[2] ||
      keyParts[3] === answers[3]
    ) {
      matchedProducts.push(products[key]);
    }
  });

  while (matchedProducts.length < 3) {
    const randomKey = Object.keys(products)[
      Math.floor(Math.random() * Object.keys(products).length)
    ];
    if (!matchedProducts.includes(products[randomKey])) {
      matchedProducts.push(products[randomKey]);
    }
  }

  const shuffled = matchedProducts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

const Questionnaire = () => {
  const [answers, setAnswers] = useState([null, null, null, null]);

  // تابع برای تغییر پاسخ‌ها
  const handleAnswerChange = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  // بررسی آیا همه سوالات پاسخ داده شده‌اند
  const isComplete = answers.every((answer) => answer !== null);

  // انتخاب محصولات پیشنهادی
  const suggestedProducts = isComplete ? getSuggestedProducts(answers, products) : [];

  return (
    <div dir="rtl" className="bg-gray-300">
      <div className="border-2 border-red-900 md:px-16 max-md:px-2">
        <h1 className="text-center py-6 text-[18px] font-bold">
          رایحــــــه ی دلــخواهتـــو انـتــخـــاب کـــن
        </h1>
        {questions.map((question, qIndex) => (
          <div
            key={question.id}
            className="flex border-2 border-rose-500 py-4 items-center"
          >
            <div className="flex items-center mr-4">
              <div
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold"
                style={{
                  borderColor: question.tickColor,
                  backgroundColor: `${question.tickColor}20`, // 20% شفافیت برای پس‌زمینه روشن
                  color: question.numberColor,
                }}
              >
                {qIndex + 1}
              </div>
            </div>
            <div className="w-full grid md:grid-cols-6 max-md:grid-cols-2 border-2 border-sky-500">
              <h3 className="col-span-2 border-2 border-green-500 flex items-center">
                {question.text}
              </h3>
              {question.options.map((option, oIndex) => (
                <label
                  key={oIndex}
                  className="flex items-center cursor-pointer group border-2 border-red-900"
                >
                  <div className="relative w-6 h-6 flex-shrink-0">
                    <input
                      type="radio"
                      name={`question-${qIndex}`}
                      checked={answers[qIndex] === oIndex}
                      onChange={() => handleAnswerChange(qIndex, oIndex)}
                      className="absolute opacity-0 w-0 h-0"
                    />
                    <div
                      className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300"
                      style={{ borderColor: question.tickColor }} // همیشه هم‌رنگ تیک
                    >
                      {answers[qIndex] === oIndex && (
                        <svg
                          className="w-8 h-8 absolute -top-1 -right-1"
                          fill="none"
                          stroke={question.tickColor}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm md:text-base font-medium transition-colors">
                    {option.label}
                    <br />
                    <span className="text-xs text-gray-600">{option.latin}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
        {isComplete && suggestedProducts.length > 0 && (
          <div className="mt-12 text-center animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              محصولات پیشنهادی برای شما
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {suggestedProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-indigo-50 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 rounded-xl object-cover mb-4 transform transition-transform duration-500 hover:scale-110"
                  />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;