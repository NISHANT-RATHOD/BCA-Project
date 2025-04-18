// import React from 'react'
// import { assets } from '../assets/assets'

// const OurPolicy = () => {
//   return (
//     <div className='flex flex-col  sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
//         <div>
//             <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
//             <p className='font-semibold'>Easy Exchange Policy</p>
//             <p className='text-gray-400'>We Offer hassle free exchange policy</p>
//         </div>

//         <div>
//             <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
//             <p className='font-semibold'>7 Days Return Policy</p>
//             <p className='text-gray-400'>We provide 7 Days free return policy</p>
//         </div>

//         <div>
//             <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
//             <p className='font-semibold'>Best Customer Support</p>
//             <p className='text-gray-400'>We provide 24/7 customer support</p>
//         </div>
//     </div>
//   )
// }

// export default OurPolicy
import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div id='ourpolicy'>
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 '>
        <div class="transition-transform duration-200 hover:scale-125  hover:text-pink-400">
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5 ' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer a hassle-free exchange policy. </p>
        </div>

        <div class="transition-transform duration-200 hover:scale-125  hover:text-pink-400">
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide a 7-day free return policy.</p>
        </div>

        <div class="transition-transform duration-200 hover:scale-125  hover:text-pink-400">
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We provide 24/7 customer support . </p>
        </div>
      </div>

      {/* <p className='text-gray-500 text-center mt-2 pb-20 font-medium px-28'>
      At  FashionForever , we are committed to delivering an exceptional shopping experience. Our customer-first approach is reflected in our easy exchange policy, 7-day free returns, and 24/7 customer support. We aim to provide you with peace of mind and confidence in every purchase, ensuring that you're fully supported throughout your journey with us. Your satisfaction is our top priority, and we strive to make your experience as seamless and rewarding as possible. Shop with confidence, knowing that we’re always here to assist you.
      </p> */}
    </div>
  )
}

export default OurPolicy