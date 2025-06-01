

const Header = ({ isScrolled }) => {
  return (
    <div
      className={` fixed w-full h-[80px] flex items-center sm:gap-10 max-sm:gap-5 transition-all duration-300 z-10 ${
        isScrolled ? 'bg-[#886b41] opacity-80 px-8' : 'bg-transparent sm:mx-14 max-sm:mx-5 md:py-8 max-md:py-6 '
      }`}
    >
      <div
        className="relative text-white md:text-[20px] sm:text-[18px] max-sm:text-[16px] max-sm:font-bold cursor-pointer
        after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-white 
        after:w-0 after:transition-all after:duration-300 hover:after:w-full"
      >
        خانه
      </div>
      <div
        className="relative text-white md:text-[20px] sm:text-[18px] max-sm:text-[16px] max-sm:font-bold cursor-pointer
        after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-white 
        after:w-0 after:transition-all after:duration-300 hover:after:w-full"
      >
        محصولات
      </div>
      <div
        className="relative text-white md:text-[20px] sm:text-[18px] max-sm:text-[16px] max-sm:font-boldcursor-pointer
        after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-white 
        after:w-0 after:transition-all after:duration-300 hover:after:w-full"
      >
        سفارشات
      </div>
      <div
        className="relative text-white md:text-[20px] sm:text-[18px] max-sm:text-[14px] max-sm:font-bold cursor-pointer
        after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-white 
        after:w-0 after:transition-all after:duration-300 hover:after:w-full"
      >
        مجله هیچ
      </div>
    </div>
  );
};

export default Header;