// components/Header.js

import React from 'react';
import { FaSearch, FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='bg-white shadow-sm text-gray-700'>
<div className='header p-10 pt-4 pb-4 flex justify-between items-center'>
    <div className='headerfirstin flex items-center gap-[10px]'>
<img src='zintool.jpg' alt='' className=''></img>
<h3 className='text-2xl font-extrabold'>Zin Tools</h3>
    </div>
    <div className='headersecondin flex bg-gray-300 w-[480px] rounded-full flex justify-evenly'>
    <form className="search_form__9i3b5 flex items-center p-4 pt-2 pb-2">
             <input
               type="text"
               
               className="search_input__tEifi focus:outline-none placeholder-p-[2px] placeholder-text-[20px] placeholder-gray-500 bg-gray-300 w-[420px]"
               placeholder="Search for Movies, TV Shows, Themes & Cast "
               value=""
             />
             {/* <span className="search_loader__gfFUW"></span> */}
             <span className="search_submit__AlnBT text-[20px]">
               <FaSearch /> {/* Using react-icons FaSearch component */}
             </span>
           </form>
    </div>
    <div className='thirdinn flex gap-[20px]'>
        <button className='text-[14px] font-[600] leading-[18px]'>Log In</button>
        <button className='bg-blue-400 pt-[10px] pb-[10px] pl-[25px] pr-[25px] text-[14px] font-[600] leading-[18px] rounded-full'>Sign up</button>
    </div>
</div>
<div className='headersecondinner p-10 pt-4 pb-2'>
    <nav className='text-[14px] font-[600]'>
    <a href="#" className="mr-12 ml-4">Stock Video</a>
  <a href="#" className="mr-12">Video Templates</a>
  <a href="#" className="mr-12">Music</a>
  <a href="#" className="mr-12">Sound Effects</a>
  <a href="#" className="mr-12">Graphic Templates</a>
  <a href="#" className="mr-12">Graphics</a>
  <a href="#" className="mr-12">Presentation Templates</a>
  <a href="#" className="mr-12">Photos</a>
  <a href="#" className="mr-12">Fonts</a>
  <a href="#" className="mr-12">Add-ons</a>
  <a href="#" className="mr-12">More</a>
    </nav>
</div>
    </header>
    
  );
};

export default Header;
