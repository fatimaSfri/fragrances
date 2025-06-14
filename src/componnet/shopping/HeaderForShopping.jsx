import "../../index.css";

export default function HeaderForShopping() {
   
   const odd ="relative text-white md:text-[20px] sm:text-[18px] max-sm:text-[14px] max-sm:font-bold cursor-pointerafter:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-white  after:w-0 after:transition-all after:duration-300 hover:after:w-full"

  return (
    <div className="bg-banner sm:h-24 max-sm:h-16 bg-cover w-full flex flex-row-reverse sm:justify-between px-10 items-center relative max-sm:justify-end ">
      <div className="flex gap-4 max-sm:hidden ">
        <div className="flex  flex-col items-center justify-center -mr-[10px]">
          <p className="sm:text-[16px] max-sm:text-[14px]  text-[#adbcb5] font-bold ">
            MOMENT OF LIFE
          </p>
          <p className="sm:text-[16px] max-sm:text-[14px]  text-[#adbcb5]">
            {" "}
            و دیـــــگـــــر ، هــیــــــچ
          </p>
        </div>

        <div>
          <img
            src="../../img/logo/gold-logo.png"
            alt=""
            className="opacity-[65%] md:h-16  max-md:h-12"
          />
        </div>

        <div className="flex  flex-col items-center justify-center -ml-2">
          <p className="sm:text-[16px] max-sm:text-[14px] text-[#adbcb5] font-bold">
            OUD STORE HICH
          </p>
          <p className="sm:text-[16px]  max-sm:text-[14px] text-[#adbcb5]">
            عــــود های دست ساز
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-row-reverse gap-6">
        <div
          className={odd}>
          خانـــه
        </div>
        <div
          className={odd}>
          محصــولات
        </div>
        <div
          className={odd}>
          سفارشات
        </div>
        <div
          className={odd}>
          مجله هیچ
        </div>
        </div>
      </div>
    </div>
  );
}
