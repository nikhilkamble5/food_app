// import React, { useEffect, useState } from 'react'
// import { FaChevronLeft } from "react-icons/fa6";
// import { FaChevronRight } from "react-icons/fa6";

// const Hero = () => {
//     const imgData=[
//         {
//             url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
//           },
//           {
//             url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
//           },
//           {
//             url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
//           },
      
//     ]
//     const [slider,setSlider]=useState(0)
//     const handlePlus=()=>{
//         setSlider(slider===imgData.length-1?0: slider+1)
//     };

//     const handleMinus=()=>{
//         setSlider(slider===0?imgData.length-1: slider-1)

//     };

//     useEffect(()=>{
//         const sliderClear=setInterval(()=>{
//             handlePlus()
//         },2000)
//         return()=>clearInterval(sliderClear)
//     },[slider])
//   return (
//     <>
//     <div>   

//         <div className='w-[90%] mx-auto h-[80vh] my-5 relative'>
//             {
//                 imgData.map((item,i)=>(
//                     <div key={i} className={`${slider===i?"block":"hidden"}`}>
//             <img src={item.url} alt="" className='w-full h-[80vh] rounded-2xl object-cover' />

//                     </div>
//                 ))
//             }
//         </div>
//         <div className='w-full mx-auto h-[80vh] bg-black opacity-50 absolute top-0 left-0 rounded-2xl'></div>
//         <div className='flex justify-between w-full px-5 absolute top-[50%] text-white'>
//         <FaChevronLeft size={35} className='cursor-pointer' onClick={handleMinus}/>
//         <FaChevronRight size={35} className='cursor-pointer'  onClick={handlePlus} />

//         </div>
//         </div>
//     </>
//   )
// }

// export default Hero
import React, { useEffect, useState } from 'react';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Hero = () => {
    const imgData = [
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
        }
    ];

    const [slider, setSlider] = useState(0);

    const handlePlus = () => {
        setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
    };

    const handleMinus = () => {
        setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
    };

    useEffect(() => {
        const sliderClear = setInterval(() => {
            handlePlus();
        }, 2000);
        return () => clearInterval(sliderClear);
    }, [slider]);

    return (
        <>
            <div className='w-[90%] mx-auto h-[80vh] my-5 relative'>
                {/* Image Slider */}
                {
                    imgData.map((item, i) => (
                        <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
                            <img src={item.url} alt="" className='w-full h-[80vh] rounded-2xl object-cover' />
                        </div>
                    ))
                }

                {/* Overlay stays inside the slider */}
                <div className='w-full h-full bg-black opacity-50 absolute top-0 left-0 rounded-2xl'></div>

                {/* Navigation Arrows */}
                <div className='flex justify-between w-full px-5 absolute top-[50%] text-white'>
                    <FaChevronLeft size={35} className='cursor-pointer' onClick={handleMinus} />
                    <FaChevronRight size={35} className='cursor-pointer' onClick={handlePlus} />
                </div>
            </div>
        </>
    );
};

export default Hero;
