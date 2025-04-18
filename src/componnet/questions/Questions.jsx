import React, { useState } from "react";

const questions = [
  {
    id: 1,
    text: "رایحه مورد نظر شما از نظر دما چگونه باشد؟",
    options: [
      { label: " گــرم(ادویه ای و غنی)  ", latin: "WARM RICH , SPICY" },
      { label: "سرد(تازه و خنک)", latin: "COOL-FRESH,CRISP" },
      { label: "خنثی (متعادل و ملایم)", latin: "NEUTRAL-BALANCED" },
      { label: "ترکیبی (ترکیبی از گرم و سرد)", latin: "MIXED-COMPLEXBLEND" },
    ],
    tickColor: "#46493e",
    numberColor: "#46493e",
    bgColor:'#adbcb5'
  },
  {
    id: 2,
    text: " کدام عنصر طبیعی را بیشتر دوست دارید ؟",
    options: [
      { label: "چوب (خاکی و گرم)", latin: "WOODY -EARTHY,RESINOUS" },
      { label: "گل ها (لطیف و عاشقانه)", latin: "FLORAL-SOFT,DELICATE" },
      { label: "گیاهان (سبز و معطر)", latin: "HERBAL -GREEN,AROMATIC" },
      { label: "دریا (مرطوب و بادی)", latin: "AQUATIC -MARINE,BREEZY" },
    ],
    tickColor: "#5a372f",
    numberColor: "#caab7f",
     bgColor:'#5a372f'
  },
  {
    id: 3,
    text: "شدت رایحه مورد نظر شما چقدر باشد؟",
    options: [
      { label: "ملایم (سبک و ظریف)", latin: "SUBTLE -LIGHT,WHISPER LIKE" },
      { label: "متوسط (قابل توجه ولی نرم)", latin: "MODERATE -NOTICEABLE BUT SOFT" },
      { label: "قوی (پر شور و برجسته)", latin: "BOLD -STRONG , COMMANDING" },
      { label: "پیچیده (لایه های چند گانه)", latin: "LAYERED -COMPLEX , EVOLVING" },
    ],
    tickColor: "#46493e",
    numberColor: "#46493e",
     bgColor:'#caab7f'
  },
  {
    id: 4,
    text: "چه حسی را میخواهید از رایحه تجربه کنید؟",
    options: [
      { label: "آرامش بخش (دلنشین و آرام)", latin: "TRADITIONAL -CLASSIC TIME HONORED" },
      { label: "انرژی بخش (سرشار از نشاط)", latin: "CONTEMPORARY -MODERN , FRESH" },
      { label: "مرموز (عمیق و راز آلود)", latin: "FUSION -BLEND OF CULTURES" },
      { label: "لوکس (شیک و فاخر)", latin: "" },
    ],
    tickColor: "#caab7f",
    numberColor: "#adbcb5",
     bgColor:'#46493e'
  },
];

const productDetails = [
  { key: "0,0,0,0", name: " لحظه های خانواده", image: "./img/product/family-w-bg.jpg" , price:"175"},
  { key: "0,0,0,1", name: " آرامش طبیعت ", image: "./img/product/nature-w-bg.jpg" , price:"165"},
  { key: "0,0,0,2", name: "آرامش شب ها", image: "./img/product/night-w-bg.jpg" , price:"195" },
  { key: "0,0,0,3", name: " راز لحظه ها", image: "./img/product/secrt-w-bg-jpg" , price:"185" },
  { key: "1,1,1,1", name: " لحظه های عاشقانه", image: "./img/product/love-w-bg.jpg" , price:"205" },
  { key: "2,2,2,2", name: " لحظه های ثروت", image: "./img/product/wealth-w-bg.jpg" , price:"215"},
  { key: "3,3,3,3", name: " آرامش شب ها", image: "./img/product/night-w-bg.jpg" , price:"195" },
  { key: "0,1,2,3", name: " آرامش طبیعت", image: "./img/product/nature-w-bg.jpg" , price:"165"},
  { key: "1,0,3,2", name: " راز لحظه ها", image: "./img/product/secrt-w-bg-jpg" , price:"185" },
  { key: "2,3,1,0",  name: " لحظه های ثروت",image: "./img/product/wealth2-w-bg.jpg" , price:"225"},
];

const Questionnaire = () => {
  const [answers, setAnswers] = useState([null, null, null, null]);

  const handleAnswerChange = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const isComplete = answers.every((answer) => answer !== null);

  const getMatchingProducts = () => {
    if (!isComplete) return [];

    const matchedProducts = [];
    const answerKey = answers.join(",");

    // اول محصولاتی که دقیقاً با کلید مطابقت دارن
    const exactMatch = productDetails.find((p) => p.key === answerKey);
    if (exactMatch) {
      matchedProducts.push(exactMatch);
    }

    // اضافه کردن محصولات مرتبط (مثلاً اونایی که حداقل یه مقدارشون مطابقت داره)
    productDetails.forEach((product) => {
      if (product.key === answerKey) return; // از تکرار محصول دقیق جلوگیری کن
      const productKeyParts = product.key.split(",").map(Number);
      const matchesAny = answers.some(
        (answer, index) => answer === productKeyParts[index]
      );
      if (matchesAny && matchedProducts.length < 3) {
        matchedProducts.push(product);
      }
    });

    // اگه هنوز کمتر از 3 محصول داریم، با بقیه پر کن
    if (matchedProducts.length < 3) {
      const remaining = productDetails.filter(
        (p) => !matchedProducts.includes(p)
      );
      matchedProducts.push(...remaining.slice(0, 3 - matchedProducts.length));
    }

    return matchedProducts.slice(0, 3);
  };

  const matchedProducts = getMatchingProducts();

  return (
    <div dir="rtl" className="bg-gray-300 py-6">
      <div className="lg:px-16 max-lg:px-8 max-md:px-2">
        <div className="flex  items-center justify-center sm:gap-3 max-sm:gap-1 pb-6">
          <div className="flex  mt-2">
            <div className="md:w-3 h-2 max-md:w-2  bg-[#46493e] rounded-s-2xl"></div>
            <div className="md:w-3 h-2 max-md:w-2  bg-[#caab7f] "></div>
            <div className="md:w-3 h-2 max-md:w-2  bg-[#5a372f] "></div>
            <div className="md:w-3 h-2 max-md:w-2  bg-[#adbcb5] rounded-e-2xl"></div>
          </div>
        <h1 className="text-center py-6 md:text-[24px] max-md:text-[18px] max-sm:[10px]">
          رایحــــــه ی دلــخواهتـــو انـتــخـــاب کـــن
        </h1>
        <div className="flex  mt-2">
            <div className="md:w-3 h-2 max-md:w-2  bg-[#46493e] rounded-s-2xl"></div>
            <div className="md:w-3 h-2 max-md:w-2  bg-[#caab7f] "></div>
            <div className="md:w-3 h-2 max-md:w-2  bg-[#5a372f] "></div>
            <div className="md:w-3 h-2 max-md:w-2  bg-[#adbcb5] rounded-e-2xl"></div>
          </div>
        </div>
        {questions.map((question, qIndex) => (
          <div
            key={question.id}
            className="flex  py-4 items-center "
          >
            
            <div className="w-full grid md:grid-cols-6 max-md:grid-cols-2 ">
              <div className="flex col-span-2 items-center max-md:py-2 gap-1">
            <div
                className="md:w-10 md:h-10 max-md:w-8 max-md:h-8 md:text-[52px] max-md:text-[32px] rounded-full flex items-center justify-end pl-1 "
                style={{
                  backgroundColor: `${question.bgColor}`,
                  color: question.numberColor,
                }}
              >
                {qIndex + 1}
              </div>
              <h3 className=" flex items-center text-[16px]">
                {question.text}
              </h3>
              </div>
              {question.options.map((option, oIndex) => (
                <label
                  key={oIndex}
                  className="flex items-center cursor-pointer group  "
                >
                  <div className="relative w-6 h-6 ">
                    <input
                      type="radio"
                      name={`question-${qIndex}`}
                      checked={answers[qIndex] === oIndex}
                      onChange={() => handleAnswerChange(qIndex, oIndex)}
                      className="absolute opacity-0 w-0 h-0"
                    />
                    <div
                      className="w-5 h-5 rounded-full border-2  bg-white flex items-center justify-center transition-all duration-300"
                      style={{ borderColor: question.tickColor }}
                    >
                      {answers[qIndex] === oIndex && (
                        <svg
                          className="w-7 h-7 absolute -top-[8px] -right-2 "
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
                  <span className="lg:text-[18px] max-lg:text-[14px] transition-colors ">
                    {option.label}
                    <br />
                    <span className="lg:text-[12px] max-lg:text-[10px] text-gray-600 ">{option.latin}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
        {isComplete && matchedProducts.length > 0 && (
          <div className="mt-12 text-center animate-fadeIn">
            <div className="flex items-center justify-center relative  py-6">
            <div className="flex ">
            
            
            
          </div>
            
          <div className="w-56 h-5  bg-[#adbcb5] rounded-xl overflow-hidden backdrop-blur-[90px] blur-[1.5px]">
          <div className="w-42 h-5  bg-[#5a372f] rounded-xl ">
          <div className="w-24 h-5  bg-[#caab7f] rounded-xl ">
          <div className="w-14 h-5  bg-[#46493e] rounded-xl "></div>
          </div>
          </div>
        </div>

            <h2 className="absolute md:text-[18px] max-md:text-[16px]  text-white font-bold">
                 جستجوی رایحه ی دوست داشتنی تو
            </h2>
            </div>

            <div className="lg:6/12 max-lg:w-8/12 max-sm:w-full grid grid-cols-3 mx-auto">
              {matchedProducts.map((product, index) => (
                <div
                  key={index}
                  className=" flex flex-col justify-center items-center p-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300?text=تصویر+ناموجود";
                    }}
                  />
                  <p className="mt-2 md:text-[16px] max-md:text-[14px] text-gray-700 whitespace-nowrap ">{product.name}</p>
                  <p className="mt-2 md:text-[16px] max-md:text-[14px] text-gray-700  whitespace-nowrap ">قیمت:{product.price}تومان</p>
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