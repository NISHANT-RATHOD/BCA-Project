import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 md-28'>
         <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
         <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold tex-xl text-gray-600'> Our Store</p>
          <p className='text-gray-500'>5470 Willms Station <br/> Suite 350, Washinton, USA</p>
          <p className='text-gray-500'>Tel: (475) 758-456 <br/> Email: admin@ForeverFashion.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers ar ForeverFashion</p>
          <p className='text-gray-500'>Learn more about out teams and job openings.</p>
          <button className="rounded-md border-2  border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none">
            Explore Jobs
          </button>
         </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact