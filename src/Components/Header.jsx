import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [sideNav,setSideNav]=useState(false)
  console.log(sideNav);
  
  return (
    <div className="flex justify-between py-[20px] px-[25px] font-semibold border-b relative">
      <div>
        <p>
          Yummy <span className="text-[#fbc531]  ">Food</span>
        </p>
      </div>

      <div>
        <ul className="sm:flex gap-4 hidden cursor-pointer">
          <li className="hover:text-[#fbc531]">Home</li>
          <li className="hover:text-[#fbc531]">About</li>
          <li className="hover:text-[#fbc531]">offers</li>
          <li className="hover:text-[#fbc531]">Sign In</li>
        </ul>
       
      </div>
     {/* {
      sideNav?<div className="bg-[#f5f6fa] w-[300px] absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center">
      <RxCross2 
        size={25}
        className="absolute top-3 right-3 cursor-pointer"
        onClick={()=>setSideNav(!sideNav)}/>

      
        
              <ul className="flex gap-4  cursor-pointer">
                <li className="hover:text-[#fbc531]">Home</li>
                <li className="hover:text-[#fbc531]">About</li>
                <li className="hover:text-[#fbc531]">offers</li>
                <li className="hover:text-[#fbc531]">Sign In</li>
              </ul>
             
            </div>
     } */}

{
  sideNav && (
    <div className="bg-[#f5f6fa] w-[300px] absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center">
      <RxCross2 
        size={25}
        className="absolute top-3 right-3 cursor-pointer"
        onClick={()=>setSideNav(!sideNav)}/>

      
        
              <ul className="flex gap-12   cursor-pointer flex-col">
                <li className="hover:text-[#fbc531]">Home</li>
                <li className="hover:text-[#fbc531]">About</li>
                <li className="hover:text-[#fbc531]">offers</li>
                <li className="hover:text-[#fbc531]">Sign In</li>
              </ul>
             
            </div>
  )
}

      <div className="flex gap-5">
        <p>
          <GiHamburgerMenu size={30} className="cursor-pointer block sm:hidden" 
          onClick={()=>setSideNav(!sideNav)}/>
        </p>
        <p>
          <FaCartShopping size={30} />
        </p>
      </div>
    </div>
  );
};

export default Header;




