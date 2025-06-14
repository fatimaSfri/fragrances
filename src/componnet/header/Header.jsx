


const Header = ({ isScrolled }) => {
  return (
    <div className={` fixed w-full h-[80px] z-10 transition-all duration-300 flex max-sm:flex-col items-center sm:justify-between gap-8  ${
      isScrolled ? 'bg-[#886b41] bg-opacity-80 px-8 max-sm:justify-center' : 'bg-transparent sm:mx-14  md:py-8 max-md:py-6 '
    }`}>

     
    <div
      className={` flex items-center sm:gap-10 max-sm:gap-5 `}
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
        className="relative text-white md:text-[20px] sm:text-[18px] max-sm:text-[16px] max-sm:font-bold cursor-pointer
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



    {/*  */}
    <div className={` flex opacity-100 ${isScrolled ? 'max-sm:hidden' : 'sm:ml-28'}`}>

<div className='flex  flex-col items-center justify-center -mr-[10px]'>
  <p className='sm:text-[16px] max-sm:text-[14px]  text-[#5A382F] font-bold '>MOMENT OF LIFE</p>
  <p className='sm:text-[16px] max-sm:text-[14px] opacity-50 font-black'> و دیـــــگـــــر ، هــیــــــچ</p>
</div>

<div>
  <img src="../img/logo/logo.png" alt="" className='opacity-[65%] sm:w-14 sm:h-14 
   max-sm:w-12 max-sm:h-12' />
</div>

<div className='flex  flex-col items-center justify-center -ml-2'>
<p className='sm:text-[16px] max-sm:text-[14px] text-[#5A382F] font-bold'>OUD STORE HICH</p>
 <p className='sm:text-[16px]  max-sm:text-[14px] opacity-50 font-black'>عــــود های دست ساز</p>
</div>

</div>
     {/*  */}



    </div>
  );
};

export default Header;