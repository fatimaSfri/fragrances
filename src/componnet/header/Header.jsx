

const Header = ({ isScrolled }) => {
  return (
    <div
      className={`fixed w-full h-[60px] flex items-center sm:gap-10 max-sm:gap-5 transition-all duration-300 z-10 ${
        isScrolled ? 'bg-[#886b41] opacity-80 px-8' : 'bg-transparent sm:px-14 max-sm:px-5 md:py-8 max-md:py-6 '
      }`}
    >
      <div
        className="relative text-white sm:text-[16px] max-sm:text-[14px] max-sm:font-bold cursor-pointer
        after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-white 
        after:w-0 after:transition-all after:duration-300 hover:after:w-full"
      >
        HOME
      </div>
      <div
        className="relative text-white sm:text-[16px] max-sm:text-[14px] max-sm:font-bold cursor-pointer
        after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-white 
        after:w-0 after:transition-all after:duration-300 hover:after:w-full"
      >
        PRODUCT
      </div>
      <div
        className="relative text-white sm:text-[16px] max-sm:text-[14px] max-sm:font-bold cursor-pointer
        after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-white 
        after:w-0 after:transition-all after:duration-300 hover:after:w-full"
      >
        ABOUT
      </div>
    </div>
  );
};

export default Header;