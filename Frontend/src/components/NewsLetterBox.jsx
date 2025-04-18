import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NewsLetterBox = () => {
  const [email, setEmail] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    toast.success('Subscription Successful! Stay Tuned 🎉', {
      position: 'top-right',
      autoClose: 3000,
    })
    
    
    setEmail('')
  }

  return (
    <div className='text-center'>
      
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Enter your email to subscribe and receive instant notifications about our latest collections and exclusive updates
      </p>
      <form
        onSubmit={onSubmitHandler}
        className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'
      >
        <input
          className='w-full sm:flex-1 outline-none'
          type='email'
          placeholder='Enter your email'
          required
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
      
  
        <button class="bg-black group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-sm  px-6 font-medium text-neutral-200 transition hover:scale-110">
  <span>SUBSCRIBE</span>
  <div class="absolute inset-0 flex h-full w-full justify-center transform skew-[-12deg] translate-x-[-100%] group-hover:duration-1000 group-hover:transform group-hover:translate-x-[120%] group-hover:skew-[12deg]">
    <div class="relative h-full w-8 bg-white/20"></div>
  </div>
</button>
      </form>
      
    </div>

   
  )
}

export default NewsLetterBox