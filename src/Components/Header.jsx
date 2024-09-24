import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex justify-between py-[20px] px-[25px] font-semibold border-b">
      <div>
        <p>
          Yummy <span className="text-[#fbc531]  ">Food</span>
        </p>
      </div>

      <div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>offers</li>
          <li>Sign In</li>
        </ul>
        <div>
          <GiHamburgerMenu />
        </div>
      </div>
      <div>
        <p>
          <FaCartShopping size={30} />
        </p>
      </div>
    </div>
  );
};

export default Header;
