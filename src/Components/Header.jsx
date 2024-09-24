import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='flex justify-between py-[20px] px-[25px]'>
        
        <div>
            <p>Yummy <span>Food</span></p>
        </div>

        <div>
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>offers</li>
                <li>Sign In</li>

            </ul>
        </div>
        <div>
            <p><FaCartShopping />
            </p>
        </div>
    </div>
  )
}

export default Header