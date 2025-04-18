// import React from 'react'
// import { assets } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div>
//         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
//           <div>
//             <img src={assets.logo} className='mb-5 w-32' alt="" />
//             <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum placeat, cum eligendi officiis nemo fuga amet suscipit impedit beatae explicabo illo harum voluptatum delectus nobis ipsa qui. Illo, architecto sint!</p>
//           </div>
//           <div>
//             <p className='text-xl font-medium mb-5'>COMPANY</p>
//             <ul className='flex flex-col gap-1 txt-gray-600'>
//                  <li>Home</li>
//                  <li>About Us</li>
//                  <li>Delivery</li>
//                  <li> Privacy Policy</li>
//             </ul>
//           </div>

//           <div>
//             <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
//             <ul className='flex flex-col gap-1 txt-gray-600'>
//                 <li>+1-234-567-089</li>
//                 <li>contact@fashionforever.com</li>
//             </ul>
//           </div>
//         </div>

//         <div>
//             <hr />
//             <p className='py-5 text-sm text-center'> Copyright 2025 @ FashionFoever.com - All right Reserved.</p>
//         </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div >
        <div className=' flex flex-col mb-2 sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
          <div  >
            <img src={assets.logo} className='mb-5 w-32 transition-transform duration-200 hover:scale-125' alt="" />
            <p className='w-full md:w-2/3 text-gray-600 '>Fashion Forever is your ultimate online destination for stylish and timeless fashion. From chic everyday essentials to statement pieces for every occasion, we curate the latest trends and classic styles to help you express your unique personality. With a focus on quality, comfort, and affordability, Fashion Forever ensures you stay ahead of the curve, offering the finest in men's and women's apparel, accessories, and footwear. Whether you’re shopping for a special event or refreshing your wardrobe, Fashion Forever is here to help you look and feel your best, every day.</p>
          </div>
          <div >
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 txt-gray-600 '>
                 <li className=''>
                  <Link to="/" className=" hover:text-pink-400" >Home</Link>
                 </li>
                 <li> <Link to="/about" className="hover:text-pink-400"> About Us</Link></li>
                 <li >
                  <Link to="/orders" className="hover:text-pink-400 "  >Delivery</Link></li>
                 <li>
                  <Link to="/" className="hover:text-pink-400 ">Our policy</Link>
                  </li>
                  
            </ul>
            <ul>
            <div class="flex justify-center space-x-8 py-20 pl-2 ">
    <a href="#" class="text-2xl  ease-in-out transition-transform duration-200 hover:scale-125 hover:text-blue-500">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="#" class="text-2xl   transition-transform duration-200 hover:scale-125 ease-in-out hover:text-blue-400">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="#" class="text-2xl   transition-transform duration-200 hover:scale-125 ease-in-out hover:text-pink-400">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="#" class="text-2xl   transition-transform duration-200 hover:scale-125 ease-in-out hover:text-red-500">
      <i class="fab fa-youtube"></i>
    </a>
    <a href="#" class="text-2xl   transition-transform duration-200 hover:scale-125 ease-in-out hover:text-gray-400">
      <i class="fab fa-linkedin-in"></i>
    </a>
  </div>
            </ul>
          </div>

          <div >
            <p className='text-xl font-medium mb-5 '> GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 txt-gray-600 hover:text-pink-400'>
                <li>+1-234-567-089</li>
                <li>contact@fashionforever.com</li>
            </ul>
          </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center font-semibold'> Copyright 2025 @ FashionForever.com - All right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer