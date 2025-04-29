import React from "react";
import "./Shopping.css";

export default function FooterShop() {
  return (
    <div className=" bg-road bg-no-repeat bg-cover bg-center w-full h-40 flex flex-col items-center justify-around">
      <p className="md:text-[16px] max-md:text-[14px] text-white text-center Kalameh-thin sm:tracking-widest max-sm:tracking-wider">
        professional Handmode perfumes
      </p>
      <div className="text-[14px]  text-white text-center flex sm:gap-4 max-sm:flex-col-reverse  ">   
       <div  className="text-[14px]  text-white text-center Kalameh-Regular ">
        <p> مهر است و محبت است و باقی همه 
        <span className="text-[#886b41]"> هیچ </span></p>
        </div>
        <p className="text-[14px]  text-white text-center  ">دانی که پس از عمر چه ماند باقی</p>
      </div>
      <div className="flex  max-w-[450px] min-w-[280px] justify-between items-center">
      <a href="">
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src="../img/icon/insta.png" alt=""  className="sm:w-10 max-sm:w-8 cursor-pointer"/>
          <p className="md:text-[14px] max-md:text-[12px] text-white text-center Kalameh-thin">
            INSTAGRAM
          </p> 
        </div>
        </a>

        <div className="flex flex-col gap-2 justify-center items-center">
          <img src="../img/icon/telegram.png" alt=""  className="sm:w-10 max-sm:w-8 cursor-pointer"/>
          <p className="md:text-[14px] max-md:text-[12px] text-white text-center Kalameh-thin">
            TELEGRAM
          </p>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src="../img/icon/whatsapp.png" alt="" className="sm:w-10 max-sm:w-8 cursor-pointer" />
          <p className="md:text-[14px] max-md:text-[12px] text-white text-center Kalameh-thin">
            WHATSAPP
          </p>
        </div>
      </div>
    </div>
  );
}
